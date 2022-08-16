import React from "react";
import language from "../js/lang.json";
import logo from "../logos/triangulo.jpg";
import "./menu.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// https://www.youtube.com/watch?v=7xRVnmWcTE8

const Menu2 = () => {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };

  return (
    <BrowserRouter>
      <Routes>
        <div>
          <table>
            <tr>
              <td>
                {" "}
                <a href="index.html" target="_parent">
                  <img src={logo} width="40" height="34" />
                </a>
              </td>
              <td> {language.en.menu1}</td>
              <td> {language.en.menu2}</td>
              <td> {language.en.menu3}</td>
              <td> {language.en.menu4}</td>
            </tr>
          </table>
        </div>
      </Routes>
    </BrowserRouter>

    // <table
    //   width='100%'
    //   style={divStylesMenu}
    //   align='left'
    //   cellspacing='10'
    //   cellpadding='10'
    //   border='0'
    // >
    //   <tr>
    //     <td align='center'>
    //       <a href='index.html' target='_parent'>
    //         <img src={logo} width='40' height='34' />
    //       </a>
    //     </td>
    //     <td>
    //       <a href='indexProject.html' align='center'>
    //         {' '}
    //         Project{' '}
    //       </a>
    //     </td>

    //     <td>
    //       <a href='https://www.sport.es' align='center'>
    //         {language.en.menu2}
    //       </a>
    //     </td>
    //     <td align='center'>{language.en.menu3} </td>
    //     <td align='center'>{language.en.menu4} </td>
    //     <td align='right'>
    //       {/* <button onClick={shoot}>Take the Shot!</button> */}
    //       {/* <button onClick={hola}>Català</button> */}

    //       <button id='aaa' onClick='activateen()'>
    //         English
    //       </button>
    //       <button onClick='activateca()'>Català</button>
    //       <button onClick='activatees()'>Español</button>
    //       <button onClick='activatefr()'>Français</button>
    //     </td>
    //   </tr>
    // </table>
  );
};

export default Menu2;
