import React from "react";
import { StyleSheet, css } from "aphrodite";
import holberton_logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <>
      <header>
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
  logo: {
    width: "12.5rem",
    height: "13rem",
  },

  title: {
    color: "#e0354b",
    display: "inline-flex",
    verticalAlign: "top",
    marginTop: "2.5em",
  },
});
