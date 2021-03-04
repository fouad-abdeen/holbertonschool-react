import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// "it" function defines the test case
const it = (desc, func) => {
  //encapsulate the func call in try/catch block so that testing does not stop if one test fails
  try {
    func();
    // If the test case passes then log the test case description in the browser console with a checkmark
    console.log("\x1b[32m%s\x1b[0m", "\u2714 " + desc);
  } catch (error) {
    // log the error on the console with an 'x'
    console.log("\n");
    console.log("\x1b[31m%s\x1b[0m", "\u2718 " + desc);
    console.error(error);
    console.log("\n");
  }
};

// Assertion
const assert = (isTrue) => {
  if (!isTrue) {
    throw new Error();
  }
};

// Unit Testing
const currentYear = getFullYear();
const footerTrueCopy = getFooterCopy(true);
const footerFalseCopy = getFooterCopy(false);
const latestNotification = getLatestNotification();

if (currentYear === 2021) {
  it("'getFullYear()' returns the correct year", () => {
    assert(true);
  });
}

if (currentYear !== 2021) {
  it("'getFullYear()' returns the wrong year", () => {
    assert(false);
  });
}

if (footerTrueCopy === "Holberton School") {
  it("'getFooterCopy()' returns the correct string when the argument is true", () => {
    assert(true);
  });
}

if (footerFalseCopy === "Holberton School main dashboard") {
  it("'getFooterCopy()' returns the correct string when the argument is false", () => {
    assert(true);
  });
}

if (footerTrueCopy !== "Holberton School") {
  it("'getFooterCopy()' returns the wrong string when the argument is true", () => {
    assert(false);
  });
}

if (footerFalseCopy !== "Holberton School main dashboard") {
  it("'getFooterCopy()' returns the wrong string when the argument is false", () => {
    assert(false);
  });
}

if (
  latestNotification === "<strong>Urgent requirement</strong> - complete by EOD"
) {
  it("'getLatestNotification()' returns the correct string", () => {
    assert(true);
  });
}

if (
  latestNotification !== "<strong>Urgent requirement</strong> - complete by EOD"
) {
  it("'getLatestNotification()' returns the wrong string", () => {
    assert(false);
  });
}
