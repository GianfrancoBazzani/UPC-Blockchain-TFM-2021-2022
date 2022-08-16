import React from "react";
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
//import language from "../js/lang.json"; //language es un objecte que apunta al fitxer lang.json
import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer lang.json
//import variables_globals from "../js/variables_globals.js";

//si lang=0 anglés, lang=1 català, lang=2 castellà, lang=3 francés

import Idiomas from "./Idiomas";

let lang = 0;
// function activateen() {
//   return (lang = 0);
// }
// function activateca() {
//   return (lang = 1);
// }
// function activatees() {
//   return (lang = 2);
// }
// function activatefr() {
//   return (lang = 3);
// }
//activatees();

var idioma_etiquetas = idioma2[lang];
// i es un entero, typeof(i) es un number, idiomas2 es un array que proviene de lang2.json,
// i idiomas2[i] es un string
// por lo tanto idioma_etiquetas es un string
//  La i controla l'language i=0 anglés, i=1 català, i=2 castellà, i=3 francés

// ara em queda definir la i com a variable global i canviar-la quan canvii l'language amb el
// bottons onclick o banderas (imatges)

import logo from "../logos/triangulo.jpg";
import Boton from "./Boton";

<Boton />;

const Menu_Eventos = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };

  return (
    <>
      <Idiomas />
      <div style={divStylesMenu}>
        <table
          width="100%"
          style={divStylesMenu}
          align="left"
          cellspacing="10"
          cellpadding="10"
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
            <td align="right">
              {/* <button onClick="activateen()">English</button>
                <button onClick="activateca()">Català</button>
                <button onClick="activatees()">Español</button>
                <button onClick="activatefr()">Français</button> */}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Menu_Eventos;
