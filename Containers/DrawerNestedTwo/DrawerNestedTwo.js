import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import MyText from "../../component/MyText/MyText";
import Loader from "../../Loader";
import {
  breakStrng,
  Get_advertisement,
  individual_challenge_history,
  removeLastTab,
  settingIndividualChallengeHistorynewobj,
} from "../../modules/actions";
import { DrawerNestedTwoStyles } from "./DrawerNestedTwoStyles";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function DrawerNestedTwo(props) {
  const screenData = useScreenDimensions();

  function getPercentWidth(val) {
    return (val / widthh) * 100;
  }

  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }
  const [heightt, setHeightt] = useState(screenData.constantHeightt);
  const [widthh, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  const [refreshing, setRefreshing] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [arr, setarr] = useState([]);
  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  const styles = DrawerNestedTwoStyles();

  const onRefresh = () => {
    setRefreshing(true);
    props.individual_challenge_history();
    props.Get_advertisement()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  useEffect(() => {
    if (buttonDisable) {
      if (props.history.length) {
        Actions[
          props.history[props.history.length > 1 ? props.history.length - 2 : 0]
        ]();
        console.log(
          props.history[props.history.length > 1 ? props.history.length - 2 : 0]
        );
        props.removeLastTab();
      } else {
        Actions.home();
      }
    }
  }, [buttonDisable]);
  useEffect(() => {
    setarr([]);
    if (props.individualChallengeHistory) {
      setarr(props.individualChallengeHistory);
    }
  }, [props.individualChallengeHistory, props.params]);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  console.log(arr);
  return (
    props.user && (
      <>
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Loader />

          <View style={styles.back}>
            <TouchableOpacity
              style={{ width: "100%", height: "100%" }}
              onPress={() => {
                AsyncStorage.getItem("s_c_r_e_e_n").then((a) => {
                  if (a === "home") {
                    Actions.home();
                  }
                  if (a === "team") {
                    if (
                      props.TeamChallenge.challengeStatus ===
                      "NOT_TEAM_CHALLENGE_ACTIVE"
                    ) {
                      Actions.previousChallenge();
                    }
                    if (
                      props.TeamChallenge.challengeStatus ===
                      "NOT_TEAM_CHALLENGE_ACTIVE_WITH_NOTIFICATION"
                    ) {
                      Actions.previousChallenge();
                    }
                    if (
                      props.TeamChallenge.challengeStatus ===
                      "TEAM_CHALLENGE_ACTIVE_IS_YOUR_TURN"
                    ) {
                      Actions.teamChallenge();
                    }
                    if (
                      props.TeamChallenge.challengeStatus ===
                      "TEAM_CHALLENGE_ACTIVE_WAIT_YOUR_TURN"
                    ) {
                      Actions.nextChallenge();
                    }
                  }
                  if (a === "badge") {
                    Actions.challenge();
                  }
                  if (a === "stats") {
                    Actions.thirdPage();
                  }
                  if (a === "ranks") {
                    Actions.lastTab();
                  }
                  if (a === "_teamChallenge") {
                    Actions.teamChallenge();
                  }
                  if (a === "_nextChallenge") {
                    Actions.nextChallenge();
                  }
                  if (a === "_teamProgress") {
                    Actions.teamProgress();
                  }
                  if (a === "_previousChallenge") {
                    Actions.previousChallenge();
                  }
                });
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                source={require("../../allpngandsvg/back.png")}
              />
            </TouchableOpacity>
          </View>
          <MyText style={styles.heading}>{lang[`{challengehistory}`]}</MyText>
          <View style={styles.secondDiv}>
            <View style={styles.secondDivInside}>
              <Image
                style={styles.robo}
                source={require("../../allpngandsvg/Objetointeligentevectorialfaceright.png")}
              />
              <MyText style={styles.roboText}>
                {lang[`{previouschallenges}`]}
              </MyText>
            </View>
            <View style={styles.tableMainDiv}>
              {arr &&
                arr.map((a, i) => {
                  console.log(a, "dsakjdasj");
                  return (
                    <View key={i} style={styles.tr}>
                      <View style={styles.imagetd}>
                        <Image
                          source={{ uri: a.opponentImageUrl }}
                          style={styles.image}
                        />
                      </View>
                      <View styles={styles.centerTd}>
                        <MyText style={styles.name}>
                          {breakStrng(a.challengeName, lang)}
                        </MyText>
                        <MyText style={styles.besideName}>
                          {breakStrng(a.datetime, lang)}
                        </MyText>
                      </View>
                      <View style={styles.ratioMain}>
                        <MyText style={styles.ratio}>
                          {a.score}{" "}
                          <MyText
                            style={{
                              fontWeight: "bold",
                              color:
                                a.status === "{won}"
                                  ? "green"
                                  : a.status === "{lost}"
                                  ? "red"
                                  : "black",
                            }}
                          >
                            {lang[a.status]}
                          </MyText>
                        </MyText>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        </ScrollView>
      </>
    )
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  individualChallengeHistory: store.individual_challenge_history,
  history: store.history,
  TeamChallenge: store.TeamChallenge,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      individual_challenge_history,
      removeLastTab,
      Get_advertisement,
      settingIndividualChallengeHistorynewobj,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNestedTwo);
