import React from "react";
import scheme from "./../logos/project-outline.jpeg";
const Home = () => {
  return (
    <div>
      <h1>General Scheme of the Project</h1>
      <p>
        <a href="/" target="_parent">
          <img src={scheme} width="800" height="600" align="center" />
        </a>
      </p>
    </div>
  );
};
export default Home;
