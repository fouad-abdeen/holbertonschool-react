import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";
import "./utils/utilsCustomTest";

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

module.hot.accept();
