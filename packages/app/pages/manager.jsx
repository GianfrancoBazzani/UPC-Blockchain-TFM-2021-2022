import React, { useState, useEffect, Fragment, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import LitJsSdk from "lit-js-sdk";
import Cookies from "js-cookie";
import { UUIDContext } from "../Context";
import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";

// Styles
const MainContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 95%;
  max-width: ${(props) => props.maxWidth || "inherit"};

  background-color: ${(props) => props.color || "inherit"};

  border: 2px solid #5d6785;
  border-radius: 15px;

  &:after {
    position: absolute;
    content: "";
    bottom: -2rem;
    height: 2rem;
    width: 0.1rem;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-family: sans-serif;
  color: #0d111c;
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  outline: 0;
  font-size: 27.5px;
  font-family: sans-serif;
  color: #0d111c;
  font-weight: bold;
  appearance: none;
`;

const TextContainer = styled(MainContainer)`
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #d7d9e3;
  }
`;

const accessControlConditions = [
  {
    contractAddress: "0x61FF4401a8F05141017eE3fd75B2Db2c793Edae8",
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
      <Layout page={"manager"} />
      <MainContainer style={{ marginTop: "15rem" }} maxWidth={"30rem"}>
        {!connected &&
        <div style={{ textAlign: "center" }}>
          <Text>Sign to check if you're the manager!</Text>
        </div>}
        {connected &&
        <div style={{ textAlign: "center" }}>
          <Text>Signed!</Text>
        </div>}
        {!connected && (
          <TextContainer
            maxWidth={"10rem"}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            color={"#e8ecfb"}
            onClick={connect}
          >
            <Text>Sign</Text>
          </TextContainer>
        )}
        {connected && (
            <TextContainer
              maxWidth={"10rem"}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
              color={"#e8ecfb"}
              onClick={navigate}
            >
              <Text>Go to the manager page</Text>
            </TextContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Manager;
