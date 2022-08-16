import React from "react";
//import idioma2 from "../js/lang2.json"; //json total
import idioma_en from "../js/en.json"; // json in English
import idioma_ca from "../js/ca.json"; // json in Català language
import idioma_es from "../js/es.json"; // json in Spanish language
import idioma_fr from "../js/fr.json"; // json in France language

// idioma val 0,1,2,3 depenen de si es English,Català, Castellano o Francés
let idioma = parseInt(localStorage.getItem("idioma"));
let idioma_etiquetas = 0;

switch (idioma) {
  case 0:
    idioma_etiquetas = idioma_en;
    break;
  case 1:
    idioma_etiquetas = idioma_ca;
    break;
  case 2:
    idioma_etiquetas = idioma_es;
    break;
  case 3:
    idioma_etiquetas = idioma_fr;
    break;
  default:
    idioma_etiquetas = idioma_en;
    break;
}

const Portada1 = () => {
  return (
    <div>
      <h5 align="left">{idioma_etiquetas.form}</h5>
    </div>
  );
};
export default Portada1;
