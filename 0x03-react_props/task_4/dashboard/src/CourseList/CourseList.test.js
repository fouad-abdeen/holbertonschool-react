import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<CourseList />);
  });

  it("should render five rows", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
