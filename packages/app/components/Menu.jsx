import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Wallet from "../components/Wallet";
//import logo from "../public/triangulo.jpg";
//import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
//import language from "../js/lang.json"; //language es un objecte que apunta al fitxer idioma.json
//import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json

//variables globales https://www.youtube.com/watch?v=HlY2jF74s_c
//let idioma = 0;

//let idioma = parseInt(localStorage.getItem("idioma"));
//let idioma_etiquetas = idioma2[idioma];

// import Boton from "./Boton";
const Menu = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
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
          <tr>
            <td align="left">
              <Link href="">
                <a>Home</a>
              </Link>
            </td>
            <td>
              <Link href="balance">
                <a>Balance </a>
              </Link>
            </td>
            <td>
              <Link href="transactions2">
                <a>Transactions</a>
              </Link>
            </td>

            <td align="right">
              {" "}
              <Wallet />{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Menu;
