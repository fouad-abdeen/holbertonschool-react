import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Testing if Login renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<Login />);
  });
});

describe("Verifying if Login renders two labels and two inputs", () => {
  it("should render two label & input elements", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
