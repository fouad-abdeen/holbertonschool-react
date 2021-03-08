import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  logToConsole = () => {
    console.log("Close button has been clicked");
    this.setState({ displayDrawer: false });
  };

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
              <ul className={css(styles.list)}>
                {this.props.listNotifications.map((n) => {
                  return (
                    <NotificationItem
                      className={css(styles.listItem)}
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
      return (
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
      );
  }
}

export default Notifications;

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

const styles = StyleSheet.create({
  Notifications: {
    marginTop: "2rem",
    "@media (min-width: 900px)": {
    border: "0.15em dotted #e1354b",
    padding: "0.375rem",
    },
    "@media (max-width: 899px)": {
      width: '95vw',
      height: '95vh',
      margin: '0',
      zIndex: '10',
    },
  },

  list: {
    listStyleType: "none",
  },

  menuItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
