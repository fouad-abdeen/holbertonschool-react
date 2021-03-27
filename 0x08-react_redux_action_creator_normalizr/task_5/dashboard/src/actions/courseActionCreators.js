import * as types from "./courseActionTypes";

export const selectCourse = (index) => {
  return { type: types.SELECT_COURSE, index: index };
};

export const unSelectCourse = (index) => {
  return { type: types.UNSELECT_COURSE, index: index };
};
