import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
//import idioma2 from "../js/lang2.json"; 


const Transactions = () => {
  const divStylesTransactions = {
    backgroundColor: "#ffffff",
    color: "black",
    fontSize: "16px",
    };
  
    return (
    <div>
    <Menu />
    <t1>Transactions of user: </t1><a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>

      <div style={divStylesTransactions}>
        <div>
          <table
            width="60%"
            style={divStylesTransactions}
            align="left"
            //cellspacing="10"
            //cellpadding="2"
            border="0"
          >
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>
              <td>
                <a>ae2354bce3456</a>
              </td>
              <td align="center">
                <a> Time Stamp: </a>
              </td>
              <td align="left">
                <a>25-10-2022</a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>
              <td>
                <a>ae2354bce3456</a>
              </td>
              <td align="center">
                <a> Time Stamp: </a>
              </td>
              <td align="left">
                <a>25-10-2022</a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>
              <td>
                <a>ae2354bce3456</a>
              </td>
              <td align="center">
                <a> Time Stamp: </a>
              </td>
              <td align="left">
                <a>25-10-2022</a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>
              <td>
                <a>ae2354bce3456</a>
              </td>
              <td align="center">
                <a> Time Stamp: </a>
              </td>
              <td align="left">
                <a>25-10-2022</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    );
  };
  
export default Transactions