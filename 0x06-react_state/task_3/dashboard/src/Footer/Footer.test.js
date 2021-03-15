import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Footer", () => {
  it("should render without crashing", () => {
    mount(<Footer />, {});
  });

  it("should not contain link if user is not logged in", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find("a").exists()).toBe(false);
  });

  test("should contain link if user is not logged in", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").exists()).toBe(true);
  });
});
