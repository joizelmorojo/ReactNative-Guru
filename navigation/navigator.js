import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import MainNavigator from './main';



const AppNavigator = () => {
  //const isAuth = useSelector(getAuth)

  return <NavigationContainer>
    <FlashMessage position="top" />
    {/* <Advertisment /> */}
    <MainNavigator />
  </NavigationContainer>
}

export default AppNavigator;