import React from "react";
//import logo from "./logo.svg";
//import MenuIdioma from "./components/MenuIdioma";
import Menu from "./components/Menu";
//import Menu1 from "./components/Menu1";
//import Menu2 from "./components/Menu2";
//import Portada1 from "./components/Portada1";
//import ConnexionNft from "./components/ConnexionNft";
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";
//import Peu from "./components/Peu";
import "./App.css";
import ConnexionReactWeb3 from "./components/ConnexionReactWeb3";

//import Header from "./components/Header";
// https://www.youtube.com/watch?v=tjVKd1jL2Rc    JSX Video 1
// https://www.youtube.com/watch?v=J_ZmtP9xNg8    Que hace Vite en React? Video 3 DESDE CERO
// https://www.youtube.com/watch?v=3BHXuZvI4FI    slint   y prettier
// https://www.youtube.com/watch?v=EMBfiV9RJfg    JSX   Video 5
// https://www.youtube.com/watch?v=k1OvK7ZGN-c    COMPONENETES MUY BUENO
// https://www.youtube.com/watch?v=KXzLyHr8UVE    Crear proyeco React
// https://www.youtube.com/watch?v=Rq_nLTy65zI    CSS
// https://www.youtube.com/watch?v=LmldFbeSTFc    ESTADOS
// https://www.youtube.com/watch?v=rkxHd9SUBGU    LINKS MUY POTENTE
// https://www.youtube.com/watch?v=xE7TBCR6cj0    LINKS  mejor que el anterior pero va muy deprisa
// https://dev.to/rounakbanik/building-a-web3-frontend-with-react-340c  Conexion FrontEnd a una NFT
function App() {
  return (
    <div>
      {/* <MenuIdioma />  */}
      <Menu /> 
      {/* <Menu1 />  */}
      {/* <Menu2 />  */}
      {/* <Portada1 /> */}
 
       {/* <ConnexionNft /> 
      <ConnexionReactWeb3 /> */}
      {/* <Wallet /> */}
      <Profile />

    </div>
  );
}

export default App;
