import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("NotificationItem Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("should render the correct html while passing dummy props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").props()).toHaveProperty(
      "data-notification-type",
      "default"
    );
    expect(wrapper.find("li").text()).toEqual("test");
  });

  it("should render the correct html while passing a dummy html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.find("li").props()).toHaveProperty(
      "dangerouslySetInnerHTML",
      { __html: "<u>test</u>" }
    );
  });
});
