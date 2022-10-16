// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/* TO DO LIST;
    - More flexible with problems with enter and exit
*/
contract AccessControl {
    enum Status {
        ACTIVATED,
        BLOCKED,
        REVOKED
    }

    struct UserData {
        Status status;
        address userAdress;
        uint256[] registers;
        bytes32 autentificator;
        bytes32 newAutentificatorRequest;
    }

    mapping(uint256 => uint256) public userID;
    UserData[] user;
    uint256 nUsers;
    address public hardwareAddress;
    address public ownerAddress;
    address public managerAddress;
    bool onchainTime;

    event AutentificatorChangeRequest(uint256 indexed userKey_);

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "You're not the owner");
        _;
    }

    modifier onlyHardware() {
        require(msg.sender == hardwareAddress, "You're not the hardware");
        _;
    }

    modifier onlyRegistered(uint256 userKey_) {
        require(userID[userKey_] > 0, "This user is not registered");
        _;
    }

    modifier onlyActivated(uint256 userKey_) {
        require(
            userID[userKey_] > 0 &&
                user[userID[userKey_] - 1].status == Status.ACTIVATED,
            "This user is not activated"
        );
        _;
    }

    constructor(
        address hardwareAddress_,
        address ownerAddress_,
        bool onchainTime_
    ) {
        hardwareAddress = hardwareAddress_;
        ownerAddress = ownerAddress_;
        onchainTime = onchainTime_;
        nUsers = 0;
    }

    function setManagerAddress(address managerAddress_) public onlyOwner {
        managerAddress = managerAddress_;
    }

    function addUser(uint256 userKey_, address userAdress_) public onlyOwner {
        nUsers += 1;
        require(userID[userKey_] == 0, "User already added");
        userID[userKey_] = nUsers;
        user.push();
        UserData storage tmpUser = user[nUsers - 1];
        tmpUser.status = Status.ACTIVATED;
        tmpUser.userAdress = userAdress_;
    }

    function setAutentificator(uint256 userKey_, bytes32 newAutentificator_)
        public
        onlyActivated(userKey_)
    {
        emit AutentificatorChangeRequest(userKey_);
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(msg.sender == tmpUser.userAdress, "You are not the user");
        tmpUser.autentificator = newAutentificator_;
    }

    function setUserAutentificator(uint256 userKey_)
        public
        onlyOwner
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(
            tmpUser.newAutentificatorRequest != 0,
            "There is no autentificator change request"
        );
        tmpUser.autentificator = tmpUser.newAutentificatorRequest;
        tmpUser.newAutentificatorRequest = 0;
    }

    function removeUser(uint256 userKey_)
        public
        onlyOwner
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        tmpUser.status = Status.REVOKED;
    }

    function blockUser(uint256 userKey_)
        public
        onlyOwner
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        tmpUser.status = Status.BLOCKED;
    }

    function enter(uint256 userKey_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(
            (tmpUser.registers).length % 2 == 0,
            "User has already entered"
        );
        require(onchainTime == true, "The onchainTime value should be true");
        tmpUser.registers.push(block.timestamp);
    }

    function exit(uint256 userKey_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(
            (tmpUser.registers).length % 2 == 1,
            "User has not entered yet"
        );
        require(onchainTime == true, "The onchainTime value should be true");
        tmpUser.registers.push(block.timestamp);
    }

    function register(uint256 userKey_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(onchainTime == true, "The onchainTime value should be true");
        tmpUser.registers.push(block.timestamp);
    }

    function enter(uint256 userKey_, uint256 timestamp_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(
            (tmpUser.registers).length % 2 == 0,
            "User has already entered"
        );
        require(onchainTime == false, "The onchainTime value should be false");
        tmpUser.registers.push(timestamp_);
    }

    function exit(uint256 userKey_, uint256 timestamp_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(
            (tmpUser.registers).length % 2 == 1,
            "User has not entered yet"
        );
        require(onchainTime == true, "The onchainTime value should be true");
        tmpUser.registers.push(timestamp_);
    }

    function register(uint256 userKey_, uint256 timestamp_)
        public
        onlyHardware
        onlyActivated(userKey_)
    {
        UserData storage tmpUser = user[userID[userKey_] - 1];
        require(onchainTime == true, "The onchainTime value should be true");
        tmpUser.registers.push(timestamp_);
    }

    function getUserRegisters(uint256 userKey_)
        public
        view
        onlyRegistered(userKey_)
        returns (uint256[] memory)
    {
        return user[userID[userKey_] - 1].registers;
    }

    function getUserAdress(uint256 userKey_)
        public
        view
        onlyRegistered(userKey_)
        returns (address)
    {
        return user[userID[userKey_] - 1].userAdress;
    }

    function isInside(uint256 userKey_, uint256 timestamp_)
        public
        view
        onlyRegistered(userKey_)
        returns (bool)
    {
        return isInsideID(userID[userKey_] - 1, timestamp_);
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

    // Funcion to clean registers?
}
