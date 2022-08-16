import React from "react";
// https://www.youtube.com/watch?v=FFxY9Aa7kMI
//variables globales Ada Lovecode - Didacticode https://www.youtube.com/watch?v=HlY2jF74s_c
//WebStorage  con Ada Lovecode - Didacticode  https://www.youtube.com/watch?v=miNM1aLAB9s

// if (typeof Storage !== "undefined") {
//   //alert("The navigator its ok for another language");
//   //localStorage.setItem("idioma", "0");
//   // idioma = parseInt(idioma);
//   // alert(idioma);
//   //alert(typeof idioma);
//   //alert("idioma");
//   //alert(localStorage.getIt //alert("The navigator its ok for another language");
//localStorage.setItem("idioma", "0");
// idioma = parseInt(idioma);
// alert(idioma);
//alert(typeof idioma);
//alert("idioma");
//alert(localStorage.getItem("idioma"));
//alert(typeof localStorage.getItem("idioma"));
// let idioma1 = "2";
// //idioma1 = parseInt(localStorage.getItem(idioma));
// alert(idioma1);
// alert(typeof idioma1);
// idioma1 = parseInt(idioma1);
// alert(typeof idioma1);
//Borrar todos los elementos
//localStorage.clear();
//   //alert(typeof localStorage.getItem("idioma"));
//   // let idioma1 = "2";
//   // //idioma1 = parseInt(localStorage.getItem(idioma));
//   // alert(idioma1);
//   // alert(typeof idioma1);
//   // idioma1 = parseInt(idioma1);
//   // alert(typeof idioma1);
//   //Borrar todos los elementos
//   //localStorage.clear();
// } else {
//   alert("The navigator its only English");
//   let idioma = 0;
// }

const Boton = () => {
  const pulsar0 = () => {
    idioma = 0;
    console.log(idioma);
  };
  const pulsar1 = () => {
    idioma = 1;
    console.log(idioma);
  };
  const pulsar2 = () => {
    idioma = 2;
    console.log(idioma);
  };
  const pulsar3 = () => {
    idioma = 3;
    console.log(idioma);
  };
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "10px",
  };

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
      <br></br>
    </div>
  );
};

export default Boton;
