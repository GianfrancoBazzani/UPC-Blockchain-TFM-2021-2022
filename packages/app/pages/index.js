import React, { useState, useEffect, Fragment, useContext } from "react";
import Head from 'next/head'
import Layout from "../components/layouts/Layout";
import LandingPage from "../components/layouts/LandingPage";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Project</title>
        <meta name="" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout/>
        <LandingPage/>
    </div>
  )
}
