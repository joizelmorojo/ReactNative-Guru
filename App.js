import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import * as Font from "expo-font";
import { connect, Provider } from "react-redux";
import store from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fonts from "./theme/fonts";
import Loader from "./Loader";
import AppNavigator from "./navigation/navigator";


const App = () => {
  const [isReady, setIsReady] = useState(false)
  
  const isLoadingHandler = async () => {
    await fetchFonts()
    await registerForPushNotificationsAsync();
  }

  const registerForPushNotificationsAsync = async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    if (Platform.OS === "android") {
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

  const fetchFonts = async () => {
    await Font.loadAsync({
        [fonts.titillium]: require('./assets/TitilliumWeb-Regular.ttf'),
        [fonts.titilliumBold]: require('./assets/TitilliumWeb-Bold.ttf'),
        [fonts.titilliumBoldItalic]: require('./assets/TitilliumWeb-BoldItalic.ttf'),
    })
  }

  useEffect(()=>{
    if (!isReady) {
      isLoadingHandler();
      setIsReady(true);
      console.log("App.JS == useEffect for LoadingHandler");
    }
  }, [])

  return (
    !isReady 
      ? <SafeAreaView><Text >{"Loading ..."}.</Text></SafeAreaView>
      : <Provider store={store}>
          <SafeAreaView>
            <AppNavigator />
          </SafeAreaView>
        </Provider>
  );
};

export default App;
