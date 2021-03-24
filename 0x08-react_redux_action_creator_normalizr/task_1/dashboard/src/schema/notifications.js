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
  const userNotifications = notifications.filter((n) => n.author.id === userId);

  return userNotifications.map((n) => n.context);
};
