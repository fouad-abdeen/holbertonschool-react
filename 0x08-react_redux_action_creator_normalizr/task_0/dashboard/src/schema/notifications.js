const notifications = require("../../notifications.json");

const getAllNotificationsByUser = (userId) => {
  const userNotifications = notifications.filter((n) => n.author.id === userId);

  return userNotifications.map((n) => n.context);
};

export default getAllNotificationsByUser;
