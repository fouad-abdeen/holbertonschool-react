import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component Rendering", () => {
  it("should render the correct number of th cells depending on textSecondCell", () => {
    const wrapper1 = shallow(<CourseListRow isHeader={true} />);
    const wrapper2 = shallow(
      <CourseListRow isHeader={true} textSecondCell="test" />
    );

    expect(wrapper1.find("th")).toHaveLength(1);

    expect(wrapper1.find("th").props()).toHaveProperty("colSpan", 2);

    expect(wrapper2.find("th")).toHaveLength(2);
  });

  it("should render the correct number of td cells wihtin tr", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} />);

    expect(wrapper.find("tr").childAt(0).type()).toEqual("td");

    expect(wrapper.find("tr").childAt(1).type()).toEqual("td");
  });
});
