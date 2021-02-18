import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Testing if App renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });
});

describe("verifying that App renders some div elements", () => {
  it("should render a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-header").exists()).toBe(true);
  });

  it("should render a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-body").exists()).toBe(true);
  });

  it("should render a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-footer").exists()).toBe(true);
  });
});
