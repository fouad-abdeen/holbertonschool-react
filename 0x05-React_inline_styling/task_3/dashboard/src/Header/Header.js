import React from "react";
import { StyleSheet, css } from "aphrodite";
import holberton_logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
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
});
