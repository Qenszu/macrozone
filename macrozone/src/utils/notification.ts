import * as Notification from "expo-notifications";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notification.requestPermissionsAsync();
  return status === "granted";
};

export const scheduleMealRemainder = async () => {
  await Notification.scheduleNotificationAsync({
    content: {
      title: "Macrozone",
      body: "Do not forget to log your lunch!",
    },
    trigger: {
      type: Notification.SchedulableTriggerInputTypes.DAILY,
      hour: 15,
      minute: 5,
    },
  });

  await Notification.scheduleNotificationAsync({
    content: {
      title: "Macrozone",
      body: "Time to log your dinner!",
    },
    trigger: {
      type: Notification.SchedulableTriggerInputTypes.DAILY,
      hour: 21,
      minute: 37,
    },
  });
};

export const cancelMealReminder = async () => {
  await Notification.cancelAllScheduledNotificationsAsync();
};
