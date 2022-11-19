import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Wallet from "../Wallet";

const Header = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #e8ecfb;
  padding: 1rem 1rem;
  column-gap: 2rem;
`;

const Text = styled.p`
  font-size: 16px;
  font-family: sans-serif;
  color: #5d6785;
`;

const Container = styled.div`
  cursor: pointer;
  padding: 0 0.5rem 0 0.5rem;

  &:hover {
    background-color: #d7d9e3;
    border-radius: 0.75rem;
  }
`;

const Layout = ({ page }) => {
  return (
    <Header>
      <Link href="/">
        <Image
          src="/static/images/logo.png"
          width={"48rem"}
          height={"48rem"}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <Link href="/">
        <Container>
          <Text style={{ fontWeight: page === "registers" ? "bold" : "none" }}>
            Registers
          </Text>
        </Container>
      </Link>
      <Link href="/debts">
        <Container>
          <Text style={{ fontWeight: page === "debts" ? "bold" : "none" }}>
            Debts
          </Text>
        </Container>
      </Link>
      <Link href="/approve">
        <Container>
          <Text style={{ fontWeight: page === "approve" ? "bold" : "none" }}>
            Approve
          </Text>
        </Container>
      </Link>
      <Link href="/manager">
        <Container>
          <Text style={{ fontWeight: page === "manager" ? "bold" : "none" }}>
            Manager
          </Text>
        </Container>
      </Link>
      <div style={{ display: "flex", marginLeft: "auto" }}>
        <Wallet></Wallet>
      </div>
    </Header>
  );
};

export default Layout;
