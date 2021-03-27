import * as actions from "./uiActionCreators";
import * as types from "./uiActionTypes";

describe("actions", () => {
  it("should create an action to login the user", () => {
    const email = "abdeen.dev@gmail.com";
    const password = "github.com/fouad-abdeen";
    const LoggedIn = { type: types.LOGIN, user: { email, password } };
    expect(actions.login(email, password)).toEqual(LoggedIn);
  });

  it("should create an action to logout the user", () => {
    const LoggedOut = { type: types.LOGOUT };
    expect(actions.logout()).toEqual(LoggedOut);
  });

  it("should create an action to display notification drawer", () => {
    const displayedDrawer = { type: types.DISPLAY_NOTIFICATION_DRAWER };
    expect(actions.displayNotificationDrawer()).toEqual(displayedDrawer);
  });

  it("should create an action to hide notification drawer", () => {
    const hiddenDrawer = { type: types.HIDE_NOTIFICATION_DRAWER };
    expect(actions.hideNotificationDrawer()).toEqual(hiddenDrawer);
  });
});
