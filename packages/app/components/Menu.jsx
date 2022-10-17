import React from "react";
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
//import language from "../js/lang.json"; //language es un objecte que apunta al fitxer idioma.json
import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json
import logo from "../logos/triangulo.jpg";
//variables globales https://www.youtube.com/watch?v=HlY2jF74s_c
//let idioma = 0;

let idioma = parseInt(localStorage.getItem("idioma"));
let idioma_etiquetas = idioma2[idioma];

// import Boton from "./Boton";
const Menu = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };

  return (
    <div style={divStylesMenu}>
      <table
        width="100%"
        // style={divStylesMenu}
        // align="left"
        // cellspacing="10"
        // cellpadding="10"
        border="0"
      >
        <tr>
          <td align="center">
            <a href="index.html" target="_parent">
              <img src={logo} width="40" height="34" />
            </a>
          </td>
          <td align="center">{idioma_etiquetas.menu1}</td>
          <td align="center">{idioma_etiquetas.menu2}</td>
          <td align="center">{idioma_etiquetas.menu3}</td>
          <td align="center">{idioma_etiquetas.menu4}</td>
          <td align="right"></td>
        </tr>
      </table>
    </div>
  );
};

export default Menu;
