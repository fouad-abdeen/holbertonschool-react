import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<CourseList />);
  });

  it("should render the correct html when listCourses is empty", () => {
    const wrapper1 = shallow(<CourseList />);
    const wrapper2 = shallow(<CourseList listCourses={[]} />);

    expect(wrapper1.find("CourseListRow").exists()).toBe(false);
    expect(wrapper2.find("CourseListRow").exists()).toBe(false);

    expect(wrapper1.find("th").text()).toEqual("No course available yet");
    expect(wrapper2.find("th").text()).toEqual("No course available yet");
  });

  it("should render the correct html when listCourses contains data", () => {
    const wrapper = shallow(
      <CourseList
        listCourses={[
          { id: 1, name: "ES6", credit: 60 },
          { id: 2, name: "Webpack", credit: 20 },
          { id: 3, name: "React", credit: 40 },
        ]}
      />
    );

    expect(wrapper.find("CourseListRow")).toHaveLength(5);

    expect(
      wrapper.find("table").childAt(0).find("CourseListRow").props()
    ).toHaveProperty("textFirstCell", "Available courses");
    expect(
      wrapper.find("table").childAt(1).find("CourseListRow").props()
    ).toHaveProperty("textFirstCell", "Course name");
  });
});
