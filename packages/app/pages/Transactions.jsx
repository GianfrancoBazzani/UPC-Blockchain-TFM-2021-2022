import React, { useState, useEffect, Fragment } from "react";

import Link from "next/link";
import Menu from "./Menu";

export default function Transactions() {
  const response = [
    { transactionIdx: "10", timeStamp: "1667671104" },
    { transactionIdx: "20", timeStamp: "1667671204" },
    { transactionIdx: "30", timeStamp: "1667671304" },
    { transactionIdx: "40", timeStamp: "1667671404" },
    { transactionIdx: "50", timeStamp: "1667671504" },
    { transactionIdx: "60", timeStamp: "1667671804" },
  ];
  function data(date_timestamp) {
    date_timestamp = date_timestamp * 1000;
    var date = new Date(date_timestamp);
    date =
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return date;
  }
  let date = new Date(response.timeStamp);

  return (
    <div>
      <Menu />
      {response.map((element) => {
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  Transaction: {element.transactionIdx}
                  {"      "} TimeStamp: {element.timeStamp}
                  {"      "} Date: {data(element.timeStamp)}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
