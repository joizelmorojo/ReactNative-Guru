import React, {useEffect, useState} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {enableScreens} from "react-native-screens";
import {isAndroid} from '../utils/platforms';

import LoginForm from '../screens/LogForm/LoginForm';
/* Tab */
import CustomFooter from '../component/footer/footer';
import Home from '../screens/Homepage/Home';
import Challenge from '../screens/ChallangePage/ChallangePage';
import TeamChallenge from '../screens/teamChallenge/teamChallenge';
import NextChallenge from '../screens/nextChallenge/nextChallenge';
import TeamProgress from '../screens/teamProgress/teamProgress';
import ThirdTabPage from '../screens/thirdTabPage/thirdTabPage';
import LastTabPage from '../screens/LastTabPage/LastTabPage';
import DrawerNestedOne from '../screens/DrawerNestedOne/DrawerNestedOne';
import DrawerNestedTwo from '../screens/DrawerNestedTwo/DrawerNestedTwo';
import RecoverPassword from '../screens/RecoverPassword/RecoverPassword';
import RegistrationForm from '../screens/Register/registrationForm';
import PreviousChallenge from '../screens/previousChallengeRanking/PreviousChallenge';
import ActivityRound from '../screens/ActivityRound/ActivityRound';
import SearchPage from '../screens/SearchPage/SearchPage';
/* Other */
import VSpage from '../screens/VSPage/VSpage';
import VSpageLose from '../screens/VSPageLose/VSpageLose';
import AfterVsPage from '../screens/AfterVsPage/AfterVsPage';
import GetReadyPage from '../screens/getReady/getReady';
import GetReadyTeam from '../screens/GetReadyTeam/getReadyTeam';
import ChallengeQuestionPageTeam from '../screens/ChallengeQuestionTeam/ChallengeQuestionTeam';


enableScreens()
const Stack = createStackNavigator()

export const TabScenes = () => {
  return <>
    <Stack.Navigator >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='challenge' component={Challenge} />
      <Stack.Screen name='teamChallenge' component={TeamChallenge} />
      <Stack.Screen name='nextChallenge' component={NextChallenge} />
      <Stack.Screen name='teamProgress' component={TeamProgress} />
      <Stack.Screen name='thirdPage' component={ThirdTabPage} />
      <Stack.Screen name='lastTab' component={LastTabPage} />
      <Stack.Screen name='drawerNestedOne' component={DrawerNestedOne} />
      <Stack.Screen name='drawerNestedTwo' component={DrawerNestedTwo} />
      <Stack.Screen name='recoverPassword' component={RecoverPassword} />
      <Stack.Screen name='registration' component={RegistrationForm} />
      <Stack.Screen name='previousChallenge' component={PreviousChallenge} />
      <Stack.Screen name='activityRound' component={ActivityRound} />
      <Stack.Screen name='searchPage' component={SearchPage} />
    </Stack.Navigator>
    <CustomFooter />
  </>
}

function MainScenes() {


  return <Stack.Navigator 
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignIn" component={LoginForm} />
    <Stack.Screen name="Tabs" component={TabScenes} />
    <Stack.Screen name='VsPage' component={VSpage} />
    <Stack.Screen name='VsPageLose' component={VSpageLose} />
    <Stack.Screen name='AfterVsPage' component={AfterVsPage} />
    <Stack.Screen name='getReady' component={GetReadyPage} />
    <Stack.Screen name='GetReadyTeam' component={GetReadyTeam} />
    <Stack.Screen name='ChallengeQuestionTeam' component={ChallengeQuestionPageTeam} />
  </Stack.Navigator>
}

export default MainScenes;