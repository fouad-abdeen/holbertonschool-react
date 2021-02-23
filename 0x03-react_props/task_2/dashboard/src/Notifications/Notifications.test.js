import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Testing if Notifications renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });
});

describe("Verifying if Notifications renders three Notification Items", () => {
  it("should render three NotificationItem tags", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
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

describe("Verifying if first NotificationItem renders the right html", () => {
  it("should render the right html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").childAt(0).text()).toEqual(
      "<NotificationItem />"
    );
  });
});
