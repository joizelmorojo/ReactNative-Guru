import React, {useEffect, useState} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {enableScreens} from "react-native-screens";
import {isAndroid} from '../utils/platform';

import LoginForm from '../Containers/LogForm/LoginForm';
/* Tab */
import CustomFooter from '../component/footer/footer';
import Home from '../Containers/Homepage/Home';
import Challenge from '../Containers/ChallangePage/ChallangePage';
import TeamChallenge from '../Containers/teamChallenge/teamChallenge';
import NextChallenge from '../Containers/nextChallenge/nextChallenge';
import TeamProgress from '../Containers/teamProgress/teamProgress';
import ThirdTabPage from '../Containers/thirdTabPage/thirdTabPage';
import LastTabPage from '../Containers/LastTabPage/LastTabPage';
import DrawerNestedOne from '../Containers/DrawerNestedOne/DrawerNestedOne';
import DrawerNestedTwo from '../Containers/DrawerNestedTwo/DrawerNestedTwo';
import RecoverPassword from '../Containers/RecoverPassword/RecoverPassword';
import RegistrationForm from '../Containers/Register/registrationForm';
import PreviousChallenge from '../Containers/previousChallengeRanking/PreviousChallenge';
import ActivityRound from '../Containers/ActivityRound/ActivityRound';
import SearchPage from '../Containers/SearchPage/SearchPage';
/* Other */
import VSpage from '../Containers/VSPage/VSpage';
import VSpageLose from '../Containers/VSPageLose/VSpageLose';
import AfterVsPage from '../Containers/AfterVsPage/AfterVsPage';
import GetReadyPage from '../Containers/getReady/getReady';
import GetReadyTeam from '../Containers/GetReadyTeam/getReadyTeam';
import ChallengeQuestionPageTeam from '../Containers/ChallengeQuestionTeam/ChallengeQuestionTeam';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

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
    initialRouteName='SignIn'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignIn" component={LoginForm} />
    {/* <Stack.Screen name="Tabs" component={TabScenes} />
    <Stack.Screen name='VsPage' component={VSpage} />
    <Stack.Screen name='VsPageLose' component={VSpageLose} />
    <Stack.Screen name='AfterVsPage' component={AfterVsPage} />
    <Stack.Screen name='getReady' component={GetReadyPage} />
    <Stack.Screen name='GetReadyTeam' component={GetReadyTeam} />
    <Stack.Screen name='ChallengeQuestionTeam' component={ChallengeQuestionPageTeam} /> */}
  </Stack.Navigator>
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => bindActionCreators({},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MainScenes);