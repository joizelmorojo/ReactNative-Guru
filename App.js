import React, {useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import * as Font from "expo-font";
import {theme} from './theme/theme';
import store from './redux/store';
import AppNavigator from './navigation/navigator';
import { isAndroid } from './utils/platforms';
 
const fetchFonts = async () => {
  await Font.loadAsync({
      [theme.fonts.titillium]: require('./assets/TitilliumWeb-Regular.ttf'),
      [theme.fonts.titilliumBold]: require('./assets/TitilliumWeb-Bold.ttf'),
      [theme.fonts.titilliumBoldItalic]: require('./assets/TitilliumWeb-BoldItalic.ttf'),
  })
}

const registerForPushNotificationsAsync = async () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  if (isAndroid) {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
    if (finalStatus !== "granted") {
    }
    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token.data);
    AsyncStorage.setItem("pushNotiToken", JSON.stringify(token.data));
  } else {
    alert("Must use physical device for Push Notifications");
  }
};

export default function App() {
  const [isReady, setIsReady] = useState(false)

  const isLoadingHandler = async () => {
    await fetchFonts()
    await registerForPushNotificationsAsync();
  }

  useEffect(()=>{
    if (!isReady) {
      isLoadingHandler();
      setIsReady(true);
      console.log("App.JS == useEffect for LoadingHandler");
    }
  }, [])
  
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
