import React from "react";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  const data = [{ priority: "default" }, { priority: "urgent" }];
  const logToConsole = () => console.log("Close button has been clicked");

  return (
    <div className="Notifications">
      <button
        aria-label="close"
        style={{
          float: "right",
          backgroundColor: "Transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={logToConsole}
      >
        <img
          alt="Close"
          src={close_icon}
          style={{ width: "0.75rem", height: "0.75rem" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li id={data[0].priority}>New course available</li>
        <li id={data[1].priority}>New resume available</li>
        <li
          id={data[1].priority}
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
