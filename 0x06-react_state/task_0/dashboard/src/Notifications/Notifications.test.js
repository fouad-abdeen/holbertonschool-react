import React from "react";
import { mount, shallow } from "enzyme";
import Notifications from "./Notifications";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

    expect(wrapper1.find("div")).toHaveLength(1);
    expect(wrapper2.find("div")).toHaveLength(1);
  });

  it("should render the correct html when displayDrawer is true and listNotifications contains data", () => {
    const wrapper = mount(
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

    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render the correct html when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should not rerender when the list is the same", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = mount(
      <Notifications listNotifications={listNotifications} />
    );

    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications: listNotifications });

    expect(shouldUpdate).toBe(false);
  });

  it("should rerender when the list is longer than the previous one", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];

    const newlistNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const emptylistNotifications = [];

    const wrapper = mount(
      <Notifications listNotifications={listNotifications} />
    );

    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications: newlistNotifications });

    expect(shouldUpdate).toBe(true);

    const $houldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications: emptylistNotifications });

    expect($houldUpdate).toBe(false);
  });
    
  it("should have handleDisplayDrawer & handleHideDrawer", () => {
    const displayDrawer = jest.fn();
    const hideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={displayDrawer}
        handleHideDrawer={hideDrawer}
      />
    );

    wrapper.simulate("click");

    expect(displayDrawer).toHaveBeenCalledTimes(1);
    expect(hideDrawer).toHaveBeenCalledTimes(0);
  });
});
