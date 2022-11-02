import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'

const Balance = () => {

    const divStylesMenuB = {
      backgroundColor: "#ffffff",
      color: "black",
      fontSize: "16px",
    };
  
    return (
    <div>
    <Menu />
    <t1>Balance of user:</t1> <a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>

      <div style={divStylesMenuB}>
        <div>
          <table
            width="60%"
            style={divStylesMenuB}
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
                <a>User: </a>
              </td>
              <td>
                <a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>
              </td>
              <td align="center">
                <a> Total balance: </a>
              </td>
              <td align="left">
                <a>0.456345</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    );
  };
  
export default Balance