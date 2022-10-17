import React from "react";
// const miConstante = <h3>Hi Folder</h3>;
import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json

let idioma = parseInt(localStorage.getItem("idioma"));
let idioma_etiquetas = idioma2[idioma];

const Peu = () => {
  const divStyles = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "1rem",
  };
  return (
    <div style={divStyles}>
      {/* {miConstante} */}

      <h3> {idioma_etiquetas.peu}</h3>
      <table width="100%">
        <tr>
          <td> Row 1 Column 1</td>
          <td> Row 1 Column 2</td>
          <td> Row 1 Column 3</td>
          <td> Row 1 Column 4</td>
        </tr>
        <tr>
          <td> Row 2 Column 1</td>
          <td> Row 2 Column 2</td>
          <td> Row 2 Column 3</td>
          <td> Row 2 Column 4</td>
        </tr>
      </table>
    </div>
  );
};
export default Peu;
