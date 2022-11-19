import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { getUserRegisters } from "../services/interface";
import { getCurrentAddress } from "../utils/metamask";

const Title = styled.p`
  font-size: 36px;
  font-weight: 400;
  font-family: sans-serif;
  text-align: center;
`;

const HeaderTitle = styled.div`
  color: rgb(119, 128, 160);
  min-width: 32px;
  font-size: 14px;

  align-items: center;
  display: flex;
  gap: 4px;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid rgb(210, 217, 238);
  border-top-color: rgb(210, 217, 238);
  border-right-color: rgb(210, 217, 238);
  border-left-color: rgb(210, 217, 238);
  border-radius: 8px 8px 0px 0px;
  color: rgb(119, 128, 160);
  font-size: 14px;
  height: 48px;
  line-height: 16px;
  padding: 0px 12px;
  width: 100%;
  justify-content: center;

  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 2fr 4fr 4fr 4fr;
  line-height: 24px;
  max-width: 960px;
  min-width: 390px;
  height: 64px;
  padding: 0px 12px;
  transition: background-color 125ms ease 0s;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(210, 217, 238);
`;

const Rows = styled.div`
  background-color: transparent;
  display: grid;
  font-size: 16px;
  grid-template-columns: 1fr 2fr 5fr 4fr 4fr;
  line-height: 24px;
  max-width: 960px;
  min-width: 390px;
  height: 72px;
  padding: 8px 12px 0px;
  transition: background-color 125ms ease 0s;
  width: 100%;
`;

const RowsTitle = styled.div`
  color: rgb(13, 17, 28);
  min-width: 32px;
  font-size: 14px;

  align-items: center;
  display: flex;
  gap: 4px;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

const Registers = () => {
  // States
  const [userRegister, setUserRegister] = useState([]);

  useEffect(() => {
    if (userRegister.length === 0) {
      getResponse();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getResponse = async () => {
    try {
      const addressUser = await getCurrentAddress();
      const response = await getUserRegisters(addressUser);
      setUserRegister(response);
    } catch (error) {
      console.log(error);
    }
  };

  let setRegisters = [];
  let temp = {
    enter: 0,
    exit: 0,
  };

  for (let i = 0; i < userRegister.length; i++) {
    if (i % 2 === 0 && i != userRegister.length - 1) {
      temp.enter = userRegister[i];
    } else if (i % 2 === 1 && i) {
      temp.exit = userRegister[i];
      setRegisters.push({
        enter: temp.enter,
        exit: temp.exit,
        fare: "0x123",
        payment: "12",
      });
    } else {
      temp.enter = userRegister[i];
      temp.exit = 0;
      setRegisters.push({
        enter: temp.enter,
        exit: temp.exit,
        fare: "0x1234",
        payment: "0",
      });
    }
  }

  console.log(setRegisters);

  const getRegisters = () => {
    return setRegisters.map((element, index) => {
      let timeEnter = new Date(element.enter * 1000);
      timeEnter =
        timeEnter.getMonth() +
        "/" +
        timeEnter.getDay() +
        "/" +
        timeEnter.getFullYear() +
        " ";
      let timeExit = new Date(element.exit * 1000);
      timeExit =
        timeExit.getMonth() +
        "/" +
        timeExit.getDay() +
        "/" +
        timeExit.getFullYear() +
        " ";

      return (
        <Rows key={index}>
          <RowsTitle>{index + 1}</RowsTitle>
          <RowsTitle>{timeEnter}</RowsTitle>
          <RowsTitle>{timeExit}</RowsTitle>
          <RowsTitle>{element.fare}</RowsTitle>
          <RowsTitle>{element.payment}</RowsTitle>
        </Rows>
      );
    });
  };

  return (
    <>
      <Layout page={"registers"} />
      <Title>Registers User</Title>
      <Container>
        <Header>
          <HeaderTitle>#</HeaderTitle>
          <HeaderTitle style={{ padding: "0px 20px" }}>Enter</HeaderTitle>
          <HeaderTitle>Exit</HeaderTitle>
          <HeaderTitle>Fare</HeaderTitle>
          <HeaderTitle>Payment</HeaderTitle>
        </Header>
        {getRegisters()}
      </Container>
    </>
  );
};

export default Registers;
