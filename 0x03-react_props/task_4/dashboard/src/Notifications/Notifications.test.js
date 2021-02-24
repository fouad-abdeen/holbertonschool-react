import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });

  it("should render the correct html when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("NotificationItem")).toHaveLength(3);

    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );

    expect(wrapper.find("ul").childAt(0).text()).toEqual(
      "<NotificationItem />"
    );

    expect(wrapper.find("div.menuItem").exists()).toBe(true);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("should render the correct html when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });
});
