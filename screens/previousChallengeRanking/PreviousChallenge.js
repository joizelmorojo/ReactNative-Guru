import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";
import { PreviousChallengeStyle } from "./PreviousChallengeStyle";
import ModalComponent from "../../component/Modal/modal";
import { breakStrng, Get_advertisement, TeamChallengeApi } from "../../redux/actions";


function PreviousChallenge(props) {
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
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.TeamChallengeApi();
    props.Get_advertisement()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const styles = PreviousChallengeStyle();
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let { TeamChallenge } = props;
  return (
    <>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.threeDots}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%" }}
            onPress={(ev) => props.openDrawer(ev)}
          >
            <Image
              style={{ width: "100%", resizeMode: "contain" }}
              source={require("../../allpngandsvg/threeDots.png")}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={require("../../allpngandsvg/backgroundpurplewide.png")}
          style={styles.TeamChallengeHeader}
          imageStyle={{
            height: "100%",
          }}
        >
          <View
            style={{
              width: heightWidthFn(1100).devicewidth,
              marginTop: heightWidthFn(125).deviceHeight,
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
                      TeamChallenge &&
                      TeamChallenge.user &&
                      TeamChallenge.user.imageurl,
                  }}
                />
              </View>
              <View style={{ backgroundColor: "transparent", zIndex: 2 }}>
                <MyText style={{ ...styles.BottomTitle, ...styles.blueText }}>
                  {lang[`{teamchallenge}`]}
                </MyText>
                <MyText style={styles.Title}>
                  <NumberFormat
                    value={
                      TeamChallenge &&
                      TeamChallenge.user &&
                      TeamChallenge.user.points
                    }
                    displayType={"text"}
                    renderText={(formattedValue) => (
                      <Text>
                        {TeamChallenge &&
                          TeamChallenge.user &&
                          TeamChallenge.user.shortName}{" "}
                        {formattedValue} {lang["{pts}"]}
                      </Text>
                    )}
                    thousandSeparator={true}
                  />
                </MyText>
                <MyText
                  style={{
                    color: "#f37521",
                    fontSize: heightWidthFn(45).deviceHeight,
                    marginTop: heightWidthFn(30).deviceHeight,
                  }}
                >
                  {TeamChallenge && TeamChallenge.areaName}{" "}
                  {TeamChallenge && TeamChallenge.teamName}
                </MyText>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.SubBody}>
          <View style={styles.answerView}>
            <View style={styles.answerViewContainer}>
              <MyText style={{ fontWeight: "bold" }}>
                {lang[`{nextchallenge}`]}
              </MyText>
              <MyText>{lang[`{willhaveopportunity}`]} </MyText>
            </View>
            <View>
              <Image
                style={{
                  width: heightWidthFn(200).devicewidth,
                  height: heightWidthFn(280).deviceHeight,
                  zIndex: 10,
                  resizeMode: "contain",
                }}
                source={require("../../allpngandsvg/Roboraisehand.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.ChallengeRanking}>
          <MyText
            style={{
              fontWeight: "bold",
              width: "75%",
              fontSize: heightWidthFn(45).deviceHeight,
            }}
          >
            {lang[`{previouschallenges}`]}
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
              props.TeamChallenge.lastChallengeRanking &&
              props.TeamChallenge.lastChallengeRanking.map((value, i) => (
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
              height: heightWidthFn(380).deviceHeight,
            }}
          ></View>
        </ImageBackground>
        {TeamChallenge &&
          props.TeamChallenge.challengeStatus ===
            "NOT_TEAM_CHALLENGE_ACTIVE_WITH_NOTIFICATION" && (
            <ModalComponent
              madel={
                TeamChallenge &&
                props.TeamChallenge.challengeStatus ===
                  "NOT_TEAM_CHALLENGE_ACTIVE_WITH_NOTIFICATION"
                  ? true
                  : false
              }
            />
          )}
      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  TeamChallenge: store.TeamChallenge,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      TeamChallengeApi,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PreviousChallenge);
