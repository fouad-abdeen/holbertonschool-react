import * as actions from "./notificationActionCreators";
import * as types from "./notificationActionTypes";

describe("notification actions", () => {
  it("should create an action to mark notification as read", () => {
    const index = 1;
    const markAsReadAction = { type: types.MARK_AS_READ, index };
    expect(actions.markAsRead(index)).toEqual(markAsReadAction);
  });

  it("should create an action to set notification filter", () => {
    const { DEFAULT } = types.NotificationTypeFilters.DEFAULT;
    const setNotificationFilterAction = {
      type: types.SET_TYPE_FILTER,
      filter: DEFAULT,
    };
    expect(actions.setNotificationFilter(DEFAULT)).toEqual(
      setNotificationFilterAction
    );
  });
});
