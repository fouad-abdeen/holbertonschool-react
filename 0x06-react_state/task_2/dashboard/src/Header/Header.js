import React from "react";
import { StyleSheet, css } from "aphrodite";
import holberton_logo from "../assets/holberton-logo.jpg";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <div className={css(styles.headerContainer)}>
          <header className={css(styles.header)}>
            <img
              className={css(styles.logo)}
              alt="Holberton Logo"
              src={holberton_logo}
            />
            <h1 className={css(styles.title)}>
              <strong> School dashboard </strong>
            </h1>
          </header>
        </div>
        {user.isLoggedIn ? (
          <div id="logoutSection">
            <p>
              Welcome <b>{user.email} </b>
              <i onClick={logOut} className={css(styles.logOut)}>
                (logout)
              </i>
            </p>
          </div>
        ) : (
          <span></span>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    position: "relative",
  },

  header: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  logo: {
    width: "12.5rem",
    height: "13rem",
  },

  title: {
    color: "#e0354b",
    verticalAlign: "top",
    marginTop: "2.5em",
  },

  logOut: {
    cursor: "pointer",
  },
});

Header.contextType = AppContext;

export default Header;
