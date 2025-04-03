import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  BackHandler,
  Text,
  View,
} from "react-native";
import Home from "./Containers/Homepage/Home";
import CustomFooter from "./component/footer/footer";
import SplashScreen from "./component/SplashScreen";
import ChallangePage from "./Containers/ChallangePage/ChallangePage";
import LastTabPage from "./Containers/LastTabPage/LastTabPage";
import VSpage from "./Containers/VSPage/VSpage";
import LoginForm from "./Containers/LogForm/LoginForm";
import TeamChallenge from "./Containers/teamChallenge/teamChallenge";
import TeamProgress from "./Containers/teamProgress/teamProgress";
import NextChallenge from "./Containers/nextChallenge/nextChallenge";
import PreviousChallenge from "./Containers/previousChallengeRanking/PreviousChallenge";
import ActivityRound from "./Containers/ActivityRound/ActivityRound";
import { Actions, Router, Scene, Stack } from "react-native-router-flux";
import ThirdTabPage from "./Containers/thirdTabPage/thirdTabPage";
import TransitionComponent from "./component/Drawer/Drawer";
import SideBar from "./Containers/Drawer/DrawerSideMenu";
import { Drawer, Spinner } from "native-base";
import DrawerNestedOne from "./Containers/DrawerNestedOne/DrawerNestedOne";
import DrawerNestedTwo from "./Containers/DrawerNestedTwo/DrawerNestedTwo";
import GetReadyPage from "./Containers/getReady/getReady";
import ChallengeQuestionPage from "./Containers/ChallengeQuestion/ChallengeQuestion";
import ChallengeQuestion1optionpage from "./Containers/ChallengeQuestion1optionpage/ChallengeQuestion1optionpage";
import ChallengeQuestion2optionpage from "./Containers/ChallengeQuestion2optionpage/ChallengeQuestion2optionpage";
import Log from "./Containers/Log/log";
import Recoverpassword from "./Containers/RecoverPassword/RecoverPassword";
import AfterVsPage from "./Containers/AfterVsPage/AfterVsPage";
import SignInForm from "./Containers/SignInForm/SignInForm";
import SearchPage from "./Containers/SearchPage/SearchPage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import * as ScreenOrientation from "expo-screen-orientation";
import VSpageLose from "./Containers/VSPageLose/VSpageLose";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

import { connect, Provider } from "react-redux";
import store from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loaderStyles } from "./LoaderStyles";
import { bindActionCreators } from "redux";

function Routes(props) {
  let { openDrawer } = props;
  let { closeDrawer, drawer } = props;
  const backAction = () => {
    if (
      Actions.currentScene === "AfterVsPage" ||
      Actions.currentScene === "VsPageLose" ||
      Actions.currentScene === "VsPage" ||
      Actions.currentScene === "ChallengeQuestion"
    ) {
      return true;
    } else {
      Actions.pop;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <>
      <Router>
        <Stack key="root">
          <Scene
            hideNavBar
            navTransparent
            key="signInForm"
            component={() => (
              <SignInForm openDrawer={openDrawer} closeDrawer={closeDrawer} />
            )}
            initial={true}
          />
          <Scene
            hideNavBar
            key="home"
            component={() => <Home openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="challenge"
            component={() => <ChallangePage openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="teamChallenge"
            component={() => <TeamChallenge openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="nextChallenge"
            component={() => <NextChallenge openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="teamProgress"
            component={() => <TeamProgress openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="thirdPage"
            component={() => <ThirdTabPage openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            key="lastTab"
            component={() => <LastTabPage openDrawer={openDrawer} />}
          />
          <Scene
            hideNavBar
            navTransparent
            backTitle=" "
            key="drawerNestedOne"
            component={() => (
              <DrawerNestedOne
                openDrawer={openDrawer}
                closeDrawer={closeDrawer}
              />
            )}
          />
          <Scene
            hideNavBar
            navTransparent
            backTitle=" "
            key="drawerNestedTwo"
            component={() => (
              <DrawerNestedTwo
                openDrawer={openDrawer}
                closeDrawer={closeDrawer}
              />
            )}
          />
          <Scene
            hideNavBar
            navTransparent
            key="getReady"
            component={GetReadyPage}
          />
          <Scene
            hideNavBar
            navTransparent
            key="recoverPassword"
            component={Recoverpassword}
          />
          <Scene
            hideNavBar
            navTransparent
            backTitle=" "
            key="searchPage"
            component={SearchPage}
          />
          <Scene
            hideNavBar
            navTransparent
            backTitle=" "
            key="previousChallenge"
            component={PreviousChallenge}
          />
          <Scene
            hideNavBar
            navTransparent
            backTitle=" "
            key="activityRound"
            component={ActivityRound}
          />
          <Scene
            hideNavBar
            navTransparent
            key="ChallengeQuestion"
            component={ChallengeQuestionPage}
          />
          <Scene
            hideNavBar
            navTransparent
            key="VsPage"
            back={false}
            component={VSpage}
          />
          <Scene
            hideNavBar
            navTransparent
            key="VsPageLose"
            back={false}
            component={VSpageLose}
          />
          <Scene
            navTransparent
            hideNavBar
            back={false}
            key="AfterVsPage"
            component={AfterVsPage}
          />
        </Stack>
      </Router>
    </>
  );
}

const mapStateToProps = ({ store }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
