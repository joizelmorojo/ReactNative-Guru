import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity as TouchableOpacity1,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import MyText from "../../component/MyText/MyText";
import { VSpageStyles } from "./VSpageStyles";
import {
  challengeSuggestions,
  getUserDataApi,
  nextRound,
  startIndivisualChallenge,
  yourTurnOpponentTurn,
} from "../../modules/actions";
import Loader from "../../Loader";
import Animated, { Easing } from "react-native-reanimated";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const { Value, timing } = Animated;
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function VSpage(props) {
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

  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  const styles = VSpageStyles();

  let [fromTop, setFromTop] = useState(new Value(-(Dimensions.get("window").height / 2)));
  let [fromBottom, setFromBottom] = useState(new Value(-(Dimensions.get("window").height / 2)));
  let [faid, setFaid] = useState(new Value(0));

  function fromTopAnimate() {
    timing(fromTop, {
      toValue: 0,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  function fromBottomAnimate() {
    timing(fromBottom, {
      toValue: 0,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  useEffect(() => {
    timing(faid, {
      toValue: 1,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
    fromTopAnimate()
    fromBottomAnimate()
  }, [])

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let oppenentName = "";
  let oppenentImage = "";
  if (props.user) {
    oppenentName =
      props.roundObj.challenge.usertwo.iduser === props.user.iduser
        ? props.roundObj.challenge.userone.shortName
        : props.roundObj.challenge.usertwo.shortName;
    oppenentImage =
      props.roundObj.challenge.usertwo.iduser === props.user.iduser
        ? props.roundObj.challenge.userone.imageurl
        : props.roundObj.challenge.usertwo.imageurl;
  }
  let currentResult = props.roundObj.roundResultsCurrentUser;
  let opponentResult = props.roundObj.roundResultsOpponent;
  let message = props.roundObj.message;
  console.log(message);
  return props.user ? (
    <ScrollView style={styles.container}>
      <Loader />


      <Animated.View style={{ ...styles.topDiv, top: fromTop, opacity: faid }}>
        <View style={styles.topHead}>
          <Image
            style={styles.topHeadImg}
            source={{ uri: props.user.imageurl }}
          />
          <MyText style={styles.topHeadText}>
            {lang[`{challenge}`]} vs {oppenentName}
          </MyText>
        </View>
        <MyText style={styles.topHeadText2}>{lang[message]}</MyText>
        <Image
          source={require("../../allpngandsvg/Objetointeligentevectorialwholeraisehand.png")}
          style={styles.topRobot}
        />
      </Animated.View>

      <Animated.View style={{ bottom: fromBottom, opacity: faid }}>
        <View style={styles.VSDiv}>
          <View style={styles.vsDivInside}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.vsImage}
                source={{ uri: props.user.imageurl }}
              />
              <MyText style={styles.besideVs}>Tu</MyText>
            </View>
            <View style={{ alignItems: "center" }}>
              <MyText style={styles.vs}>VS</MyText>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.vsImage} source={{ uri: oppenentImage }} />
              <MyText style={styles.besideVs}>{oppenentName}</MyText>
            </View>
          </View>
        </View>
        <View style={styles.lastListMain}>
          <View style={styles.lastList}>
            <View style={styles.indivisualMain}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1}>
                  {
                    currentResult.find((a) => a.result === `{challengescore}`)
                      .value
                  }{" "}
                pts
              </MyText>
                <MyText style={styles.text1}>{lang[`{challengescore}`]}</MyText>
                <MyText style={styles.text1}>
                  {opponentResult &&
                    opponentResult.find((a) => a.result === `{challengescore}`)
                      .value}{" "}
                pts
              </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1}>
                  {currentResult.find((a) => a.result === `{roundscore}`).value}{" "}
                pts
              </MyText>
                <MyText style={styles.text1}>{lang[`{roundscore}`]}</MyText>
                <MyText style={styles.text1}>
                  {opponentResult &&
                    opponentResult.find((a) => a.result === `{roundscore}`)
                      .value}{" "}
                pts
              </MyText>
              </View>
            </View>

            <View style={styles.indivisualMainActive}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1Active}>
                  {currentResult.find((a) => a.result === `{correct}`).value}
                </MyText>
                <MyText style={styles.text1Active}>{lang[`{correct}`]}</MyText>
                <MyText style={styles.text1Active}>
                  {opponentResult &&
                    opponentResult.find((a) => a.result === `{correct}`).value}
                </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1Active}>
                  {currentResult.find((a) => a.result === `{time}`).value} seg
              </MyText>
                <MyText style={styles.text1Active}>{lang[`{time}`]}</MyText>
                <MyText style={styles.text1Active}>
                  {opponentResult &&
                    opponentResult.find((a) => a.result === `{time}`).value}{" "}
                seg
              </MyText>
              </View>
            </View>

            <View style={styles.indivisualMain}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1}>
                  {currentResult.find((a) => a.result === `{wrong}`).value}
                </MyText>
                <MyText style={styles.text1}>{lang[`{wrong}`]}</MyText>
                <MyText style={styles.text1}>
                  {opponentResult &&
                    opponentResult.find((a) => a.result === `{wrong}`).value}
                </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1}>{lang[`{roundplayed}`]}</MyText>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (message === "{youwonchallenge}") {
                  Actions.home();
                  props.yourTurnOpponentTurn();
                  props.challengeSuggestions()
                  props.getUserDataApi();
                } else if (message === "{youlostchallenge}") {
                  Actions.home();
                  props.yourTurnOpponentTurn();
                  props.challengeSuggestions()
                  props.getUserDataApi();
                } else if (message === "{youtiedchallenge}") {
                  Actions.home();
                  props.yourTurnOpponentTurn();
                  props.challengeSuggestions()
                  props.getUserDataApi();
                } else {
                  props.nextRound(
                    props.roundObj.challenge.idindividualchallenge,
                    "gotoQuestion"
                  );
                }
              }}
              style={styles.okButton}
            >
              <MyText>{lang[`{ok}`]}</MyText>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  ) : (
      <Loader />
    );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  challengeObj: store.randomChallengeObj,
  roundObj: store.roundObj,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startIndivisualChallenge,
      nextRound,
      yourTurnOpponentTurn,
      challengeSuggestions,
      getUserDataApi,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VSpage);
