import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./utils/utilsCustomTest";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

module.hot.accept();
