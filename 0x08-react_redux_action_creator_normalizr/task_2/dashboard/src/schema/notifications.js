import { normalize, schema } from "normalizr";
const notifications = require("../../notifications.json");

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(
  notifications,
  new schema.Array(notification)
);

export const getAllNotificationsByUser = (userId) => {
  let userNotifications = [];
  const { messages, notifications } = normalizedNotifications.entities;
  const allNotifications = Object.entries(notifications);

  for (const an of allNotifications) {
    const n = { ...an };
    if (n[1].author === userId) {
      userNotifications.push(messages[n[1].context]);
    }
  }

  return userNotifications;
};
