
const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const hre = require("hardhat");

describe("AccessControl", function () {

  async function deployOnchainFixture() {
    const tokensAmount = 1_000_000_000;
    const AccessControl = await hre.ethers.getContractFactory("AccessControl");
    const Fare1 = await hre.ethers.getContractFactory("Fare1");
    const Fare2 = await hre.ethers.getContractFactory("Fare2");
    const AccessControlToken = await hre.ethers.getContractFactory("AccessControlToken");

    const [owner, hardwareAddress, user1, user2] = await ethers.getSigners();
    const fare1 = await Fare1.deploy();
    const fare2 = await Fare2.deploy();
    const token = await AccessControlToken.deploy("AccessControlToken", "ACT", tokensAmount);
    const accessControl = await AccessControl.deploy(hardwareAddress.address, token.address, true);

    return { accessControl, fare1, fare2, token, owner, hardwareAddress, user1, user2 };
  }
  async function deployOffchainFixture() {
    const tokensAmount = 1_000_000_000;
    const AccessControl = await hre.ethers.getContractFactory("AccessControl");
    const Fare1 = await hre.ethers.getContractFactory("Fare1");
    const Fare2 = await hre.ethers.getContractFactory("Fare2");
    const AccessControlToken = await hre.ethers.getContractFactory("AccessControlToken");

    const [owner, hardwareAddress, user1, user2] = await ethers.getSigners();
    const fare1 = await Fare1.deploy();
    const fare2 = await Fare2.deploy();
    const token = await AccessControlToken.deploy("AccessControlToken", "ACT", tokensAmount);
    const accessControl = await AccessControl.deploy(hardwareAddress.address, token.address, false);

    return { accessControl, fare1, fare2, token, owner, hardwareAddress, user1, user2 };
  }
  describe("Deployment", function () {


    it("Should set the right owner", async function () {
      const { accessControl, owner } = await loadFixture(deployOnchainFixture);
      expect(await accessControl.owner()).to.equal(owner.address);
    });
    it("Should have occupancy equal to zero", async function () {
      const { accessControl, owner } = await loadFixture(deployOnchainFixture);
      expect(await accessControl["occupancy()"]()).to.equal(0);
    });

  });
  describe("Users", function () {

    it("Should increase/decrease occupancy when users enter/exit (onchain version) ", async function () {
      const { accessControl, owner, hardwareAddress, user1, user2 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
      await accessControl.setAutentificator(0);
      await accessControl.connect(hardwareAddress)["enter(address)"](owner.address);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await accessControl.addUser(user2.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user2.address);
      expect(await accessControl["occupancy()"]()).to.equal(3);
      await time.increase(2);
      await accessControl.connect(hardwareAddress)["exit(address)"](owner.address);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      await accessControl.connect(hardwareAddress)["exit(address)"](user2.address);
      await time.increase(2);
      expect(await accessControl["occupancy()"]()).to.equal(0);
      const listRegister = await accessControl.getUserRegisters(user1.address)
      expect(listRegister.length).to.be.equal(2)
    });
    it("Should increase/decrease occupancy when users enter/exit (offchain version) ", async function () {
      const { accessControl, owner, hardwareAddress, user1, user2 } = await loadFixture(deployOffchainFixture);
      await accessControl.addUser(owner.address);
      await accessControl.connect(hardwareAddress)["enter(address,uint256)"](owner.address, 0);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address,uint256)"](user1.address, 0);
      await accessControl.addUser(user2.address);
      await accessControl.connect(hardwareAddress)["register(address,uint256)"](user2.address, 0);
      expect(await accessControl["occupancy(uint256)"](1)).to.equal(3);
      expect(await accessControl["isInside(address,uint256)"](owner.address, 3)).to.equal(true);
      await time.increase(2);
      await accessControl.connect(hardwareAddress)["exit(address,uint256)"](owner.address, 10);
      await accessControl.connect(hardwareAddress)["exit(address,uint256)"](user1.address, 10);
      await accessControl.connect(hardwareAddress)["register(address,uint256)"](user2.address, 10);
      await time.increase(2);
      expect(await accessControl["occupancy(uint256)"](11)).to.equal(0);
      const listRegister = await accessControl.getUserRegisters(user1.address)
      expect(listRegister.length).to.be.equal(2)
    });
    it("Should increase/decrease occupancy when users register ", async function () {
      const { accessControl, owner, hardwareAddress, user1, user2 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
      await accessControl.connect(hardwareAddress)["register(address)"](owner.address);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["register(address)"](user1.address);
      await accessControl.addUser(user2.address);
      await accessControl.connect(hardwareAddress)["register(address)"](user2.address);
      expect(await accessControl["occupancy()"]()).to.equal(3);
      await time.increase(2);
      await accessControl.connect(hardwareAddress)["exit(address)"](owner.address);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      await accessControl.connect(hardwareAddress)["exit(address)"](user2.address);
      await time.increase(2);
      expect(await accessControl["occupancy()"]()).to.equal(0);
    });
    it("Should detect that a user that has entered is inside", async function () {
      const { accessControl, owner, hardwareAddress, user1 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      expect(await accessControl["isInside(address)"](user1.address)).to.equal(true);
    });
    it("Should detect that a user that has exited is outside", async function () {
      const { accessControl, owner, hardwareAddress, user1 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      expect(await accessControl["isInside(address)"](user1.address)).to.equal(false);
    });
    it("Should revert if the offchain enter user is used", async function () {
      const { accessControl, owner, hardwareAddress } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
      await expect(accessControl.connect(hardwareAddress)["enter(address,uint256)"](owner.address, 0)).to.be.revertedWith(
        "The onchainTime value should be false");
    });
    it("Should revert if the offchain exit user is used", async function () {
      const { accessControl, owner, hardwareAddress, user1 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await expect(accessControl.connect(hardwareAddress)["exit(address,uint256)"](user1.address, 0)).to.be.revertedWith(
        "The onchainTime value should be false");
    });
    it("Should revert if the offchain register user is used", async function () {
      const { accessControl, owner, hardwareAddress } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
      await expect(accessControl.connect(hardwareAddress)["register(address,uint256)"](owner.address, 0)).to.be.revertedWith(
        "The onchainTime value should be false");
    });
    it("Should revert if the offchain isInside user is used", async function () {
      const { accessControl, owner, hardwareAddress, user1 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await expect(accessControl.connect(hardwareAddress)["isInside(address,uint256)"](user1.address, 0)).to.be.revertedWith(
        "The onchainTime value should be false");
    });
    it("Should emit a message when a user is blocked", async function () {
      const { accessControl, user1 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(user1.address);
      await expect(accessControl.blockUser(user1.address))
        .to.emit(accessControl, "UserBlocked")
        .withArgs(user1.address, 0);
    });
    it("Should revert if the an active user is unblocked", async function () {
      const { accessControl, owner } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
      await expect(accessControl.unblockUser(owner.address)).to.be.revertedWith(
        "The user is not blocked");
    });
  });
  describe("Occupancy", function () {


  });
  describe("Fares and transactions", function () {
    it("Should emit a message if a new fare is added ", async function () {
      const { accessControl, fare1 } = await loadFixture(deployOnchainFixture);
      await expect(accessControl.addFare(fare1.address))
        .to.emit(accessControl, "NewFare")
        .withArgs(fare1.address);
    });
    it("Should generate a debt when the cost cannot be payed", async function () {
      const { accessControl, fare1, user1, hardwareAddress } = await loadFixture(deployOnchainFixture);
      accessControl.addFare(fare1.address);
      await accessControl.addUser(user1.address);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await time.increase(3);
      await expect(accessControl.connect(hardwareAddress)["exit(address)"](user1.address))
        .to.emit(accessControl, "UserBlocked")
        .withArgs(user1.address, 40);
      expect(await accessControl.connect(user1).myDebt()).to.equal(40);
    });
    it("Should pay a on exit if there is enough allowance", async function () {
      const { accessControl, fare1, token, user1, hardwareAddress, owner } = await loadFixture(deployOnchainFixture);
      await accessControl.addFare(fare1.address);
      await accessControl.addUser(user1.address);
      await token.transfer(user1.address, 1000);
      expect(await token.connect(user1).balanceOf(user1.address)).to.equal(1000);
      await token.connect(user1).approve(accessControl.address, 1000);
      expect(await token.connect(user1).allowance(user1.address, accessControl.address)).to.equal(1000);
      await time.increase(1);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await time.increase(3);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      expect(await accessControl.connect(user1).myDebt()).to.equal(0);

    });
    it("Should pay a debt when the allowance has been generated", async function () {
      const { accessControl, fare1, token, user1, hardwareAddress, owner } = await loadFixture(deployOnchainFixture);
      await accessControl.addFare(fare1.address);
      await accessControl.addUser(user1.address);
      await token.transfer(user1.address, 1000);
      expect(await token.connect(user1).balanceOf(user1.address)).to.equal(1000);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await time.increase(3);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      expect(await accessControl.connect(user1).myDebt()).to.equal(40);
      await token.connect(user1).approve(accessControl.address, 1000);
      expect(await token.connect(user1).allowance(user1.address, accessControl.address)).to.equal(1000);
      await accessControl.connect(user1).payDebt(await accessControl.connect(user1).myDebt() + 1);
      expect(await accessControl.connect(user1).myDebt()).to.equal(0);

    });
    it("Should be able to unlock user after paying the debt", async function () {
      const { accessControl, fare2, token, user1, hardwareAddress, owner } = await loadFixture(deployOnchainFixture);
      await accessControl.addFare(fare2.address);
      await accessControl.addUser(user1.address);
      await token.transfer(user1.address, 1000);
      await accessControl.connect(hardwareAddress)["enter(address)"](user1.address);
      await time.increase(3);
      await accessControl.connect(hardwareAddress)["exit(address)"](user1.address);
      await token.connect(user1).approve(accessControl.address, 1000);
      await accessControl.connect(user1).payDebt(await accessControl.connect(user1).myDebt());
      await expect(accessControl.unblockUser(user1.address))
        .to.emit(accessControl, "UserUnblocked")
        .withArgs(user1.address);

    });
  });
  describe("Fare correctness", function () {
    it("Should obtain expected cost from Fare1 ", async function () {
      const Fare1 = await hre.ethers.getContractFactory("Fare1");
      const fare1 = await Fare1.deploy();
      expect(await fare1.evaluate(1, 65, 0, fare1.address, fare1.address)).to.equal(640);
    });
    it("Should obtain expected cost from Fare2 ", async function () {
      const Fare2 = await hre.ethers.getContractFactory("Fare2");
      const fare2 = await Fare2.deploy();
      expect(await fare2.evaluate(1, 65, 300, fare2.address, fare2.address)).to.equal(138);

    });
  });
});
