import * as Notifications from 'expo-notifications';

export const registerForNotifications = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
};
