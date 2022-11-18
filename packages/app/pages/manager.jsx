import React, { useState, useEffect, Fragment, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import LitJsSdk from "lit-js-sdk";
import Cookies from "js-cookie";
import { UUIDContext } from "../Context";
import Layout from "../components/layouts/Layout";
import { useRouter } from 'next/router'

const accessControlConditions = [
  {
    contractAddress: "0x17C102026EDdaD6b68dEaE4f2877abcbE10269dB",
    standardContractType: "ERC721",
    chain: "goerli",
    method: "balanceOf",
    parameters: [":userAddress"],
    returnValueTest: {
      comparator: ">",
      value: "0",
    },
  },
];

const Manager = () => {
  const router = useRouter();
  function navigate() {
    router.push(`/manager/content?id=${id}`);
  }

  const [connected, setConnected] = useState();
  const { id } = useContext(UUIDContext);

  async function connect() {
    const resourceId = {
      baseUrl: "http://localhost:3000/manager",
      path: "http://localhost:3000/manager/content",
      orgId: "",
      role: "",
      extraData: id,
    };

    const client = new LitJsSdk.LitNodeClient({ alertWhenUnauthorized: false });
    await client.connect();
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "goerli" });

    await client.saveSigningCondition({
      accessControlConditions,
      chain: "goerli",
      authSig,
      resourceId,
    });
    try {
      const jwt = await client.getSignedToken({
        accessControlConditions,
        chain: "goerli",
        authSig,
        resourceId: resourceId,
      });
      Cookies.set("lit-auth", jwt, { expires: 1 });
    } catch (err) {
      console.log("error: ", err);
    }
    setConnected(true);
  }

  return (
    <>
      <Layout page={"manager"}/>
      <h1>Manager Page</h1>
      {!connected && <button onClick={connect}>Manager</button>}
      <a onClick={navigate} style={{ cursor: "pointer" }}>
        Go 
      </a>
    </>
  );
};

export default Manager;
