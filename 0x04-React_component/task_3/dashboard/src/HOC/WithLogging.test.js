import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("HOC Component Rendering", () => {
  it("should call console.log on mounting/unmouting pure HTML", () => {
    console.log = jest.fn();

    const WithLoggingComponent = WithLogging(() => <p />);
    const wrapper = mount(<WithLoggingComponent />);

    expect(console.log).toHaveBeenCalledWith("Component Component is mounted");

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
  });

  it("should call console.log on mounting/unmouting Login", () => {
    console.log = jest.fn();

    const WithLoggingComponent = WithLogging(Login);
    const wrapper = mount(<WithLoggingComponent />);

    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
