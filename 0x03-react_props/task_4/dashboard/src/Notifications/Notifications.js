import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export default function Notifications(props) {
  const data = [{ priority: "default" }, { priority: "urgent" }];
  const logToConsole = () => console.log("Close button has been clicked");

  if (props.displayDrawer === true) {
    return (
      <>
        <div className="menuItem">Your notifications</div>
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
          <ul style = {{marginRight: "6rem"}}>
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
      </>
    );
  } else return <div className="menuItem">Your notifications</div>;
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultTypes = {
  displayDrawer: false,
};
