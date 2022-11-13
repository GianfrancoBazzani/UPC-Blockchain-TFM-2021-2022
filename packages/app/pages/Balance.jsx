import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Menu from "./Menu";

const Balance = () => {
  const divStylesMenuBalance = {
    backgroundColor: "#ffffff",
    color: "black",
    fontSize: "16px",
  };

  return (
    <div>
      <Menu />
      <t1>Balance of user:</t1>{" "}
      <a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>
      <div style={divStylesMenuBalance}>
        <div>
          <a>User: </a>

          <a>0xb7dA6B0B886604f68e4356BE12Ae5D8DA69C0468</a>

          <a> Total balance: </a>

          <a>0.456345</a>
        </div>
      </div>
    </div>
  );
};

export default Balance;
