import React from "react";
// https://www.youtube.com/watch?v=FFxY9Aa7kMI
//variables globales Ada Lovecode - Didacticode https://www.youtube.com/watch?v=HlY2jF74s_c
//WebStorage  con Ada Lovecode - Didacticode  https://www.youtube.com/watch?v=miNM1aLAB9s
//Siguiente de webstorage https://www.youtube.com/watch?v=ASQQUSFtr8g

//if (typeof Storage !== "undefined") {
//alert("The navigator its ok for another language");
//localStorage.setItem("idioma", "1");
// idioma1 = parseInt(localStorage.getItem("idioma"));
// alert(idioma1);
// let idioma1 = parseInt(localStorage.getItem("idioma"));
// alert(idioma1);
// //idioma = parseInt(idioma);
//alert(idioma);
//}
let idioma = 0;
const BotonIdioma = () => {
  const pulsar0 = () => {
    localStorage.setItem("idioma", "0");
    let idioma = parseInt(localStorage.getItem("idioma"));
    window.location.reload();
  };
  const pulsar1 = () => {
    localStorage.setItem("idioma", "1");
    let idioma = parseInt(localStorage.getItem("idioma"));
    window.location.reload();
  };
  const pulsar2 = () => {
    localStorage.setItem("idioma", "2");
    let idioma = parseInt(localStorage.getItem("idioma"));
    window.location.reload();
  };
  const pulsar3 = () => {
    localStorage.setItem("idioma", "3");
    let idioma = parseInt(localStorage.getItem("idioma"));
    window.location.reload();
  };
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "10px",
  };
  // <input type="button" value="Actualizar" onclick="location.reload()"/>
  return (
    <div>
      <table
        style={divStylesMenu}
        align="right"
        // cellspacing="1"
        // cellpadding="1"
        border="0"
      >
        <tr>
          <td align="right">
            <button
              onClick={() => {
                pulsar0();
              }}
            >
              English
            </button>
          </td>

          <td align="right">
            <button
              onClick={() => {
                pulsar1();
              }}
            >
              Català
            </button>
          </td>

          <td align="right">
            <button
              onClick={() => {
                pulsar2();
              }}
            >
              Castellano
            </button>
          </td>

          <td align="right">
            <button
              onClick={() => {
                pulsar3();
              }}
            >
              France
            </button>
          </td>
        </tr>
      </table>
      <br></br> <br></br>
    </div>
  );
};

export default BotonIdioma;
