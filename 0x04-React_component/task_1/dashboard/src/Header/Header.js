import React from "react";
import "./Header.css";
import holberton_logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <>
      <img className="logo" alt="Holberton Logo" src={holberton_logo} />
      <h1 className="title">
        <strong> School dashboard </strong>
      </h1>
    </>
  );
}
