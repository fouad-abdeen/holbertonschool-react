import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "../Notifications/Notifications";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

  it("should render the correct html when isLoggedIn equal to false", () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });

    expect(wrapper.find("Login").exists()).toBe(true);
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("should render the correct html when isLoggedIn equal to true", () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    });

    expect(wrapper.find("Login").exists()).toBe(false);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });

  it("should have a state with displayDrawer equal to false", () => {
    const wrapper = mount(<App />);

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("should have handlers that correctly change displayDrawer in its state", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);

    const spy = jest.fn();

    const _wrapper = shallow(
      <Notifications handleDisplayDrawer={spy} handleHideDrawer={spy} />
    );

    _wrapper.instance().props.handleDisplayDrawer();
    _wrapper.instance().props.handleHideDrawer();

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should update the state correctly on logOut call", () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      user: {
        email: "abc@gmail.com",
        password: "XYZ",
        isLoggedIn: true,
      },
    });

    wrapper.state().logOut();

    expect(wrapper.state().user.email).toBe("");
    expect(wrapper.state().user.password).toBe("");
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it("should update the state correctly on logIn call", () => {
    const wrapper = mount(<App />);

    wrapper.instance().logIn("hello@live.com", "$%^&*");

    expect(wrapper.state().user.email).toBe("hello@live.com");
    expect(wrapper.state().user.password).toBe("$%^&*");
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });
});
