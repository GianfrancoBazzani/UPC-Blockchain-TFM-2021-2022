import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { getUserDebt, getUserId, payDebt } from "../services/interface";
import { getCurrentAddress } from "../utils/metamask";

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

const Debts = () => {
  // States
  const [debt, setDebt] = useState(0);
  const [userDebt, setUserDebt] = useState(0);

  

  const getCurrentDebt = async () => {
    try {
      const addressUser = await getCurrentAddress();
      const id = await getUserId(addressUser);
      const response = await getUserDebt(id-1);
      setUserDebt(response.debt.toString())
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentDebt();

  const handleChange = (event) => {
    setDebt(event.target.value);
  };

  const handleClick = async () => {
    try {
      await payDebt(debt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout page={"debts"} />
      <MainContainer style={{ marginTop: "5rem" }} maxWidth={"30rem"}>
        <div style={{ marginLeft: "2rem" }}>
          <Text>Debts</Text>
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <Text>Current Debt: {userDebt}</Text>
        </div>
        <MainContainer maxWidth={"30rem"} color={"#e8ecfb"}>
          <div style={{ marginLeft: "0rem", padding: "1rem 1rem 1rem 1rem" }}>
            <Input
              type="number"
              id="debt"
              name="debt"
              defaultValue={debt}
              onChange={handleChange}
              value={debt}
            ></Input>
          </div>
        </MainContainer>
        <TextContainer
          maxWidth={"10rem"}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          color={"#e8ecfb"}
          onClick={handleClick}
        >
          <Text>Pay Debt</Text>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default Debts;
