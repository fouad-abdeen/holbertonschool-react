import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Testing if the App renders without crashing", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
