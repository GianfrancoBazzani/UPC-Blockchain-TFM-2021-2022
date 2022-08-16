// web per la connexió a Metamask
// https://www.youtube.com/watch?v=6nFkurvkbpQ
// https://www.youtube.com/watch?v=_eRBKbDf_Yo
// con react, hardhat, ethereum https://www.youtube.com/watch?v=WLfdUqYuy-w
// https://www.youtube.com/watch?v=WLfdUqYuy-w

import React from "react";

//import { ethers } from "ethers";
import "./ConnexionReactWeb3.css";
//import contract from './contracts/NFTCollectible.json';

function ConnexionReactWeb3() {
  //currentAccount="0xf8e81D47203A594245E36C48e151709F0C19fBe8";

  function ConnectToMetamask() {}

  return (
    <div className="main-app">
      <h3>2) Metamask with React </h3>
      <button
        onClick={ConnectToMetamask}
        className="cta-button connect-wallet-button"
      >
        Connect to Metamask
      </button>
    </div>
  );
}

export default ConnexionReactWeb3;
