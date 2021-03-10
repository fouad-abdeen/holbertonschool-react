import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";

export default function Footer() {
  return (
    <>
      <hr className={css(styles.hr)} />
      <i className="footer-text">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </i>
    </>
  );
}

const styles = StyleSheet.create({
  hr: {
    border: "1px solid #e1354b",
  },
});
