import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity as TouchableOpacity1,
  View,
} from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";
import Loader from "../../component/Loader";
import {
  challengeSuggestions,
  getUserDataApi,
  yourTurnOpponentTurn,
} from "../../redux/actions";
import { AfterVsPageStyles } from "./AfterVsPageStyles";
import Animated, { Easing } from "react-native-reanimated";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const { Value, timing } = Animated;
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function AfterVsPage(props) {
  const screenData = useScreenDimensions();

  let [fromTop, setFromTop] = useState(
    new Value(-(Dimensions.get("window").height / 2))
  );
  let [fromBottom, setFromBottom] = useState(
    new Value(-(Dimensions.get("window").height / 2))
  );
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
    fromTopAnimate();
    fromBottomAnimate();
  }, []);

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

  const styles = AfterVsPageStyles();

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let roundObj = props.roundObj.challenge;
  let oppenentName = "";
  if (props.user) {
    oppenentName =
      roundObj.usertwo.iduser === props.user.iduser
        ? roundObj.userone.shortName
        : roundObj.usertwo.shortName;
  }
  return props.user && roundObj ? (
    <ScrollView style={styles.container}>
      <Loader />

      <Animated.View style={{ top: fromTop, opacity: faid }}>
        <ImageBackground
          source={require("../../allpngandsvg/background_dark_small.png")}
          style={styles.topDiv}
        >
          <View style={styles.topHead}>
            <Image
              style={styles.topHeadImg}
              source={{ uri: props.user.imageurl }}
            />
            <MyText style={styles.topHeadText}>
              {props.user.shortName.length > 10
                ? `${props.user.shortName.slice(0, 10)}...`
                : props.user.shortName}
              {` vs `}
              {oppenentName.length > 10
                ? `${oppenentName.slice(0, 10)}...`
                : oppenentName}
            </MyText>
          </View>
          <MyText style={styles.topHeadText2}>{lang[`{waityourturn}`]}</MyText>
          <View style={styles.afterRobot}>
            <Image
              source={require("../../allpngandsvg/Objetointeligentevectorialleft.png")}
              style={styles.topRobot}
            />
            <View style={styles.robotText}>
              <MyText style={styles.robotTextFont}>
                {
                  props.roundObj.roundResultsCurrentUser.find(
                    (a) => a.result === `{roundscore}`
                  ).value
                }{" "}
                <MyText style={{ color: "#36f3e3" }}>pts</MyText>
              </MyText>
              <MyText style={styles.robotTextFont}>
                {lang[`{round}`]}{" "}
                <MyText style={{ color: "#36f3e3" }}>
                  {props.roundObj.currentRound}/{roundObj.rounds}
                </MyText>
              </MyText>
            </View>
          </View>
        </ImageBackground>
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
          </View>
        </View>
        <View style={styles.lastListMain}>
          <View style={styles.lastList}>
            <View style={styles.indivisualMain}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1}>{lang[`{challengescore}`]}</MyText>
                <MyText style={styles.text12}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{challengescore}`
                    ).value
                  }{" "}
                  pts
                </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1}>{lang[`{scoreround}`]}</MyText>
                <MyText style={styles.text12}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{roundscore}`
                    ).value
                  }{" "}
                  pts
                </MyText>
              </View>
            </View>

            <View style={styles.indivisualMainActive}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1Active}>{lang[`{correct}`]}</MyText>
                <MyText style={styles.text1Active2}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{correct}`
                    ).value
                  }
                </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1Active}>{lang[`{time}`]}</MyText>
                <MyText style={styles.text1Active2}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{time}`
                    ).value
                  }{" "}
                  seg
                </MyText>
              </View>
            </View>

            <View style={styles.indivisualMain}>
              <View style={styles.indivisual1}>
                <MyText style={styles.text1}>{lang[`{wrong}`]}</MyText>
                <MyText style={styles.text12}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{wrong}`
                    ).value
                  }
                </MyText>
              </View>
              <View style={styles.indivisual}>
                <MyText style={styles.text1}>{lang[`{roundswon}`]}</MyText>
                <MyText style={styles.text12}>
                  {
                    props.roundObj.roundResultsCurrentUser.find(
                      (a) => a.result === `{roundswon}`
                    ).value
                  }
                </MyText>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                Actions.home();
                props.yourTurnOpponentTurn();
                props.challengeSuggestions();
                props.getUserDataApi();
                setFromTop(new Value(-(Dimensions.get("window").height / 2)));
                setFromBottom(
                  new Value(-(Dimensions.get("window").height / 2))
                );
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
  roundObj: store.roundObj,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      challengeSuggestions,
      yourTurnOpponentTurn,
      getUserDataApi,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AfterVsPage);
