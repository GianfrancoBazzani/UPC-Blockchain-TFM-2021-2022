import React from "react";
import idioma from ".././js/lang.json";   //idioma es un objecte que apunta al fitxer lang.json
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
//src="./js/script.js"

//import {language} from '../js/menu.json' 
//import * as data from './lang.json';

// ES6/ES2015
// app.js
// import data from 'menu.json';
// const word = data.en.menu1;
// console.log(word);
  
  fetch('./lang.json')    
      .then(response =>response.json())
      .then(data => {
         alert(`estic en Menu.jsx menu5 de fr val: ${idioma.fr.menu5}`); //es un string
        //  alert(def);
        //  alert(typeof(def)); // def es un string
        //  let s1 = idioma.en.menu5; //es un string
        //  alert(s1);
        //  alert(typeof(idioma.en.menu5))
        //  alert(`estic en Menu.jsx, def aquí val: ${def}`);
        //  const menu11= `${idioma.ca.menu1}`  // (data.idi.menu1)
        //  alert(typeof(menu11));  // es un string
      })

const Menu = ()=>{
    return(
    <>
           <p> 
           {/* <a href="index.html">{idioma.fr.menu1}</a> 
           <a href="index.html">{idioma.fr.menu2}</a>
           <a href="index.html">{idioma.fr.menu3}</a>  
           <a href="index.html">{idioma.fr.menu4}</a>
           <a href="index.html">{idioma.fr.menu5}</a> */}
            <table align="center">
                <tr>
                        <td align="center">
                            <a href="index.html" target="_parent">
                                <img src="./logos/triangulo.jpg"
                                    width="40"
                                    height="34">
                                </img>
                            </a>
                         </td>
                    <td align="center"><a href="projecte.html"  target="_blank">{idioma.ca.menu1}</a></td>
                    <td align="center">{idioma.ca.menu2}</td>
                    <td align="center">{idioma.ca.menu3}</td>
                    <td align="center">{idioma.ca.menu4}</td>
                    <td align="center"><a href="https://ethereum.org/es/" target="_blank"> {idioma.ca.menu5}</a></td>
                        {/* <td align="right" style="width: 400px"> */}
                    <td align="right" >
                    {/* select id="idioma" onchange="select()" */}
                        <select class="translate" id="idioma1">
                            <option value="ca">Català</option>
                            <option value="en">English</option>
                            <option value="es">Castellano</option> 
                            <option value="fr">Français</option>
                        </select>
                    </td>  
                </tr>
            </table>
        </p>    
    </>
    )
}
export default Menu

