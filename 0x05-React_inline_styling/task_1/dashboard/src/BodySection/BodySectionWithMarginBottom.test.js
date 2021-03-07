import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("BodySectionWithMarginBottom Component Rendering", () => {
  it("should render the correct html", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find("BodySection").exists()).toBe(true);

    expect(wrapper.find("BodySection").props()).toHaveProperty(
      "title",
      "test title"
    );

    expect(wrapper.find("BodySection").props()).toHaveProperty(
      "children",
      <p>test children node</p>
    );
  });
});
