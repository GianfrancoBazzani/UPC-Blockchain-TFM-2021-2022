// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

/* TO DO LIST;
    - batched versions
    - nom als errors
*/
contract AccessControl is Ownable {
    enum Status {
        BLOCKED,
        ACTIVATED
    }
    struct UserData {
        Status status;
        address userAddress; //rick: do we need this here?
        uint256[] registers;
        uint256 autentificator;
        bool isInside;
        uint256 debt;
    }

    mapping(address => uint256) private userID;
    UserData[] private user;
    uint256 private nUsers;

    address private hardwareAddress;
    bool private onchainTime;

    modifier onlyHardware() {
        require(msg.sender == hardwareAddress, "You're not the hardware");
        _;
    }

    modifier onlyRegistered(address userAddress_) {
        //rick: posar el nom
        require(userID[userAddress_] > 0, "This user is not registered");
        _;
    }

    modifier onlyActivated(address userAdress_) {
        //rick: posar el nom
        require(
            userID[userAdress_] > 0 &&
                user[userID[userAdress_] - 1].status == Status.ACTIVATED,
            "This user is not activated"
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
        ); //rick, posar l'adreça en el misatge
        _;
    }

    modifier onlyInside(address userAddress_) {
        UserData storage tmpUser = user[userID[userAddress_] - 1];
        require(
            (tmpUser.registers).length % 2 == 1 && tmpUser.isInside,
            "The user is not inside"
        ); //rick, posar l'adreça en el misatge
        _;
    }

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
        tmpUser.userAddress = userAddress_;
        tmpUser.isInside = false;
    }

    function setAutentificator(uint256 newAutentificator_)
        public
        onlyActivated(msg.sender)
    {
        UserData storage tmpUser = user[userID[msg.sender] - 1];
        tmpUser.autentificator = newAutentificator_;
    }

    function blockUser(address userAdress_)
        public
        onlyOwner
        onlyActivated(userAdress_)
    {
        user[userID[msg.sender] - 1].status = Status.BLOCKED;
    }

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
     *  INFO
     */
    function getUserRegisters(address userAddress_)
        public
        view
        onlyRegistered(userAddress_)
        returns (uint256[] memory)
    {
        require(
            msg.sender == userAddress_ || this.owner() == userAddress_,
            "Is not user or owner"
        );
        return user[userID[userAddress_] - 1].registers;
        //rick: tb ha de poder mirar el de les tarifes?
    }

    function isInside(
        address userAddress_ //rick: onlyOwnerOrSender
    ) public view onlyRegistered(userAddress_) returns (bool) {
        return user[userID[msg.sender] - 1].isInside;
    }

    function isInside(address userAddress_, uint256 timestamp_)
        public
        view
        onlyRegistered(userAddress_)
        returns (bool)
    {
        return isInsideID(userID[userAddress_] - 1, timestamp_);
    }

    function isInsideID(uint256 userID_, uint256 timestamp_)
        internal
        view
        returns (bool)
    {
        bool isin = false;
        require(
            userID_ >= 0 && userID_ < nUsers,
            "Out of range access to user"
        );
        UserData storage tmpUser = user[userID_];
        uint256 pos = nUsers + 1;
        for (uint256 i = 0; i < nUsers; ++i) {
            if (timestamp_ < tmpUser.registers[i]) {
                pos = i;
            }
        }
        if (pos >= 0 || pos < nUsers) {
            isin = true;
        }
        return isin;
    }

    function occupancy(uint256 timestamp_) public view returns (uint256) {
        uint256 nn = 0;
        for (uint256 i = 0; i < nUsers; ++i) {
            if (isInsideID(i, timestamp_)) {
                nn += 1;
            }
        }
        return nn;
    }

    /**
     * rick, aixo s'ha de programr
     */
    function occupancy(uint256 start_, uint256 end_)
        public
        view
        returns (uint256)
    {
        uint256 nn = 0;
        /*for (uint256 i = 0; i < nUsers; ++i) {
            if (isInsideID(i, timestamp_)) {
                nn += 1;
            }
        }*/
        return nn;
    }

    /**
     *  Register
     */
    function _register(address userAddress_, uint256 timestamp_)
        internal
        onlyHardware
        onlyActivated(userAddress_)
    {
        UserData storage tmpUser = user[userID[userAddress_] - 1];
        tmpUser.isInside = !tmpUser.isInside;
        tmpUser.registers.push(timestamp_);
    }
    // Funcion to clean registers?
    // Change registers

    //Tarifes:
    // temps, timestamp entrada, occupancy, dia de la setmana, tarifa qeu cobri depentnt del les hores que porti
    // tarifa (entrada - sortida, nick) (view)
    //tarifa com array
}
