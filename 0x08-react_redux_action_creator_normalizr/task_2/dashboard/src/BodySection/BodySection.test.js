import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<BodySection />);
  });

  it("should render the correct html", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find("div.bodySection").exists()).toBe(true);

    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("div.bodySection").childAt(0).text()).toEqual(
      "test title"
    );

    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("div.bodySection").childAt(1).text()).toEqual(
      "test children node"
    );
  });
});
