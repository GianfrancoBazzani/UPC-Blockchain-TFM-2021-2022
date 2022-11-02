import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
//import React, {useState,Fragment} from 'react'
import transactions from "./transactions.json"; 

let x = 0;
let index=0;

const Transactions1 = () => {
    const divStylesTransactions1 = {
      backgroundColor: "#ffffff",
      color: "black",
      fontSize: "16px",
    };


    // EL BUCLE FUNCIONA PORQUE LO RECORRE Y SE QUEDA EN EL ÚLTIMO REGISTRO
    for (x of transactions) {}


    return (
    <div>
    <Menu />
    <t1>Transactions of user: </t1><a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>
      <div style={divStylesTransactions1}>
        <div>
      <table
            width="60%"
            style={divStylesTransactions1}
            align="left"
            //cellspacing="10"
            //cellpadding="2"
            border="0"
          >

            {/* The loop for not working in the html */}
             {/* <tr>
                  <td align="center">
                    <a>Id: {x.id}</a>
                  </td>
                  <td align="center">
                    <a>TimeStamp: {x.timestamp}</a>
                  </td>
                  <td align="center">
                    <a>Input: {x.input}</a>
                  </td>
              </tr> */}
            <tr></tr>
            <tr></tr>
             {/* Print de first record of transactions.JSON in the table  */}
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>

              <td>
                <a>{transactions[index].id}</a>
              </td>

              <td align="center">
                <a> TimeStamp: </a>
              </td>
              <td align="left">
                <a>{transactions[index].timestamp}</a>
              </td>
              <td align="center">
                <a> Input: </a>
              </td>
              <td align="left">
                <a>{transactions[index].input}</a>
              </td>            
            </tr>
           
                  {/* Print de second  record of transactions.JSON in the table  */}
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>

              <td>
                <a>{transactions[index+1].id}</a>
              </td>

              <td align="center">
                <a> TimeStamp: </a>
              </td>
              <td align="left">
                <a>{transactions[index+1].timestamp}</a>
              </td>
              <td align="center">
                <a> Input: </a>
              </td>
              <td align="left">
                <a>{transactions[index+1].input}</a>
              </td>            
            </tr>  
                  {/* Print de third  record of transactions.JSON in the table  */}
                  <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>

              <td>
                <a>{transactions[index+2].id}</a>
              </td>

              <td align="center">
                <a> TimeStamp: </a>
              </td>
              <td align="left">
                <a>{transactions[index+2].timestamp}</a>
              </td>
              <td align="center">
                <a> Input: </a>
              </td>
              <td align="left">
                <a>{transactions[index+2].input}</a>
              </td>            
            </tr>  

              {/* Print de fourth  record of transactions.JSON in the table  */}
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>

              <td>
                <a>{transactions[index+3].id}</a>
              </td>

              <td align="center">
                <a> TimeStamp: </a>
              </td>
              <td align="left">
                <a>{transactions[index+3].timestamp}</a>
              </td>
              <td align="center">
                <a> Input: </a>
              </td>
              <td align="left">
                <a>{transactions[index+3].input}</a>
              </td>            
            </tr> 


                {/*  I want print  all record of transactions.JSON in the table */}
                {/*  I want use a javascript instructions: for, while, if, etc. */}

        
          </table>

        </div>
      </div>

      </div>
    );

};
  
export default Transactions1