import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="rnr_rooms_logo_white.svg" alt="logo" />
        <h3>ETG API Specification v1</h3>
      </nav>
      <SwaggerUI url="./openapi.yaml" />
    </>
  );
}

export default App;
