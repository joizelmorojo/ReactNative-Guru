import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import MyText from "../../component/MyText/MyText";
import { teamChallengeStyle } from "./teamChallengeStyle";
import Animated, { Easing } from "react-native-reanimated";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import {
  breakStrng,
  Get_advertisement,
  pushToHistory,
  TeamChallengeApi,
  TeamChallengeEndChallenge,
  TeamChallengeStartChallenge,
} from "../../redux/actions";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import NumberFormat from "react-number-format";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);
const { Value, timing } = Animated;
function TeamChallenge(props) {
  let _transX = new Value(0);
  const screenData = useScreenDimensions();
  const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
  const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);
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
  useEffect(() => {
    timing(_transX, {
      toValue: props.TeamChallenge
        ? (props.TeamChallenge.progress / 100) * heightWidthFn(1024).devicewidth
        : 0,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [props.TeamChallenge, screenData]);
  const [refreshing, setRefreshing] = useState(false);
  const styles = teamChallengeStyle();
  const drawer = useRef();
  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };
  const onRefresh = () => {
    setRefreshing(true);
    props.TeamChallengeApi();
    props.Get_advertisement()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let user = props.user;
  return (
    <>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ImageBackground
          source={require("../../allpngandsvg/transaprentBluebox.png")}
          style={styles.TeamChallengeHeader}
        >
          <View style={styles.threeDots}>
            <TouchableOpacity1
              style={{ width: "100%", height: "100%" }}
              onPress={(ev) => props.openDrawer(ev)}
            >
              <Image
                style={{ width: "100%", resizeMode: "contain" }}
                source={require("../../allpngandsvg/threeDots.png")}
              />
            </TouchableOpacity1>
          </View>
          <View
            style={{
              width: heightWidthFn(1100).devicewidth,
              marginTop: heightWidthFn(100).deviceHeight,
              marginBottom: heightWidthFn(25).deviceHeight,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View style={styles.imageView}>
                <Image
                  style={styles.imageCircle}
                  source={{
                    uri:
                      props.TeamChallenge &&
                      props.TeamChallenge.user &&
                      props.TeamChallenge.user.imageurl,
                  }}
                />
              </View>
              <View style={{ backgroundColor: "transparent", zIndex: 2 }}>
                <MyText style={styles.Title}>
                  {props.TeamChallenge &&
                    props.TeamChallenge.user &&
                    props.TeamChallenge.user.shortName}
                </MyText>
                <MyText style={styles.smallText}>
                  {props.TeamChallenge && props.TeamChallenge.areaName}{" "}
                  {props.TeamChallenge && props.TeamChallenge.teamName}
                </MyText>
                <MyText style={styles.smallText}>
                  <NumberFormat
                    value={
                      props.TeamChallenge &&
                      props.TeamChallenge.user &&
                      props.TeamChallenge.user.points
                    }
                    displayType={"text"}
                    renderText={(formattedValue) => (
                      <Text>
                        {formattedValue} {lang["{pts}"]}
                      </Text>
                    )}
                    thousandSeparator={true}
                  />
                </MyText>
                <TouchableOpacity onPress={() => props.openDrawer()}>
                  <MyText style={styles.smallText}>
                    {lang[`{myprofile}`]}
                  </MyText>
                </TouchableOpacity>
                <MyText style={styles.BottomTitle}>
                  {lang[`{teamchallenge}`]}
                </MyText>
              </View>
            </View>
            <View
              style={{
                width: heightWidthFn(950).devicewidth,
                height: heightWidthFn(500).deviceHeight,
                alignItems: "flex-end",
                justifyContent: "center",
                marginTop: -5,
                zIndex: 1,
              }}
            >
              <Image
                style={styles.FamilyImage}
                source={require("../../allpngandsvg/family.png")}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.SubBody}>
          <ImageBackground
            source={require("../../allpngandsvg/backgrounddarkbluewide.png")}
            resizeMode="cover"
            style={styles.progressViewBg}
          >
            <Animated.View
              style={[
                styles.progressView,
                {
                  width: _transX,
                },
              ]}
            />
            <View style={styles.progressTextView}>
              <MyText
                style={{
                  color: "white",
                  fontSize: heightWidthFn(105).deviceHeight,
                  fontWeight: "bold",
                }}
              >
                {lang[`{progress}`]}{" "}
                {props.TeamChallenge && props.TeamChallenge.progress}%
              </MyText>
            </View>
          </ImageBackground>
          <View style={styles.answerView}>
            <TouchableOpacity
              onPress={() => {
                props.TeamChallengeStartChallenge();
              }}
              style={styles.answerViewContainer}
            >
              <MyText style={styles.settingTextWidth}>
                {lang[`{whatareyouwaiting}`]}{" "}
                <MyText style={{ fontWeight: "bold" }}>
                  {breakStrng(
                    props.TeamChallenge && props.TeamChallenge.itsbeenlabel,
                    lang
                  )}
                </MyText>
              </MyText>
              <MyText style={styles.answerText}>{lang[`{answernow}`]}</MyText>
            </TouchableOpacity>
            <View>
              <Image
                style={{
                  width: heightWidthFn(260).devicewidth,
                  height: heightWidthFn(295).deviceHeight,
                  zIndex: 10,
                  resizeMode: "contain",
                }}
                source={require("../../allpngandsvg/robotWithSearch.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.ChallengeRanking}>
          <MyText
            style={{
              fontWeight: "bold",
              fontSize: heightWidthFn(45).deviceHeight,
            }}
          >
            {lang[`{challengeranking}`]}
          </MyText>
          <MyText
            style={{
              height: heightWidthFn(100).deviceHeight,
              width: heightWidthFn(100).devicewidth,
            }}
          >
            <Image
              style={{
                height: heightWidthFn(65).deviceHeight,
                width: heightWidthFn(72).devicewidth,
              }}
              source={require("../../allpngandsvg/chartIcon.png")}
            />
          </MyText>
        </View>
        <ImageBackground
          style={{
            width: "auto",
            height: "auto",
            padding: 20,
          }}
          source={require("../../allpngandsvg/backgrounddarkbluewide.png")}
        >
          <View style={styles.ListContainer}>
            {props.TeamChallenge &&
              props.TeamChallenge.currentChallengeRanking &&
              props.TeamChallenge.currentChallengeRanking.map((value, i) => (
                <View key={i}>
                  <View
                    style={{
                      marginVertical: 15,
                      width: "100%",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <MyText>
                        <ImageBackground
                          style={{
                            width: 12,
                            height: 23,
                          }}
                          source={require("../../allpngandsvg/Medal.png")}
                        />
                      </MyText>
                      <MyText style={{ color: "white", marginLeft: 5 }}>
                        {breakStrng(value.place, lang)} {value.teamName}
                      </MyText>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            width: screenData.isLandscape
                              ? "90%"
                              : heightWidthFn(850).devicewidth,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: "#2196F3",
                              height: 4,
                              width: `${value.progress}%`,
                            }}
                          ></View>
                          <View
                            style={{
                              backgroundColor: "white",
                              height: 4,
                              width: `${100 - Number(value.progress)}%`,
                            }}
                          ></View>
                        </View>
                        <MyText style={{ color: "#2196F3", marginLeft: 5 }}>
                          {value.progress}%
                        </MyText>
                      </View>
                    </View>
                  </View>
                  <Image
                    source={require("../../allpngandsvg/bottomline.png")}
                    style={{
                      width: heightWidthFn(840).devicewidth,
                      height: 2,
                      alignSelf: "center",
                    }}
                  />
                </View>
              ))}
          </View>
          <View
            style={{
              height: heightWidthFn(340).deviceHeight,
            }}
          ></View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  history: store.history,
  currentLanguage: store.currentLanguage,
  TeamChallenge: store.TeamChallenge,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pushToHistory,
      TeamChallengeStartChallenge,
      TeamChallengeApi,
      TeamChallengeEndChallenge,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TeamChallenge);
