import * as types from "./uiActionTypes";

export const login = (email, password) => {
  return { type: types.LOGIN, user: { email, password } };
};

export const logout = () => {
  return { type: types.LOGOUT };
};

export const displayNotificationDrawer = () => {
  return { type: types.DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: types.HIDE_NOTIFICATION_DRAWER };
};
