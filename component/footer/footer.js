import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import {
  getUserDataApi,
  yourTurnOpponentTurn,
  getLeaderBoards,
  Statistics_Api,
  pushToHistory,
  removeLastTab,
  TeamChallengeApi,
  challengeSuggestions,
  Get_advertisement,
} from "../../redux/actions";
import { footerStyles, } from "./footerStyles.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badges_Api } from "../../redux/actions.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetworkModal from "../networkModal/networkModal";


function CustomFooter(props) {
  const styles = footerStyles();
  const [activeState, setactiveState] = useState("");
  useEffect(() => {
    setactiveState(Actions.currentScene);
  }, [Actions.currentScene, props]);
  useEffect(() => {
    console.log("check123");
  }, [activeState]);
  return (
    <>
      <NetworkModal />
      <View style={styles.footerMainView}>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            width: 80,
            position: "absolute",
            height: 140,
            bottom: 10,
            zIndex: 99,
          }}
        >
          {activeState === "_challenge" ? (
            <View >
              <ImageBackground
                source={require("../../allpngandsvg/purpleCircleButton.png")}
                style={styles.chellangeIcon}
              >
                <TouchableOpacity
                  onPress={() => {
                    AsyncStorage.setItem("s_c_r_e_e_n", "badge");
                    props.Get_advertisement()
                    props.pushToHistory("_challenge");

                    Actions.challenge();
                    props.Badges_Api();
                    props.getUserDataApi();
                  }}
                  style={styles.chellangeIconMain}
                >
                  <Image
                    style={styles.chellangeIconImg}
                    source={require("../../allpngandsvg/noun_Trophy_1822853(1).png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ) : (
            <View>
              <ImageBackground
                source={require("../../allpngandsvg/blueCircleButton.png")}
                style={styles.chellangeIcon}
              >
                <TouchableOpacity
                  onPress={() => {
                    AsyncStorage.setItem("s_c_r_e_e_n", "badge");
                    props.pushToHistory("_challenge");
                    Actions.challenge();
                    props.Get_advertisement()
                    props.Badges_Api();
                    props.getUserDataApi();
                  }}
                  style={styles.chellangeIconMain}
                >
                  <Image
                    style={styles.chellangeIconImg}
                    source={require("../../allpngandsvg/noun_Trophy_1822853(1).png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
        </View>
        <ImageBackground
          source={require("../../assets/footerBackground.png")}
          style={styles.footerMain}
        >
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("s_c_r_e_e_n", "home");
              props.challengeSuggestions();
              props.pushToHistory("_home");
              props.Get_advertisement()
              Actions.home();
              props.yourTurnOpponentTurn();
              props.getUserDataApi();
            }}
            style={styles.homeIcon}
          >
            {activeState === "_home" ? (
              <Image
                style={styles.homeIconImg}
                source={require("../../allpngandsvg/personActive.png")}
              />
            ) : (
              <Image
                style={styles.homeIconImg}
                source={require("../../allpngandsvg/person.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("s_c_r_e_e_n", "team");
              props.TeamChallengeApi()
              props.Get_advertisement()
              props.getUserDataApi();
            }}
            style={styles.friendsIcon}
          >
            {activeState === "_teamChallenge" ||
              activeState === "_nextChallenge" ||
              activeState === "_teamProgress" ||
              activeState === "_previousChallenge" ? (
              <Image
                style={styles.friendsIconImg}
                source={require("../../allpngandsvg/teamActive.png")}
              />
            ) : (
              <Image
                style={styles.friendsIconImg}
                source={require("../../allpngandsvg/team.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("s_c_r_e_e_n", "stats");

              props.pushToHistory("_thirdPage");
              Actions.thirdPage();
              props.Statistics_Api();
              props.Get_advertisement()
              props.getUserDataApi();
            }}
            style={styles.statsIcon}
          >
            {activeState === "_thirdPage" ? (
              <Image
                style={styles.statsIconImg}
                source={require("../../allpngandsvg/staticsActive.png")}
              />
            ) : (
              <Image
                style={styles.statsIconImg}
                source={require("../../allpngandsvg/statics.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("s_c_r_e_e_n", "ranks");

              props.pushToHistory("_lastTab");
              Actions.lastTab();
              props.getLeaderBoards();
              props.Get_advertisement()
              props.getUserDataApi();
            }}
            style={styles.lastIcon}
          >
            {activeState === "_lastTab" ? (
              <Image
                style={styles.lastIconImg}
                source={require("../../allpngandsvg/leaderboardActive.png")}
              />
            ) : (
              <Image
                style={styles.lastIconImg}
                source={require("../../allpngandsvg/leaderboard.png")}
              />
            )}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}
const mapStateToProps = ({ store }) => ({
  history: store.history,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      TeamChallengeApi,
      Badges_Api,
      yourTurnOpponentTurn,
      getLeaderBoards,
      Statistics_Api,
      getUserDataApi,
      pushToHistory,
      Get_advertisement,
      challengeSuggestions,
      removeLastTab,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CustomFooter);
