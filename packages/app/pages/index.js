import React, { useState, useEffect, Fragment } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from './Menu'
import Layout from "../components/layouts/Layout";
//import { createRoot } from 'react-dom/client';
//import Sample from './Sample';
//import Link from 'next/link'
//import Transactions from "./Transactions";
//import Transactions from "./Transactions";
//import Wallet from "../components/Wallet";

const divStylesMenuI = {
  backgroundColor: "#5499c7",
  color: "white",
  fontSize: "18px",
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>Project</title>
        <meta name="" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout></Layout>
    </div>
  )
}
