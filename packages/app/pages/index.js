import React, { useState, useEffect, Fragment, useContext } from "react";
import Head from 'next/head'
import Layout from "../components/layouts/Layout";
import Registers from "../components/layouts/Registers";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Access Control</title>
        <meta name="" /> 
        <link rel="icon" href="/static/images/upc.png" />
      </Head>
        <Layout page={"registers"}/>
        <Registers/>
    </div>
  )
}
