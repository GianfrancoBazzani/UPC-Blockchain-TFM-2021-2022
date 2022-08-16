// web per la connexió a Metamask
//  https://dev.to/rounakbanik/building-a-web3-frontend-with-react-340c

import React, { useState } from "react";

import { useEffect } from "react";
import { ethers } from "ethers";
import "./ConnexionNft.css";
//import contract from './contracts/NFTCollectible.json';

const signer =
  "cc6512a91105ce3ded492d9868a004cfb2e4c944e4a326d278aa406a9c7c9c31";
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setStoredValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStoredValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

function ConnexionNft() {
  //currentAccount="0xf8e81D47203A594245E36C48e151709F0C19fBe8";

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed");
      return;
    } else {
      console.log("Wallet exist! We're ready to go!");
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found and authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const [currentAccount, setCurrentAccount] = useState(null);

  //primera funció a declarar, és asincrona
  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialized payment");
        //let nftTxn await nftContract.minNFTs(1, {value: ethers.utils.parseEther("0.01")});

        console.log("Mining ... please wait ");
        //await nftTxn.wait();

        console.log(
          "Mined, see transaction: https://rinkeby.etherscan.io.tx/${nftTxn.hash}"
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className="main-app">
      <h3>1) NFT Scrappy Squirrels </h3>
      <div>{connectWalletButton()}</div>
    </div>
  );
}

export default ConnexionNft;
