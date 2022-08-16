import React from "react";
//import idioma from "./js/lang.json";   //idioma es un objecte que apunta al fitxer lang.json
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
//src="./js/script.js"

//import {language} from './components/menu.json' 
//import * as data from './lang.json';

// ES6/ES2015
// app.js
// import data from 'menu.json';
// const word = data.en.menu1;
// console.log(word);
  

const Menu = ()=>{
    const divStylesMenu={backgroundColor:"pink",fontSize:"2rem"};
    return(
    <div style={divStylesMenu}>
           <p> 
            
            <table align="left" cellspacing="10" cellpadding="10" border="3"> 
                <tr>
                    <td align="center">
                            <a href="index.html" target="_parent">
                                <img src="./logos/triangulo.jpg"
                                    width="40"
                                    height="34">
                                </img>
                            </a>
                    </td>
                    <td align="center">Menu1</td>
                    <td align="center">Menu2</td>
                    <td align="center">Menu3</td>
                    <td align="center">Menu4</td>
                    <td align="right"><a href="https://ethereum.org/es/" target="_blank"> Ethereum</a></td>
                
                </tr>
            </table>
        </p>    
    </div>
    )
}
export default Menu

