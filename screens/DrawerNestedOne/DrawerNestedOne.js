import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import CustomFooter from "../../component/footer/footer";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import MyText from "../../component/MyText/MyText";
import { removeLastTab } from "../../redux/actions";
import { DrawerNestedOneStyles } from "./DrawerNestedOneStyles";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function DrawerNestedOne(props) {
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
  const [buttonDisable, setbuttonDisable] = useState(false);

  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  const styles = DrawerNestedOneStyles();

  useEffect(() => {
    if (buttonDisable) {
      if (props.history.length) {
        Actions[
          props.history[props.history.length > 1 ? props.history.length - 2 : 0]
        ]();
        props.removeLastTab();
      } else {
        Actions.home();
      }
    }
  }, [buttonDisable]);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  console.log(props.strengthAndWeakness);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%" }}
            onPress={() => {
              AsyncStorage.getItem("s_c_r_e_e_n").then((a) => {
                if (a === "home") {
                  console.log(a, "hjdgshgh");
                  Actions.home();
                }
                if (a === "team") {
                  if (props.TeamChallenge.challengeStatus === "NOT_TEAM_CHALLENGE_ACTIVE") {

                    Actions.previousChallenge()
                  }
                  if (props.TeamChallenge.challengeStatus === "NOT_TEAM_CHALLENGE_ACTIVE_WITH_NOTIFICATION") {

                    Actions.previousChallenge()
                  }
                  if (props.TeamChallenge.challengeStatus === "TEAM_CHALLENGE_ACTIVE_IS_YOUR_TURN") {

                    Actions.teamChallenge()
                  }
                  if (props.TeamChallenge.challengeStatus === "TEAM_CHALLENGE_ACTIVE_WAIT_YOUR_TURN") {

                    Actions.nextChallenge()
                  }
                }
                if (a === "badge") {
                  console.log(a, "bbbbb");
                  Actions.challenge();
                }
                if (a === "stats") {
                  console.log(a, "cccc");
                  Actions.thirdPage();
                }
                if (a === "ranks") {
                  console.log(a, "hjdgshgh");
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
        <MyText style={styles.heading}>{lang[`{strengthsweaknesses}`]}</MyText>
        <View style={styles.secondDiv}>
          <View style={styles.secondDivInside}>
            <Image
              style={styles.robo}
              source={require("../../allpngandsvg/Objetointeligentevectorialwholeatease.png")}
            />
            <MyText style={styles.roboText}>
              {lang[`{identifyopportunity}`]}
            </MyText>
          </View>
          <View style={styles.tableMainDiv}>
            {props.strengthAndWeakness && props.strengthAndWeakness
              ? props.strengthAndWeakness.map((a, i) => {
                  return (
                    <View key={i} style={styles.tr}>
                      <View style={styles.tr1}>
                        <Image
                          style={{
                            width: "80%",
                            height: "80%",
                            resizeMode: "contain",
                          }}
                          source={{ uri: a.iconUrl }}
                        />
                      </View>
                      <View style={{ width: "100%" }}>
                        <View>
                          <MyText style={styles.trName}>{a.name}</MyText>
                        </View>
                        <View>
                          <MyText style={styles.trQues}>
                            {lang[`{questions}`]} {a.questions}
                          </MyText>
                        </View>
                        <View style={styles.rightLeft}>
                          <View style={styles.rightLeftMain}>
                            <MyText style={styles.trQues}>
                              <Image
                                style={styles.rightLeftImage}
                                source={require("../../allpngandsvg/noun_Check_1905028.png")}
                              />{" "}
                              {a.correctquestions}
                            </MyText>
                            <MyText style={styles.trQues}>
                              <Image
                                style={styles.rightLeftImage}
                                source={require("../../allpngandsvg/noun_Close_1891237.png")}
                              />{" "}
                              {a.wrongquestions}
                            </MyText>
                          </View>
                          <MyText style={styles.trName}>
                            {lang[`{precision}`]} {a.precision}
                          </MyText>
                        </View>
                      </View>
                    </View>
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
      {/* <CustomFooter /> */}
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  strengthAndWeakness: store.strengthAndWeakness,
  history: store.history,
  TeamChallenge: store.TeamChallenge
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeLastTab,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNestedOne);
