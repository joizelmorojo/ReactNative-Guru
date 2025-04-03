import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import MyText from "../../component/MyText/MyText";
import { endRound } from "../../modules/actions";
import { ChallengeQuestionStyles } from "./ChallengeQuestionStyle";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import WebView from "react-native-webview";
import Loader from "../../Loader";
import Animated, { Easing } from "react-native-reanimated";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import StatusConfirmationModal from "../../component/StatusConfirmationModal";
const TouchableOpacity1 = withPreventDoubleClick(TouchableOpacity);

const { Value, timing } = Animated;

function ChallengeQuestionPage(props) {
  let [toCenter, setToCenter] = useState(
    new Value(
      -(Dimensions.get("window").width + Dimensions.get("window").width)
    )
  );
  let [toCenterFromBottom, setToCenterFromBottom] = useState(
    new Value(Dimensions.get("window").height / 3)
  );
  let [toCenterFromBottom2, setToCenterFromBottom2] = useState(
    new Value(-(Dimensions.get("window").height + 50))
  );
  let [toCenterFromBottom3, setToCenterFromBottom3] = useState(
    new Value(-(Dimensions.get("window").height + 50))
  );
  let [toCenterFromRight] = useState(
    new Value(
      -(Dimensions.get("window").width + Dimensions.get("window").width)
    )
  );
  let [_transX] = useState(new Value(0));

  const screenData = useScreenDimensions();
  const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
  const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);

  const [maxTime, setMaxTime] = useState(0);
  const [stop, setStop] = useState(false);

  const [answer, setAnswer] = useState(false);
  const [disable, setDisable] = useState(false);
  const [ShowFab, setShowFab] = useState(true);
  const [answerTime, setAnswerTime] = useState(0);
  const [state, setState] = useState({});
  const [answerIndex, setAnswerIndex] = useState(false);
  const [points, setPoints] = useState(false);
  const [index, setIndex] = useState(0);
  const [AnswerDivHeight, setAnswerDivHeight] = useState(false)
  const [answers, setAnswers] = useState([]);
  const [label, setLabel] = useState("");

  const correct = useRef();
  const incorrect = useRef();

  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  useEffect(() => {
    let maxTime = props.challengeObj.challengeParameters[1].value;
    setMaxTime(maxTime);
    setStop(false);
    setShowFab(true);
    setAnswer(false);
    setDisable(false);
    setAnswerTime(0);
    setState({});
    setAnswerIndex(false);
    setPoints(false);
    setIndex(0);
    setAnswers([]);
  }, [props]);

  useEffect(() => {
    setTimeout(() => {
      if (maxTime > 0 && !stop) {
        let maxTimee = maxTime - 0.1;
        setMaxTime(maxTimee.toFixed(1));
      }
    }, 100);
  }, [maxTime, stop]);

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
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  function animation5() {
    timing(toCenterFromBottom2, {
      toValue: 0,
      duration: 800,
      easing: Easing.bounce,
    }).start();
  }

  function animation6() {
    timing(toCenterFromBottom3, {
      toValue: 0,
      duration: 800,
      easing: Easing.bounce,
    }).start();
  }

  useEffect(() => {
    animation4();
    setTimeout(() => {
      animation2();
    }, 900);
  }, []);
  const [FabActive, setFabActive] = useState(false)
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
  const styles = ChallengeQuestionStyles();

  const checkAnswer = (obj, i) => {
    if (!stop) {

      setStop(true);
      setShowFab(false);
      let challengeParams = props.challengeObj.challengeParameters;
      let points = obj.iscorrect ? Number(challengeParams[0].value) : 0;
      let answerTimee =
        Number(props.challengeObj.challengeParameters[1].value) - maxTime;
      let arr = challengeParams.slice(2);
      let conditionArr = [];
      arr.map((a) => {
        var r = /\d+/g;
        var s = a.name;
        var m;
        let objj = { param: "" };
        while ((m = r.exec(s)) != null) {
          objj.param += `_${m[0]}`;
        }
        conditionArr.push(objj);
      });
      if (obj.iscorrect) {
        setLabel(questions[index].correctanswer);

        correct.current.injectJavaScript(
          'document.getElementById("audio").play();'
        );

        arr.map((a, i) => {
          let condition1 = conditionArr[i].param.split("_").slice(1)[0];
          let condition2 = conditionArr[i].param.split("_").slice(1)[1];
          if (
            answerTimee > Number(condition1) &&
            answerTimee <= Number(condition2)
          ) {
            points += Number(a.value);
          }
        });
      } else {
        setLabel(questions[index].wronganswer);
        incorrect.current.injectJavaScript(
          'document.getElementById("audio2").play();'
        );
      }

      setAnswer(obj.iscorrect ? "right" : "wrong");
      setDisable(true);
      setAnswerTime(answerTimee.toFixed(1));
      setState({ ...state, [`answer${i}`]: true });
      setAnswerIndex(i);
      setPoints(points);
      let answerss = {
        idanswer: obj.idanswer,
        points: points,
        timeseconds: Number(answerTimee.toFixed(1)),
        timestamp: new Date().getTime(),
      };
      setAnswers([...answers, answerss]);
      if (obj.iscorrect) {
        animation6();
      } else {
        animation5();
      }
    }

  };

  const next = (index, questions, obj) => {
    setToCenterFromBottom2(new Value(-(Dimensions.get("window").height + 50)));
    setToCenterFromBottom3(new Value(-(Dimensions.get("window").height + 50)));

    let indexx = index + 1;
    if (indexx < questions.length) {
      setDisable(false);
      setStop(false);
      setShowFab(true);
      setMaxTime(props.challengeObj.challengeParameters[1].value);
      setIndex(indexx);
      setAnswer("");
      setAnswerTime(0);
      let statee = state;
      statee[`answer${answerIndex}`] = false;
      setState(statee);
    } else {
      let data = {
        answers: answers,
        idindividualchallenge: obj.challenge.idindividualchallenge,
      };
      props.endRound(data);
    }
  };

  function title(title) {
    let start = title.indexOf("<code>");
    let end = title.indexOf("</code>");

    return title.slice(start + 6, end);
  }

  function titleMsg(title) {
    let start = title.indexOf("<code>");
    let end = title.indexOf("</code>");

    return title.slice(0, start);
  }

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let oppenentName = "";
  let questions = props.challengeObj.questions;
  if (props.user) {
    oppenentName =
      props.challengeObj.challenge.usertwo.iduser === props.user.iduser
        ? props.challengeObj.challenge.userone.shortName
        : props.challengeObj.challenge.usertwo.shortName;
  }
  return (
    props.challengeObj &&
    questions &&
    props.user && (
      <>
        <Loader />
        {FabActive ? <ImageBackground source={require('../../allpngandsvg/backgroundpurplewide.png')} blurRadius={10} style={{
          height: windowHeight,
          width: windowWidth,
          position: "absolute",
          zIndex: 99
        }} >
          <TouchableWithoutFeedback style={{ height: "100%", width: "100%" }} onPress={() => {
            setFabActive(false)
            setStop(false)
          }}></TouchableWithoutFeedback>
        </ImageBackground> : null}
        <ScrollView style={styles.container}>
          <View
            style={{
              minHeight: windowHeight,
              paddingBottom: 20,
            }}
          >
            <Animated.View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                marginTop: toCenterFromBottom,
              }}
            >
              <Image
                source={{ uri: props.user.imageurl }}
                style={styles.WomanImage}
              />
              <MyText style={styles.WomanImageText}>
                {lang[`{challengevs}`]} {oppenentName}
              </MyText>
            </Animated.View>
            <View style={styles.counter}>
              <MyText>{maxTime}</MyText>
            </View>
            <View style={styles.QuestionMaindiv}>
              <View>
                {questions[index].requireimage ? (
                  <Image
                    style={{ ...styles.questionImage, resizeMode: "contain" }}
                    source={{ uri: questions[index].imageurl }}
                  />
                ) :
                  questions[index].title.match("<code>") ? (
                    <>
                      <MyText style={styles.codeQuestion}>
                        {titleMsg(questions[index].title)}
                      </MyText>
                      <SyntaxHighlighter
                        style={docco}
                        wrapLines={true}
                        language="jsx"
                        lineStyle={lineNumber => {
                          console.log(lineNumber)
                          return { paddingRight: 20 };
                        }}
                        customStyle={{ marignHorizontal: 0, marginVertical: 10, }}
                      >
                        {title(questions[index].title)}
                      </SyntaxHighlighter>
                    </>
                  ) : (
                      <MyText style={styles.Question}>
                        {questions[index].title}
                      </MyText>
                    )
                }
              </View>
            </View>

            <Animated.View
              style={{
                ...styles.listMainDiv,
                marginLeft: toCenter,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                }}
              >
                {questions[index].answers.map((a, i) => {
                  return (
                    <View key={i}>
                      <TouchableOpacity
                        onPress={() => (disable ? null : checkAnswer(a, i))}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <MyText style={styles.list}>{a.text}</MyText>
                        {state[`answer${i}`] && (
                          <View style={styles.greenCircle}>
                            <MyText
                              style={{
                                fontSize: heightWidthFn(37).deviceHeight,
                              }}
                            >
                              {answerTime}
                            </MyText>
                          </View>
                        )}
                      </TouchableOpacity>
                      <MyText style={styles.listHr}></MyText>
                    </View>
                  );
                })}
              </View>
            </Animated.View>
            <View style={{ height: heightWidthFn(500).deviceHeight, width: "100%" }}></View>
          </View>
        </ScrollView>
        <StatusConfirmationModal ShowFab={ShowFab} AnswerDivHeight={AnswerDivHeight} idquestion={questions[index].idquestion} setFabActive={setFabActive} FabActive={FabActive} setStop={setStop} stop={stop} />
        <Animated.View
          style={{
            ...styles.bottomGreenContainer,
            bottom: toCenterFromBottom3,
          }}
          onLayout={(ev) => setAnswerDivHeight(ev.nativeEvent.layout.height)}
        >
          <View style={styles.smallWhiteDiv}>
            <MyText style={styles.smallWhiteDivText}>+{points} pts</MyText>
          </View>
          <TouchableOpacity1
            style={styles.mainDiv}
            onPress={() => next(index, questions, props.challengeObj)}
          >
            <View>
              <MyText style={styles.MainDivText}>
                {lang[`{rightkeepitup}`]}
              </MyText>
              <MyText
                style={{
                  fontSize: heightWidthFn(40).deviceHeight,
                  color: "white",
                  width: heightWidthFn(700).devicewidth,
                  overflow: "hidden",
                }}
              >
                {label}
              </MyText>
            </View>
            <View style={{
              marginRight: heightWidthFn(120).devicewidth,
            }}>
              <Image
                style={styles.RoboImageLeft}
                source={require("../../allpngandsvg/Objetointeligentevectorialleft.png")}
              />
              <MyText
                style={{
                  fontSize: heightWidthFn(50).deviceHeight,
                  color: "white",
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                {lang[`{next}`]}
              </MyText>
            </View>
          </TouchableOpacity1>
        </Animated.View>
        <Animated.View
          style={{ ...styles.bottomRedContainer, bottom: toCenterFromBottom2 }}
          onLayout={(ev) => setAnswerDivHeight(ev.nativeEvent.layout.height)}
        >
          <View style={styles.smallWhiteDiv}>
            <MyText style={styles.smallWhiteDivText}>{points} pts</MyText>
          </View>
          <TouchableOpacity1
            onPress={() => next(index, questions, props.challengeObj)}
            style={styles.mainDiv}
          >
            <View >
              <MyText style={styles.MainDivText}>{lang[`{incorrect}`]}</MyText>
              <MyText
                style={{
                  fontSize: heightWidthFn(40).deviceHeight,
                  color: "white",
                  width: heightWidthFn(700).devicewidth,
                  overflow: "hidden",
                }}
              >
                {label}
              </MyText>
            </View>
            <View style={{
              marginRight: heightWidthFn(120).devicewidth,
            }}>
              <Image
                style={styles.RoboImageLeft}
                source={require("../../allpngandsvg/Objeto_inteligente_vectorial_front_up.png")}
              />
              <MyText
                style={{
                  fontSize: heightWidthFn(50).deviceHeight,
                  color: "white",
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                {lang[`{next}`]}
              </MyText>
            </View>
          </TouchableOpacity1>
        </Animated.View>
        <WebView
          ref={correct}
          originWhitelist={["*"]}
          mediaPlaybackRequiresUserAction={false}
          useWebKit={true}
          source={{
            html: `<audio id="audio"> <source 
             src="https://firebasestorage.googleapis.com/v0/b/find-and-auction-here.appspot.com/o/correct-sound.mp3?alt=media&token=9cddeb52-9dae-41d5-bce2-c6ce8e4734cf" 
             type="audio/mp3" /> </audio>`,
          }}
        />
        <WebView
          ref={incorrect}
          originWhitelist={["*"]}
          mediaPlaybackRequiresUserAction={false}
          useWebKit={true}
          source={{
            html: `<audio id="audio2"> <source 
             src="https://firebasestorage.googleapis.com/v0/b/find-and-auction-here.appspot.com/o/incorrect-sound.mp3?alt=media&token=766d1c5a-ba8a-44b7-bd70-3701dc8b8778" 
             type="audio/mp3" /> </audio>`,
          }}
        />
      </>
    )
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  challengeObj: store.randomChallengeObj,
  incidentData: store.incidentData
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      endRound,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeQuestionPage);
