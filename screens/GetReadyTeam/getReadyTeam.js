import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import WebView from "react-native-webview";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";
import { GetReadyStyles } from "./getReadyTeamStyle";
import ChallengeQuestion from "../ChallengeQuestion/ChallengeQuestion";
import { Audio } from "expo-av";
import Animated, { Easing } from "react-native-reanimated";

const { Value, timing } = Animated;

function GetReadyPageTeam(props) {
  let [toCenter] = useState(
    new Value(
      -(Dimensions.get("window").width + Dimensions.get("window").width)
    )
  );
  let [toCenterFromRight] = useState(
    new Value(
      -(Dimensions.get("window").width + Dimensions.get("window").width)
    )
  );
  let [toCenterFromBottom] = useState(
    new Value(Dimensions.get("window").height / 3)
  );
  let [_transX] = useState(new Value(0));

  const screenData = useScreenDimensions();
  const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
  const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);

  const webview = useRef();

  const [count, setCount] = useState(Platform.OS == "ios" ? 5 : 6);
  const [ChallengeQuestionn, setChallengeQuestionn] = useState("");
  const [sound, setSound] = useState(false);

  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  useEffect(() => {
    if (!props.param) {

    } else {
      setSound(true);
    }
    animation1();
    animation2();
    animation3();
    animation4();
  }, []);

  function animation2() {
    timing(toCenter, {
      toValue: 0,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  function animation1() {
    timing(_transX, {
      toValue: 1,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  function animation3() {
    timing(toCenterFromRight, {
      toValue: 0,
      duration: 1100,
      easing: Easing.linear,
    }).start();
  }

  function animation4() {
    timing(toCenterFromBottom, {
      toValue: 0,
      duration: 1300,
      easing: Easing.linear,
    }).start();
  }

  async function audioPlay() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../../mp3/countdown-5-seconds.mp3"));
      setTimeout(async () => {
        await soundObject.playAsync();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      if (Platform.OS == "ios") {
        if (count === 5) {
          setTimeout(() => {
            webview.current.injectJavaScript(
              'document.getElementById("audio").play();'
            );
          }, 1000);
        }
      }
      setTimeout(
        () => {
          if (count > 0) {
            let count2 = count - 1;
            setCount(count2);
            if (count === 1) {
              Actions.ChallengeQuestionTeam({ param: true });
              setSound(false);
            }
            if (count === 0) {
              webview.current.injectJavaScript(
                'document.getElementById("audio").pause();'
              );
            }
          }
        },
        Platform.OS === "ios" ? (count === 5 ? 4000 : 1000) : 1000
      );
    } catch (e) {
      console.log("There is no song playing", e);
    }
  }, [count]);

  useEffect(() => {
    audioPlay();
  }, []);

  const heightWidthFn = (value) => {
    let height = (value / pageHeight) * 100;
    let width = (value / pageWidth) * 100;
    let deviceHeight = (windowHeight * height) / 100;
    let devicewidth = (windowWidth * width) / 100;
    return {
      height,
      width,
      deviceHeight,
      devicewidth,
    };
  };
  const styles = GetReadyStyles();

  const ChallengeQuestionnFalse = () => {
    setChallengeQuestionn("");
  };

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";

  return props.challengeObj && props.user ? (
    <>
      {ChallengeQuestionn.length ? (
        <ChallengeQuestion ChallengeQuestionnFalse={ChallengeQuestionnFalse} />
      ) : (
        <ScrollView style={styles.container}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Animated.View
              style={[
                {
                  marginLeft: toCenter,
                },
              ]}
            >
              <MyText style={styles.getReadyText}>{lang[`{getready}`]}</MyText>
            </Animated.View>
            <Animated.View
              style={[
                {
                  opacity: _transX,
                },
              ]}
            >
              <ImageBackground
                style={styles.RoboImageContainer}
                imageStyle={styles.ShapeBackground}
                source={require("../../allpngandsvg/shapeBackground.png")}
              >
                <Animated.Image
                  style={[
                    styles.RoboWithRemote,
                    {
                      opacity: _transX,
                    },
                  ]}
                  source={require("../../allpngandsvg/RoboWithRemote.png")}
                />
                <Animated.Image
                  style={[
                    styles.shadowImage,
                    {
                      opacity: _transX,
                    },
                  ]}
                  source={require("../../allpngandsvg/Objeto_inteligente_vectorial_shade.png")}
                />
              </ImageBackground>
            </Animated.View>

            <Animated.View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "70%",
                marginRight: toCenterFromRight,
              }}
            >
            </Animated.View>

            <Animated.View
              style={{
                alignItems: "center",
                marginTop: toCenterFromBottom,
              }}
            >
              <View
                style={{
                  marginVertical: heightWidthFn(86).deviceHeight,
                }}
              >
                <MyText style={styles.challengeText}>
                  {lang[`{challengebegins}`]}
                </MyText>
              </View>
              <View style={styles.blueRoundDiv}>
                <MyText style={styles.blueRoundDivText}>{count}</MyText>
              </View>
            </Animated.View>
          </View>
          <WebView
            ref={webview}
            originWhitelist={["*"]}
            mediaPlaybackRequiresUserAction={false}
            useWebKit={true}
            source={{
              html: `<audio id="audio"> 
                         <source 
              src="https://firebasestorage.googleapis.com/v0/b/find-and-auction-here.appspot.com/o/countdown-5-seconds.mp3?alt=media&token=911b1025-afe3-4740-b3f6-65b521d6ac57"
              type="audio/mp3" /> </audio>`,
            }}
          />

        </ScrollView>
      )}
    </>
  ) : null;
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  challengeObj: store.randomChallengeObj,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetReadyPageTeam);
