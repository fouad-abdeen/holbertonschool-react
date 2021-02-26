import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications(props) {
  const logToConsole = () => console.log("Close button has been clicked");

  if (props.displayDrawer === true) {
    if (
      !Array.isArray(props.listNotifications) ||
      !props.listNotifications.length
    )
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
            <p>No new notification for now</p>
          </div>
        </>
      );
    else
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
            <ul style={{ marginRight: "6rem" }}>
              {props.listNotifications.map((n) => {
                return (
                  <NotificationItem
                    key={n.id.toString()}
                    type={n.type}
                    value={n.value}
                    html={n.html}
                  />
                );
              })}
            </ul>
          </div>
        </>
      );
  } else return <div className="menuItem">Your notifications</div>;
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultTypes = {
  displayDrawer: false,
  listNotifications: [],
};
