import React from "react";
import language from "../js/lang.json";
const PortadaNueva = () => {
  return (
    <>
      <table border="1">
        <tr>
          <th>Topic </th>
          <td>{language.en.portada}</td>
        </tr>
        <tr></tr>
        <tr>
          <th>About</th>
          <td>{language.en.portada}</td>
        </tr>
        <tr></tr>
        <tr>
          <th>Fees</th>
          <td>{language.en.portada}</td>
        </tr>
        <tr>
          {" "}
          <td align="right"></td>
        </tr>
      </table>
    </>
  );
};
export default PortadaNueva;
