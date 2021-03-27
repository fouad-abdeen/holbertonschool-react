import * as types from "./courseActionTypes";

export const selectCourse = (index) => {
  return dispatch({ type: types.SELECT_COURSE, index: index });
};

export const unSelectCourse = (index) => {
  return dispatch({ type: types.UNSELECT_COURSE, index: index });
};
