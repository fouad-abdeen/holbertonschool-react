import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Testing if App renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });
});
