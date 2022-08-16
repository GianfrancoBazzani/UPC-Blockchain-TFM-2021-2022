import React from "react";
// const miConstante = <h3>Hi Folder</h3>;

let lang = 0;
function activateen() {
  return (lang = 0);
}
function activateca() {
  return (lang = 1);
}
function activatees() {
  return (lang = 2);
}
function activatefr() {
  return (lang = 3);
}

<table align="right">
  <tr>
    <td align="right">
      {" "}
      <button onClick="activateen">English</button>
    </td>
    <td align="right">
      {" "}
      <button onClick="activateca">Català</button>
    </td>
    <td align="right">
      {" "}
      <button onClick="activatees">Español</button>
    </td>
    <td align="right">
      {" "}
      <button onClick="activatefr">Français</button>
    </td>
  </tr>
</table>;

const Idiomas = () => {
  const divStyles = {
    backgroundColor: "#5499c7",
    color: "white",
    fontSize: "1rem",
  };
  return lang;

  // <div style={divStyles}>
  //   {/* {miConstante} */}
  //   <table align="right">
  //     <tr>
  //       <td align="right">
  //         {" "}
  //         <button onClick="activateen">English</button>
  //       </td>
  //       <td align="right">
  //         {" "}
  //         <button onClick="activateca">Català</button>
  //       </td>
  //       <td align="right">
  //         {" "}
  //         <button onClick="activatees">Español</button>
  //       </td>
  //       <td align="right">
  //         {" "}
  //         <button onClick="activatefr">Français</button>
  //       </td>
  //     </tr>
  //   </table>
  // </div>
};

export default Idiomas;
