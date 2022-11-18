import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../../components/layouts/Layout";
import Cookies from "cookies";
import LitJsSdk from "lit-js-sdk";

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

const Container = ({ name, buttonName, callback }) => {
  // States
  const [address, setAddress] = useState("0x123");

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleClick = () => {
    callback(address);
  };

  return (
    <div style={{marginBottom: '2rem'}}>
      <MainContainer maxWidth={"30rem"}>
        <div style={{ marginLeft: "2rem" }}>
          <Text>{name}</Text>
        </div>
        <MainContainer maxWidth={"30rem"} color={"#e8ecfb"}>
          <div style={{ marginLeft: "0rem", padding: "1rem 1rem 1rem 1rem" }}>
            <Input
              id="address"
              name="address"
              defaultValue={address}
              onChange={handleChange}
              value={address}
            ></Input>
          </div>
        </MainContainer>
        <TextContainer
          maxWidth={"10rem"}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          color={"#e8ecfb"}
          onClick={handleClick}
        >
          <Text>{buttonName}</Text>
        </TextContainer>
      </MainContainer>
    </div>
  );
};

const Manager = (props) => {
  const handleAddUser = (address) => {
    console.log(address);
  };
  const handleBlockUser = (address) => {
    console.log(address);
  };
  const handleUnblockUser = (address) => {
    console.log(address);
  };
  const handleChangeFare = (address) => {
    console.log(address);
  };
  if (!props.authorized) {
    return (
      <div>
        <Layout page={"manager"} />
        <div style={{paddingTop: '5rem'}}>
          <Container
            name={"User"}
            buttonName={"Add User"}
            callback={handleAddUser}
          />
          <Container
            name={"User"}
            buttonName={"Block User"}
            callback={handleBlockUser}
            style={{ marginTop: "2rem" }}
          />
          <Container
            name={"User"}
            buttonName={"Unblock User"}
            callback={handleUnblockUser}
          />
          <Container
            name={"Fare"}
            buttonName={"Change Fare"}
            callback={handleChangeFare}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2>YOu're the manager</h2>
    </div>
  );
};

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;
  const cookies = new Cookies(req, res);
  const jwt = cookies.get("lit-auth");
  if (!jwt) {
    return {
      props: {
        authorized: false,
      },
    };
  }

  const { verified, payload } = LitJsSdk.verifyJwt({ jwt });

  if (
    payload.baseUrl !== "http://localhost:3000/manager" ||
    payload.path !== "http://localhost:3000/manager/content" ||
    payload.extraData !== id
  ) {
    return {
      props: {
        authorized: false,
      },
    };
  }
  return {
    props: {
      authorized: verified ? true : false,
    },
  };
}

export default Manager;
