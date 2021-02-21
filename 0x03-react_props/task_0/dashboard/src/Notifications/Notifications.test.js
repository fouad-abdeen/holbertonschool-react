import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Testing if Notifications renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });
});

describe("Verifying if Notifications renders three list items", () => {
  it("should render three li elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
  });
});

describe("Verifying if Notifications renders a certain text", () => {
  it("should render the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });
});
