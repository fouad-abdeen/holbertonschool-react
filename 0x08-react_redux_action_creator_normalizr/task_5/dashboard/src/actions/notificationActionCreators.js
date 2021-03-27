import * as types from "./notificationActionTypes";

export const markAsRead = (index) => {
  return { type: types.MARK_AS_READ, index };
};

export const setNotificationFilter = (filter) => {
  return { type: types.SET_TYPE_FILTER, filter };
};
