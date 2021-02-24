import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should render Notifications, Header, Login, and Footer components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").exists()).toBe(true);
    expect(wrapper.find("Header").exists()).toBe(true);
    expect(wrapper.find("Login").exists()).toBe(true);
    expect(wrapper.find("Footer").exists()).toBe(true);
  });

  it("should render CourseList & Login correctly", () => {
    const wrapper1 = shallow(<App />);
    const wrapper2 = shallow(<App isLoggedIn = {true}/>);
    expect(wrapper1.find("CourseList").exists()).toBe(false);
    expect(wrapper2.find("Login").exists()).toBe(false);
    expect(wrapper2.find("CourseList").exists()).toBe(true);
  });
});
