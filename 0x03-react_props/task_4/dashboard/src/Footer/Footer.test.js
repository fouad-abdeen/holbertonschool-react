import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Testing if Footer renders without crashing", () => {
  it("should render without crashing", () => {
    shallow(<Footer />);
  });
});

describe("Verifying if Footer renders the text 'Copyright' at the very least", () => {
  it("should render at the very least the text 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    const text = "Copyright";
    expect(wrapper.last().text().slice(0,text.length)).toEqual("Copyright");
  });
});
