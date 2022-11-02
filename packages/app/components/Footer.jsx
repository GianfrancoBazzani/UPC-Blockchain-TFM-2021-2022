import React from "react";

const Footer = () => {
  const divStylesFooter = {
    backgroundColor: "#ffffff",
    //backgroundColor: "#5499c7",
    //backgroundColor: "#123456",
    padding: "22em",
    //float: "left",
    color: "black",
    fontSize: "1rem",
  };
  return (
    <div style={divStylesFooter}>
      {/* {miConstante} */}

      <table width="100%">
        <h3> Footer</h3>
        <tr>
          <td> Row 1 Column 1</td>
          <td> Row 1 Column 2</td>
        </tr>
        <tr>
          <td> Row 2 Column 1</td>
          <td> Row 2 Column 2</td>
        </tr>
      </table>
    </div>
  );
};
export default Footer;
