import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { approve } from "../services/interface";

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

const Approve = () => {
  // States
  const [amount, setAmount] = useState(0);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = async () => {
    try {
      await approve(amount);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout page={"approve"} />
      <MainContainer style={{ marginTop: "5rem" }} maxWidth={"30rem"}>
        <div style={{ marginLeft: "2rem" }}>
          <Text>Approve</Text>
        </div>
        <MainContainer maxWidth={"30rem"} color={"#e8ecfb"}>
          <div style={{ marginLeft: "0rem", padding: "1rem 1rem 1rem 1rem" }}>
            <Input
              type="number"
              id="approve"
              name="approve"
              defaultValue={amount}
              onChange={handleChange}
              value={amount}
            ></Input>
          </div>
        </MainContainer>
        <TextContainer
          maxWidth={"10rem"}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          color={"#e8ecfb"}
          onClick={handleClick}
        >
          <Text>Approve Tokens</Text>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default Approve;
