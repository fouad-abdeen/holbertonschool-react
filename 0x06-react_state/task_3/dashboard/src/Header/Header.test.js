import React from "react";
import { mount, shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("should render without crashing", () => {
    mount(<Header />, {
      context: {
        user: {
          email: "",
          password: "",
          isLoggedIn: false,
        },
      },
    });
  });

  it("should render an img & a h1 element", () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: "",
          password: "",
          isLoggedIn: false,
        },
      },
    });

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("should not create logoutSection if isLoggedIn is false", () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: "",
          password: "",
          isLoggedIn: false,
        },
        logOut: () => {},
      },
    });

    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("should create logoutSection if isLoggedIn is true", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "hello@live.com",
            password: "123@#$ZXV",
            isLoggedIn: true,
          },
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("calls logOut on logout link click ", () => {
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "abc@gmail.com",
            password: "123.XYZ",
            isLoggedIn: true,
          },
          logOut,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("i").exists()).toBe(true);

    wrapper.find("i").simulate("click");
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});
