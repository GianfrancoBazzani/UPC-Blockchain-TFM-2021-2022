import React from "react";

const Provas = () => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("idioma", "1");
    let idioma = parseInt(localStorage.getItem("idioma"));
  }

  return <div></div>;
};
export default Provas;
