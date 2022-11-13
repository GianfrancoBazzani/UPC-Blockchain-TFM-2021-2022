import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Wallet from "../components/Wallet";
//import Pdf from "./Pdf";

import logo from "../logos/triangulo.jpg";
//import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";

//variables globales https://www.youtube.com/watch?v=HlY2jF74s_c

const Menu = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "16px",
  };

  return (
    <div style={divStylesMenu}>
      <div>
        <table
          width="100%"
          style={divStylesMenu}
          align="left"
          //cellspacing="10"
          //cellpadding="2"
          border="0"
        >
          <tbody>
            <tr>
              <td align="center" valign="top">
                <Link href="/" target="_parent">
                  <Image src={logo} width="40" height="34" />
                </Link>
              </td>

              {/* 
              <td align="left">
                <a href="index" target="_parent">
                  <img src={logo} width="40" height="34" />
                </a>
              </td> */}

              {/* <td align="left">
                <Link href="">
                  <a>LandingPage</a>
                </Link>
              </td> */}

              <td>
                <Link href="Balance">
                  <a>Balance </a>
                </Link>
              </td>
              <td>
                <Link href="Transactions">
                  <a>Transactions</a>
                </Link>
              </td>

              <td align="right">
                {" "}
                <Wallet />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
