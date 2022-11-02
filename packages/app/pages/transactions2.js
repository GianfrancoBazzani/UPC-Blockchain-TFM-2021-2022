import React from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';
import Document,{Html, Head, Main, NextScript} from 'next/document';
//import React, {useState,Fragment} from 'react';
import transactions from "./transactions.json"; 

//let transaction = JSON.parse(transactions);
let transactions_labels;
let index=0;

const Transactions2 = () => {
    const divStylesTransactions1 = {
      backgroundColor: "#ffffff",
      color: "black",
      fontSize: "16px",
    };
    return (
    <div>
    <Menu />
    <t1>Transactions of user: </t1><a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>
      {/* <div style={divStylesTransactions1}> */}
        
      <script>
        let tabla = `
            <table
                width="60%"
                style={divStylesTransactions1}
                align="left"
                 border="0"
            >`;
    
    for (let i=0;i<4;i++){
      transactions_labels = transactions[i]
      tabla +=`
            <tr>
              <td align="center">
                <a>Id Transaction: </a>
              </td>

              <td>
                <a>${transactions_labels.id}</a>
              </td>

              <td align="center">
                <a> TimeStamp: </a>
              </td>
              <td align="left">
                <a>${transactions_labels.timestamp}</a>
              </td>
              <td align="center">
                <a> Input: </a>
              </td>
              <td align="left">
                <a>${transactions_labels.input}</a>
              </td>            
            </tr>`;
      }         
    tabla += `</table> `;
    document.getElementById("tabla").innerHTML = tabla;

    </script>   
     

    </div>

    )
    } 
export default Transactions2