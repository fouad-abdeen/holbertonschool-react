import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

export default function Footer() {
  return (
    <>
      <hr />
      <i className="footer-text">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </i>
    </>
  );
}
