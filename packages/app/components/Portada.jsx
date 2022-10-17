import React from "react";

import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json

let idioma = parseInt(localStorage.getItem("idioma"));
let idioma_etiquetas = idioma2[idioma];

const Portada = () => {
  return (
    <div>
      {/* {miConstante} */}

      <br></br>
      <br></br>
      <h5 align="left">
        {idioma}: {idioma_etiquetas.portada}
      </h5>
    </div>
  );
};
export default Portada;
