import * as types from "./notificationActionTypes";

export const markAsRead = (index) => {
  return dispatch({ type: types.MARK_AS_READ, index });
};

export const setNotificationFilter = (filter) => {
  return dispatch({ type: types.SET_TYPE_FILTER, filter });
};
