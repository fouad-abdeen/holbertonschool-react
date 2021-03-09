import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  const selectEmail = () => {
    const myEmail = document.querySelector("#email");
    myEmail.select();
  };
  const selectPassword = () => {
    const myPassword = document.querySelector("#password");
    myPassword.select();
  };

  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <label
          className={css(styles.label)}
          htmlFor="email"
          onClick={selectEmail}
        >
          Email:
        </label>
        <input
          className={css(styles.input)}
          type="text"
          name="email"
          id="email"
        />
        <br />
        <label
          className={css(styles.label)}
          htmlFor="password"
          onClick={selectPassword}
        >
          Password:
        </label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
          id="password"
        />
        <br />
        <button className={css(styles.input)}> OK </button>
      </form>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    cursor: "pointer",
    margin: "0.125rem",
  },

  input: {
    margin: "0.125rem",
    border: "none",
    backgroundColor: "transparent"
  },
});
