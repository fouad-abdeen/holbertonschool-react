import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  logToConsole = () => console.log("Close button has been clicked");

  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    if (this.props.displayDrawer === true) {
      if (
        !Array.isArray(this.props.listNotifications) ||
        !this.props.listNotifications.length
      )
        return (
          <>
            <div className={css(styles.menuItem)}>Your notifications</div>
            <div className={css(styles.Notifications)}>
              <button
                aria-label="close"
                style={{
                  float: "right",
                  backgroundColor: "Transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
                onClick={this.logToConsole}
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
            <div className={css(styles.menuItem)}>Your notifications</div>
            <div className={css(styles.Notifications)}>
              <button
                aria-label="close"
                style={{
                  float: "right",
                  backgroundColor: "Transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
                onClick={this.logToConsole}
              >
                <img
                  alt="Close"
                  src={close_icon}
                  style={{ width: "0.75rem", height: "0.75rem" }}
                />
              </button>
              <p>Here is the list of notifications</p>
              <ul style={{ marginRight: "6rem" }}>
                {this.props.listNotifications.map((n) => {
                  return (
                    <NotificationItem
                      key={n.id.toString()}
                      type={n.type}
                      value={n.value}
                      html={n.html}
                      markAsRead={() => this.markAsRead(n.id)}
                    />
                  );
                })}
              </ul>
            </div>
          </>
        );
    } else
      return <div className={css(styles.menuItem)}>Your notifications</div>;
  }
}

export default Notifications;

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  Notifications: {
    fontSize: "large",
    border: "0.15em dotted #e1354b",
    padding: "0.375rem",
    marginTop: "2rem",
  },

  menuItem: {
    position: "fixed",
    top: 0,
    right: 0,
    border: 0,
    marginTop: "0.625rem",
    marginRight: "0.625rem",
  },
});
