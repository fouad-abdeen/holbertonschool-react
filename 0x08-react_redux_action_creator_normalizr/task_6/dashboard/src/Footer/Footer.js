import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";

export default function Footer() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <>
          {value.user.isLoggedIn && (
            <a href="test.com">
              <p>Contact us</p>
            </a>
          )}
          <hr className={css(styles.hr)} />
          <i className="footer-text">
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </i>
        </>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  hr: {
    border: "1px solid #e1354b",
  },
});
