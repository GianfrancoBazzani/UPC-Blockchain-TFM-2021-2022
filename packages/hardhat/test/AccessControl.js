
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
    const AccessControlToken = await hre.ethers.getContractFactory("AccessControlToken");

    const [owner, hardwareAddress, user1, user2] = await ethers.getSigners();
    const fare = await Fare1.deploy();
    const token = await AccessControlToken.deploy("AccessControlToken", "ACT", tokensAmount);
    const accessControl = await AccessControl.deploy(hardwareAddress.address, token.address, true);

    return { accessControl, fare, token, owner, hardwareAddress, user1, user2 };
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

    it("Should increase/decrease occupancy when users enter/exit ", async function () {
      const { accessControl, owner, hardwareAddress, user1, user2 } = await loadFixture(deployOnchainFixture);
      await accessControl.addUser(owner.address);
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
      const { accessControl, fare } = await loadFixture(deployOnchainFixture);
      await expect(accessControl.addFare(fare.address))
        .to.emit(accessControl, "NewFare")
        .withArgs(fare.address);
    });
  });
});
