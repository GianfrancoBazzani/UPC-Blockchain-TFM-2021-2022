import React from "react";
import logo from "./logos/triangulo.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Wallet from "./components/Wallet";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import "./App.css";


function App() {
  const divStylesMenu = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "18px",
  };
  return (
    <Router>
      <div>
        <div style={divStylesMenu}>
          {/* 👇️ iNICI DE LA TAULA */}

          <table
            width="100%"
            //style={divStylesMenu}
            //align="center"
            cellspacing="10"
            cellpadding="10"
            border="0"
          >
            <tr>
              <td align="left">
                <a href="/" target="_parent">
                  <img src={logo} width="40" height="34" />
                </a>
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td align="right">
                <Link to="/landingpage"><h2>Landing Pages</h2></Link>
              </td>
              <td align="left">
                <Link to="/profile"><h2>Profile</h2></Link>
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>

              <td align="right">
                {" "}
                <Wallet />
              </td>
            </tr>
          </table>
        </div>
        {/* 👇️ FINAL DE LA TAULA */}

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes> 
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
