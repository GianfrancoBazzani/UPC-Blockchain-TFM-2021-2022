import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../../components/layouts/Layout";
import Cookies from 'cookies'
import LitJsSdk from 'lit-js-sdk'

const Manager = (props) => {
    if (!props.authorized) {
        return (
          <div>
            <Layout page={"manager"}/>
            <h2>You're not the manager</h2>
          </div>
        )
      }
      return (
        <div >
          <h2>YOu're the manager</h2>
        </div>
      )
}

export async function getServerSideProps({ req, res, query }) {
    const { id } = query
    const cookies = new Cookies(req, res)
    const jwt = cookies.get('lit-auth')
    if (!jwt) {
      return {
        props: {
          authorized: false
        },
      }
    }
  
    const { verified, payload } = LitJsSdk.verifyJwt({ jwt })
  
    if (
      payload.baseUrl !== "http://localhost:3000/manager"
      || payload.path !== 'http://localhost:3000/manager/content'
      || payload.extraData !== id
    ) {
      return {
        props: {
          authorized: false
        },
      }
    }
    return {
      props: {
        authorized: verified ? true : false
      },
}  
}


export default Manager;