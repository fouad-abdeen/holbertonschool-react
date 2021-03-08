import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: props.displayDrawer,
    };
  }

  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length || this.state !== nextState
    );
  }

  openNotifications = () => {
    this.setState({ displayDrawer: true });
  };

  closeNotifications = () => {
    this.setState({ displayDrawer: false });
    console.log("Close button has been clicked");
  };

  render() {
    if (this.state.displayDrawer === true) {
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
                onClick={this.closeNotifications}
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
      return (
        <div
          onClick={this.openNotifications}
          className={css(styles.menuItem)}
          id="notifications-opener"
        >
          Your notifications
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
  displayDrawer: false,
  listNotifications: [],
};

const animation_opacity = {
  from: {
    opacity: "0.5",
  },
  to: {
    opacity: "1",
  },
};

const animation_bounce = {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    fontSize: "large",
    marginTop: "2rem",
    "@media (min-width: 900px)": {
      border: "0.15em dotted #e1354b",
      padding: "0.375rem",
    },
    "@media (max-width: 899px)": {
      width: "95vw",
      height: "95vh",
      margin: "0",
      zIndex: "10",
    },
  },

  menuItem: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1.125rem",
    cursor: "pointer",
    ":hover": {
      animationName: [animation_opacity, animation_bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
      animationTimingFunction: "ease, ease",
    },
  },
});
