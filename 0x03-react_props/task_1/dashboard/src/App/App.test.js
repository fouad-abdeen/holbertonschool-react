import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Testing if App renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });
});

describe("verifying that App renders Notifications, Header, Login, and Footer components", () => {
  it("should render Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").exists()).toBe(true);
  });

  it("should render Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").exists()).toBe(true);
  });

  it("should render Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login").exists()).toBe(true);
  });
});

it("should render Footer component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Footer").exists()).toBe(true);
});
