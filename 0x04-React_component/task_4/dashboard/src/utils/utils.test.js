import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

const assert = (isTrue) => {
  if (!isTrue) {
    throw new Error();
  }
};

const currentYear = getFullYear();
const footerTrueCopy = getFooterCopy(true);
const footerFalseCopy = getFooterCopy(false);
const latestNotification = getLatestNotification();

if (currentYear === 2021) {
  it("'getFullYear()' returns the correct year", () => {
    assert(true);
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

if (
  latestNotification === "<strong>Urgent requirement</strong> - complete by EOD"
) {
  it("'getLatestNotification()' returns the correct string", () => {
    assert(true);
  });
}
