import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<Login />);
  });

  it("should render two label & input elements", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(3);
  });

  it("should have a disabled button by default", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find("input").at(2).prop("disabled")).toEqual(true);
  });

  it("should have an enabled button when the two inputs have a value", () => {
    const wrapper = shallow(<Login />);

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "test" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "test" } });

    expect(wrapper.find("input").at(0).prop("value")).toEqual("test");
    expect(wrapper.find("input").at(1).prop("value")).toEqual("test");

    expect(wrapper.find("input").at(2).prop("disabled")).toEqual(false);
  });

  it("should have a disabled button when only Password field has a value", () => {
    const wrapper = shallow(<Login />);

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "test" } });

    expect(wrapper.find("input").at(0).prop("value")).toEqual("");
    expect(wrapper.find("input").at(1).prop("value")).toEqual("test");

    expect(wrapper.find("input").at(2).prop("disabled")).toEqual(true);
  });

  it("should have a disabled button when only Email field has a value", () => {
    const wrapper = shallow(<Login />);

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "test" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "" } });

    expect(wrapper.find("input").at(0).prop("value")).toEqual("test");
    expect(wrapper.find("input").at(1).prop("value")).toEqual("");

    expect(wrapper.find("input").at(2).prop("disabled")).toEqual(true);
  });
});
