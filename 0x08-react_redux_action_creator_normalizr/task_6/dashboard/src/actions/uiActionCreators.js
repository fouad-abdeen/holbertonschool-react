import * as types from "./uiActionTypes";

export const login = (email, password) => {
  return dispatch({ type: types.LOGIN, user: { email, password } });
};

export const logout = () => {
  return dispatch({ type: types.LOGOUT });
};

export const displayNotificationDrawer = () => {
  return dispatch({ type: types.DISPLAY_NOTIFICATION_DRAWER });
};

export const hideNotificationDrawer = () => {
  return dispatch({ type: types.HIDE_NOTIFICATION_DRAWER });
};
