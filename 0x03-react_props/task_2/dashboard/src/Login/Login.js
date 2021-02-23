import React from "react";
import "./Login.css"

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
        <label htmlFor="email" onClick={selectEmail}>
          Email:
        </label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password" onClick={selectPassword}>
          Password:
        </label>
        <input type="password" name="password" id="password" />
        <button> OK </button>
      </form>
    </>
  );
}
