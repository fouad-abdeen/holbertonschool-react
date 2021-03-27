import * as actions from "./courseActionCreators";
import * as types from "./courseActionTypes";

describe("actions", () => {
  it("should create an action to select course", () => {
    const selectCourseAction = { type: types.SELECT_COURSE, index: 1 };
    expect(actions.selectCourse(1)).toEqual(selectCourseAction);
  });

  it("should create an action to unselect course", () => {
    const unSelectCourseAction = { type: types.UNSELECT_COURSE, index: 1 };
    expect(actions.unSelectCourse(1)).toEqual(unSelectCourseAction);
  });
});
