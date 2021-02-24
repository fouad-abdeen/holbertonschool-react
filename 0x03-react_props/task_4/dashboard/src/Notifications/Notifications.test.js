import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });
});

it("should render the correct html depending on displayDrawer", () => {
  const wrapper1 = shallow(<Notifications displayDrawer={true} />);
  const wrapper2 = shallow(<Notifications displayDrawer={false} />);

  expect(wrapper1.find("NotificationItem")).toHaveLength(3);

  expect(wrapper1.find("p").text()).toEqual(
    "Here is the list of notifications"
  );

  expect(wrapper1.find("ul").childAt(0).text()).toEqual("<NotificationItem />");

  expect(wrapper1.find("div.menuItem").exists()).toBe(true);

  expect(wrapper1.find("div.Notifications").exists()).toBe(true);

  expect(wrapper2.find("div.menuItem").exists()).toBe(true);

  expect(wrapper2.find("div.Notifications").exists()).toBe(false);
});
