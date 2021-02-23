import React from "react";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

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
        <NotificationItem
          type={data[0].priority}
          value="New course available"
        />
        <NotificationItem
          type={data[1].priority}
          value="New resume available"
        />
        <NotificationItem
          type={data[1].priority}
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
