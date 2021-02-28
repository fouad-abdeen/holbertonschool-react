import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component Rendering", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });

  it("should render the correct html when displayDrawer is true and listNotifications is empty", () => {
    const wrapper1 = shallow(<Notifications displayDrawer={true} />);
    const wrapper2 = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(wrapper1.find("NotificationItem").exists()).toBe(false);
    expect(wrapper2.find("NotificationItem").exists()).toBe(false);

    expect(wrapper1.find("p").text()).toEqual("No new notification for now");
    expect(wrapper2.find("p").text()).toEqual("No new notification for now");

    expect(wrapper1.find("div.menuItem").exists()).toBe(true);
    expect(wrapper2.find("div.menuItem").exists()).toBe(true);

    expect(wrapper1.find("div.Notifications").exists()).toBe(true);
    expect(wrapper2.find("div.Notifications").exists()).toBe(true);
  });

  it("should render the correct html when displayDrawer is true and listNotifications contains data", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[
          { id: 1, type: "default", value: "New course available" },
          {
            id: 2,
            html: { __html: "test" },
            type: "urgent",
          },
        ]}
      />
    );

    expect(wrapper.find("NotificationItem")).toHaveLength(2);

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
