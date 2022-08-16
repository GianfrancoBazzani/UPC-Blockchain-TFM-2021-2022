import React from "react";
import language from "../js/lang.json";
import logo from "../logos/triangulo.jpg";

// const miConstante = <h1> Hi Menu</h1>;
var lang = "ca";
function activateen() {
  return (lang = `en`);
}
function activateca() {
  return (lang = `ca`);
}
function activatees() {
  return (lang = `es`);
}
function activatefr() {
  return (lang = `fr`);
}
activatees();
alert(lang);
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

//const titulo2 = document.getElementById("aaa");
//titulo2.addEventListener("click",activatefr);

//document.write('<h2 onclick \= "activateca()">Català</h2>');

//hola
//document.write("<h1>Quita el contenido viejo - Agrega el contenido nuevo!</h1>");
//activatees();
//alert(lang);
// function prova() {
//   alert('estic dins de la funcio prova');
//   document.write('<button onclick = "activateen(`en`)">English</button>');
// }
// prova();

// això es CORRECTE
// var lang = "en";
// function activateen(lang){alert(lang);}
// function activateca(lang){return lang = "ca";}

// function prova(){
//   alert ("estic a la funcio prova");
// //document.write('<button onclick = \"activateen("en")\">Englishhhhhhhh</button>');
// document.write('<button onclick = "activateen(`fr`)">Englishhhhhhhh</button>');

// }
// prova();

//document.body.innerHTML = "<h1> lang </h1>"
//var nums = language.concat(lang);
//document.body.innerHTML = "<h1> nums </h1>"

//const car = "language.".concat(lang).concat(".menu1");
//var car1 = JSON.parse(car);

const Menu1 = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };

  return (
    <>
      <p>
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
              <td>
                <a href="indexProject.html" align="center">
                  {" "}
                  Project{" "}
                </a>
              </td>

              <td>
                <a href="https://www.sport.es" align="center">
                  {language.en.menu2}
                </a>
              </td>
              <td align="center">{language.en.menu3} </td>
              <td align="center">{language.en.menu4} </td>
              <td align="right">
                {/* <button onClick={shoot}>Take the Shot!</button> */}
                {/* <button onClick={hola}>Català</button> */}

                <button id="aaa" onClick="activateen()">
                  English
                </button>
                <button onClick="activateca()">Català</button>
                <button onClick="activatees()">Español</button>
                <button onClick="activatefr()">Français</button>
              </td>
            </tr>
          </table>
        </div>
      </p>
    </>
  );
};

export default Menu1;
