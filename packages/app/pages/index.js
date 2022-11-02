import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import React, {Component} from 'react'
import React from 'react'
//import Link from 'next/link'
import Menu from '../components/Menu'
//import Footer from '../components/Footer'
//import Wallet from "../components/Wallet";

const divStylesMenuI = {
  backgroundColor: "#5499c7",
  color: "white",
  fontSize: "18px",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project</title>
        <meta name="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Menu />  
    </div>
  )
}
