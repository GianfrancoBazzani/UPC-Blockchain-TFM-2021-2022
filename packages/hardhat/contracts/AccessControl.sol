// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./FareCalculator.sol";
import "./AccessControlToken.sol";

/* TO DO LIST;
    - crida a ERC20
    - pagar deute   
    - batched versions com future qork
    - tot el tema de la privadesa ens ho passem pel forro de moment
*/
contract AccessControl is Ownable {
    event userBlocked(address indexed userAddress_, uint256 indexed debt);
    event newFare(address indexed fareAddress_);
    event debtPayed(address indexed userAdrdress_);

    enum Status {
        BLOCKED,
        ACTIVATED
    }
    struct UserData {
        Status status;
        uint256[] registers;
        uint256 autentificator;
        bool isInside;
        uint256 debt;
    }

    mapping(address => uint256) public userID;
    UserData[] public user;
    uint256 public nUsers;
    AccessControlToken token;

    FareCalculator[] public fare;
    uint256[] public fareTimeStamp;

    address public hardwareAddress;
    bool public onchainTime;

    /**
     * modifiers
     */
    modifier onlyHardware() {
        require(msg.sender == hardwareAddress, "You're not the hardware");
        _;
    }

    modifier onlyRegistered(address userAddress_) {
        require(userID[userAddress_] > 0, "This user is not registered");
        _;
    }

    modifier onlyActivated(address userAdress_) {
        require(
            userID[userAdress_] > 0 &&
                user[userID[userAdress_] - 1].status == Status.ACTIVATED,
            "This user is not activated"
        );
        _;
    }

    modifier onlyIdInRange(address userAddress_) {
        require(
            msg.sender == userAddress_ || this.owner() == userAddress_,
            "The address is not msg.sener or owner"
        );
        _;
    }

    modifier onlyOnchainTime() {
        require(onchainTime == true, "The onchainTime value should be true");
        _;
    }

    modifier onlyOffchainTime() {
        require(onchainTime == true, "The onchainTime value should be true");
        _;
    }

    modifier onlyOutside(address userAddress_) {
        UserData storage tmpUser = user[userID[userAddress_] - 1];
        require(
            (tmpUser.registers).length % 2 == 0 && !tmpUser.isInside,
            "The user is not outside"
        );
        _;
    }

    modifier onlyInside(address userAddress_) {
        UserData storage tmpUser = user[userID[userAddress_] - 1];
        require(
            (tmpUser.registers).length % 2 == 1 && tmpUser.isInside,
            "The user is not inside"
        );
        _;
    }

    /**
     * constructor and users/fares managment
     */

    constructor(address hardwareAddress_, bool onchainTime_) {
        hardwareAddress = hardwareAddress_;
        onchainTime = onchainTime_;
        nUsers = 0;
    }

    function addUser(address userAddress_) public onlyOwner {
        require(userID[userAddress_] == 0, "User already added");
        user.push();
        nUsers += 1;
        userID[userAddress_] = nUsers;
        UserData storage tmpUser = user[nUsers - 1];
        tmpUser.status = Status.ACTIVATED;
        tmpUser.isInside = false;
    }

    function setAutentificator(uint256 newAutentificator_)
        public
        onlyActivated(msg.sender)
    {
        UserData storage tmpUser = user[userID[msg.sender] - 1];
        tmpUser.autentificator = newAutentificator_;
    }

    function blockUser(address userAddress_)
        public
        onlyOwner
        onlyActivated(userAddress_)
    {
        user[userID[msg.sender] - 1].status = Status.BLOCKED;
        emit userBlocked(userAddress_, 0);
    }

    function unblockUser(address userAdress_)
        public
        onlyOwner
        onlyRegistered(userAdress_)
    {
        UserData storage tmpUser = user[userID[msg.sender] - 1];
        require(tmpUser.status == Status.BLOCKED, "The user is not blocked");
        tmpUser.status = Status.BLOCKED;
    }

    function addFare(address fareAddress_) public onlyOwner {
        //rick: aqui em falta comprobar que implementa la interface
        fareTimeStamp.push(block.timestamp);
        fare.push(FareCalculator(fareAddress_));
        emit newFare(fareAddress_);
    }

    /**
     * accesses registry
     */
    function enter(address userAdress_)
        public
        onlyOnchainTime
        onlyOutside(userAdress_)
    {
        _register(userAdress_, block.timestamp);
    }

    function exit(address userAddress_)
        public
        onlyOnchainTime
        onlyInside(userAddress_)
    {
        _register(userAddress_, block.timestamp);
    }

    function register(address userAdress_) public onlyOnchainTime {
        _register(userAdress_, block.timestamp);
    }

    function enter(address userAdress_, uint256 timestamp_)
        public
        onlyOffchainTime
        onlyOutside(userAdress_)
    {
        _register(userAdress_, timestamp_);
    }

    function exit(address userAdress_, uint256 timestamp_)
        public
        onlyOffchainTime
        onlyInside(userAdress_)
    {
        _register(userAdress_, timestamp_);
    }

    function register(address userAdress_, uint256 timestamp_)
        public
        onlyOffchainTime
    {
        _register(userAdress_, timestamp_);
    }

    /**
     * pay debt
     */
    function payDebt() public onlyRegistered(msg.sender) {
        uint256 debt = user[userID[msg.sender] - 1].debt;
        bool sent = token.transferFrom(msg.sender, address(this), debt);
        require(sent, "Failed to pay debt");
        user[userID[msg.sender] - 1].debt = 0;
        emit debtPayed(msg.sender);
    }

    /**
     * view functions
     */
    function getUserRegisters(address userAddress_)
        public
        view
        onlyRegistered(userAddress_)
        returns (uint256[] memory)
    {
        return user[userID[userAddress_] - 1].registers;
    }

    function isInside(address userAddress_)
        public
        view
        onlyRegistered(userAddress_)
        returns (bool)
    {
        return user[userID[msg.sender] - 1].isInside;
    }

    function isInside(address userAddress_, uint256 timestamp_)
        public
        view
        onlyRegistered(userAddress_)
        returns (bool)
    {
        return _isInsideID(userID[userAddress_] - 1, timestamp_);
    }

    function occupancy() public view returns (uint256) {
        uint256 nInside = 0;
        for (uint256 i = 0; i < nUsers; ++i) {
            if (_isInsideID(i, block.timestamp)) {
                nInside += 1;
            }
        }
        return nInside;
    }

    function occupancy(uint256 timestamp_) public view returns (uint256) {
        uint256 nInside = 0;
        for (uint256 i = 0; i < nUsers; ++i) {
            if (_isInsideID(i, timestamp_)) {
                nInside += 1;
            }
        }
        return nInside;
    }

    function occupancy(uint256 start_, uint256 end_)
        public
        view
        returns (uint256)
    {
        uint256 sum = 0;
        for (uint256 i = 0; i < nUsers; ++i) {
            sum += _timeInside(i, start_, end_);
        }
        return sum;
    }

    /**
     * internals
     */
    function _register(address userAddress_, uint256 timestamp_)
        internal
        onlyHardware
        onlyActivated(userAddress_)
    {
        UserData storage tmpUser = user[userID[userAddress_] - 1];
        tmpUser.isInside = !tmpUser.isInside;
        tmpUser.registers.push(timestamp_);

        if (!tmpUser.isInside) {
            uint256 nRegisters = tmpUser.registers.length;
            uint256 start_ = tmpUser.registers[nRegisters - 2];
            uint256 stop_ = tmpUser.registers[nRegisters - 1];
            _exitAction(userAddress_, start_, stop_, occupancy(start_, stop_));
        }
    }

    function _timeInside(
        uint256 userID_,
        uint256 start_,
        uint256 end_
    ) internal view returns (uint256) {
        require(
            userID_ >= 0 && userID_ < nUsers,
            "Out of range access to user"
        );
        uint256 sum = 0;
        UserData storage tmpUser = user[userID_];
        uint256 nRegisters = tmpUser.registers.length;
        uint256 maxA;
        uint256 minB;
        for (uint256 i = 0; i < nRegisters; i += 2) {
            maxA = tmpUser.registers[i];
            if (start_ > maxA) {
                maxA = start_;
            }
            minB = tmpUser.registers[i + 1];
            if (end_ < minB) {
                minB = end_;
            }
            if (minB - maxA > 0) {
                sum += minB - maxA;
            }
        }
        return sum;
    }

    function _isInsideID(uint256 userID_, uint256 timestamp_)
        internal
        view
        returns (bool)
    {
        require(
            userID_ >= 0 && userID_ < nUsers,
            "Out of range access to user"
        );
        bool isin = false;
        UserData storage tmpUser = user[userID_];
        uint256 nRegisters = tmpUser.registers.length;
        for (uint256 i = 0; i < nRegisters; i += 2) {
            if (
                timestamp_ >= tmpUser.registers[i] &&
                timestamp_ <= tmpUser.registers[i + 1]
            ) {
                isin = true;
            }
        }
        return isin;
    }

    function _exitAction(
        address userAddress_,
        uint256 start_,
        uint256 stop_,
        uint256 occupancy_
    ) public {
        uint256 nFares = fare.length;
        uint256 cost = 0;
        for (uint256 i = 0; i < nFares; i++) {
            //rick
            if (fareTimeStamp[nFares - 1 - i] < start_) {
                cost = fare[i].evaluate(
                    start_,
                    stop_,
                    occupancy_,
                    userAddress_,
                    address(this)
                );
                break;
            }
        }

        if (cost > 0) {
            UserData storage tmpUser = user[userID[userAddress_] - 1];
            tmpUser.debt += cost;
            uint256 allowance = token.allowance(msg.sender, address(this));
            uint256 pay = cost;
            if (allowance < cost) {
                pay = allowance;
                bool sent = token.transferFrom(
                    userAddress_,
                    address(this),
                    pay
                );
                require(sent, "Failed to pay on exit");
                tmpUser.status = Status.BLOCKED;
                emit userBlocked(userAddress_, cost - allowance);
            }
            if (pay > 0) {
                tmpUser.debt -= pay;
            }
        }
    }
}
