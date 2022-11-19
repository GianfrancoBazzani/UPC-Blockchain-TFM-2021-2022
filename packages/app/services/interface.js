import { ethers } from "ethers";
import AccessControl from "../contracts/AccessControl.sol/AccessControl.json"
import AccesControlToken from "../contracts/AccessControlToken.sol/AccessControlToken.json"

const accessControlAddress = '0x95cdc27c4ec7f2c928269e6EF416Ba6749f30126';
const accessControlTokenAddress = '0xa32C3a1F1c22E18dC0563e39315E4caE1Cb07dc1';
const fareAddress = '0x2DA9317763a99A3224D68E2c222BE7D8255d097f';

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}

function newProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
}

function instanceContract(address, abi, signer) {
    return new ethers.Contract(address, abi, signer);
}

/* Access Control Smart Contract */

export async function payDebt(debt) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, signer);
        const tx = await contract.payDebt(debt);
        await tx.wait();
    }
}

export async function getUserRegisters(account) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = newProvider();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, provider);
        const tx = await contract.getUserRegisters(account);
        return tx;
    }
}

export async function getUserId(account) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = newProvider();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, provider);
        const tx = await contract.usersID(account);
        return tx;
    }
}

export async function getUserDebt(index) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = newProvider();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, provider);
        const tx = await contract.users(index);
        return tx;
    }
}


/* Owner */

export async function addUser(account) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, signer);
        const tx = await contract.addUser(account);
        await tx.wait();
    }
}


export async function blockUser(account) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, signer);
        const tx = await contract.blockUser(account);
        await tx.wait();
    }
}

export async function unBlockUser(account) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, signer);
        const tx = await contract.unblockUser(account);
        await tx.wait();
    }
}

export async function addFare(account) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlAddress, AccessControl.abi, signer);
        const tx = await contract.addFare(account);
        await tx.wait();
    }
}

/* Access Control Token */

export async function approve( amount) {
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = newProvider();
        const signer = provider.getSigner();
        const contract = instanceContract(accessControlTokenAddress, AccesControlToken.abi, signer);
        const tx = await contract.approve(accessControlAddress,amount);
        await tx.wait();
    }
}