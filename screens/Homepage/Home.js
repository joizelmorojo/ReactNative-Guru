import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity as TouchableOpacity1,
  View,
  RefreshControl,
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";

import {
  acceptChallenge,
  challengeSuggestions,
  getUserDataApi,
  breakStrng,
  individual_challenge_history,
  nextRound,
  startIndivisualChallenge,
  startRandomChallenge,
  yourTurnOpponentTurn,
  pushToHistory,
  getLanguage,
  TeamChallengeApi,
  getLeaderBoards,
  Badges_Api,
  Statistics_Api,
  StrengthAndWeakness,
  Area_Api,
  Get_advertisement,
  Get_IncidentTypes
} from "../../redux/actions";
import { HomeStyles } from "./HomeStyles";
import Loader from "../../component/Loader";
import { TouchableOpacity as TouchableOpacity2 } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import NumberFormat from "react-number-format";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);
const TouchableOpacityNew = withPreventDoubleClick(TouchableOpacity2);

function Home(props) {
  const _carousel = useRef();

  const screenData = useScreenDimensions();

  function getPercentWidth(val) {
    return (val / widthh) * 100;
  }

  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }
  const [noti, setnoti] = useState(false);
  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener((res) => {
      console.log(res)
      if (res.notification.request.content.data.data === "teamchallenge") {
        props.TeamChallengeApi()
      } else if (res.notification.request.content.data.data === "historychallenge") {
        Actions.drawerNestedTwo()
        props.individual_challenge_history()
      } else if (res.notification.request.content.data.data === "strengthweakness") {
        Actions.drawerNestedOne()
        props.StrengthAndWeakness()
      } else if (res.notification.request.content.data.data === "leaderboard") {
        Actions.lastTab()
        props.getLeaderBoards()
      } else if (res.notification.request.content.data.data === "badge") {
        Actions.challenge()
        props.Badges_Api()
      } else if (res.notification.request.content.data.data === "statistics") {
        Actions.thirdPage()
        props.Statistics_Api()
      } else {
        Actions.home()
        props.challengeSuggestions();
        props.yourTurnOpponentTurn();
        props.getUserDataApi();
      }
    });
  }, []);

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

  useEffect(() => {
    props.challengeSuggestions();
    props.yourTurnOpponentTurn();
    props.getUserDataApi();
    props.getLanguage();
    props.Area_Api()
    props.Get_IncidentTypes()
  }, []);

  const styles = HomeStyles();
  const [refreshing, setRefreshing] = useState(false);
  const [clickChallenge, setClickChallenge] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    props.challengeSuggestions();
    props.yourTurnOpponentTurn();
    props.getUserDataApi();
    props.getLanguage();
    props.Get_advertisement()
    props.Area_Api()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const randomChallenge = () => {
    setClickChallenge(true);
    props.startRandomChallenge();
  };

  const nextRoundd = (obj) => {
    props.nextRound(obj.idchallenge);
  };

  const acceptchallengee = (obj) => {
    props.acceptChallenge(obj.idchallenge);
  };
  const _renderItem = ({ item, index }) => {
    return index === 0 ? (
      <TouchableOpacity
        onPress={() =>
          props.startIndivisualChallenge(item.iduser)
        }
        style={{
          width: (windowWidth * getPercentWidth(660)) / 100,
        }}
      >
        <ImageBackground
          imageStyle={{ width: (windowWidth * getPercentWidth(660)) / 100 }}
          style={styles.sliderImage}
          source={require("../../allpngandsvg/purpleboxbg.png")}
        >
          <View style={styles.titleMain}>
            <MyText style={styles.title}>
              {item.shortName}
            </MyText>
            <MyText style={styles.besideSub}>{lang[`{challenge}`]}</MyText>
          </View>
          <Image
            style={styles.profileImageShort}
            source={{ uri: item.imageurl }}
          />
        </ImageBackground>
      </TouchableOpacity>
    ) : (
        <TouchableOpacity
          onPress={() => props.startIndivisualChallenge(item.iduser)}
          style={{
            width: (windowWidth * getPercentWidth(660)) / 100,
          }}
        >
          <ImageBackground
            style={styles.sliderImage}
            imageStyle={{ width: (windowWidth * getPercentWidth(660)) / 100 }}
            source={require("../../allpngandsvg/orangeboxbg.png")}
          >
            <View style={styles.titleMain}>
              <MyText style={styles.title}>
                {item.shortName}
              </MyText>
              <MyText style={styles.besideSub}>{lang[`{challenge}`]}</MyText>
            </View>
            <Image
              style={styles.profileImageShort}
              source={{ uri: item.imageurl }}
            />
          </ImageBackground>
        </TouchableOpacity>
      );
  };
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let user = props.user;
  let opponentTurn = props.yourTurnOpponentTurnObj
    ? props.yourTurnOpponentTurnObj.opponentsturns
    : [];
  let newChallenges = props.yourTurnOpponentTurnObj
    ? props.yourTurnOpponentTurnObj.yourturnsnewchallenges
      ? props.yourTurnOpponentTurnObj.yourturnsnewchallenges
      : []
    : [];
  let nextRoundArr = props.yourTurnOpponentTurnObj
    ? props.yourTurnOpponentTurnObj.yourturns
      ? props.yourTurnOpponentTurnObj.yourturns
      : []
    : [];
  let yourTurn =
    newChallenges.length && !nextRoundArr.length
      ? [...newChallenges]
      : nextRoundArr.length && !newChallenges.length
        ? [...nextRoundArr]
        : newChallenges.length && nextRoundArr.length
          ? [...newChallenges, ...nextRoundArr]
          : [];
  return (
    <>
      <Loader />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
        <ImageBackground
          source={require("../../allpngandsvg/backgroundpurplewide2.png")}
          style={styles.image}
        >
          {user && (
            <MyText style={styles.topText}>
              <NumberFormat
                value={user.points}
                displayType={"text"}
                renderText={(formattedValue) => (
                  <Text>
                    {formattedValue} {lang["{points}"]}
                  </Text>
                )}
                thousandSeparator={true}
              />
            </MyText>
          )}
          <View style={styles.profileDiv}>
            <View style={styles.profileDivInside}>
              <View style={styles.besideCircles}>
                <TouchableOpacityNew
                  onPress={() => {
                    //props.pushToHistory("searchPage");
                    AsyncStorage.setItem("s_c_r_e_e_n", "home");
                    Actions.searchPage();
                  }}
                  style={styles.smallCircle1}
                >
                  <Image
                    style={styles.seachIcon}
                    source={require("../../allpngandsvg/noun_Search_3565529.png")}
                  />
                </TouchableOpacityNew>
                <MyText style={styles.textSearch}>
                  {lang[`{searchfriends}`]}
                </MyText>
              </View>

              <View style={styles.besideCircles}>
                <View style={styles.bigCircle}>
                  <ImageBackground
                    source={{
                      uri: props.user && props.user.imageurl,
                    }}
                    style={styles.profileImage}
                  ></ImageBackground>
                </View>
                {user && user.team && user.team.area ? (
                  <MyText style={{ ...styles.textSearch, lineHeight: 12 }}>
                    {user.team.area.name}
                  </MyText>
                ) : null}
              </View>

              <View style={styles.besideCircles}>
                <TouchableOpacityNew
                  onPress={() => randomChallenge()}
                  style={styles.smallCircle2}
                >
                  <Image
                    style={styles.shuffleIcon}
                    source={require("../../allpngandsvg/noun_Shuffle_434866.png")}
                  />
                </TouchableOpacityNew>
                <MyText style={styles.textSearch}>
                  {lang[`{randomchallenge}`]}
                </MyText>
              </View>
            </View>
            <MyText style={styles.name}>{user && user.shortName}</MyText>
          </View>
          <MyText style={styles.challenge}>
            {lang[`{challengefriends}`]}{" "}
            <Image
              style={styles.trophy}
              source={require("../../allpngandsvg/noun_Trophy_1822853.png")}
            />
          </MyText>
          {props.suggestionArray ? (
            <Carousel
              contentContainerCustomStyle={{ paddingLeft: (windowWidth * getPercentWidth(120)) / 100 }}
              ref={_carousel}
              data={props.suggestionArray}
              renderItem={_renderItem}
              sliderWidth={windowWidth}
              itemWidth={(windowWidth * getPercentWidth(660)) / 100}
              activeSlideAlignment={'start'}
            />
          ) : (
              <Loader />
            )}
        </ImageBackground>
        {yourTurn.length ? (
          <View style={styles.yourTurnMain}>
            <MyText style={styles.yourTurn}>{lang[`{yourturn}`]}</MyText>
            {yourTurn.map((a, i) => {
              return (
                <View key={i} style={styles.yourTurnDiv}>
                  <View style={styles.first}>
                    <ImageBackground
                      source={{ uri: a.user.imageurl }}
                      style={styles.workingWomen}
                    />
                  </View>
                  <View style={styles.lastDiv}>
                    <View style={styles.last1}>
                      <View style={styles.last1In}>
                        <MyText style={styles.titlee}>
                          {a.user.shortName}
                        </MyText>
                        <MyText style={styles.secondT}>
                          {breakStrng(a.textlabel, lang)}
                        </MyText>
                        <MyText
                          style={{
                            lineHeight:
                              (windowHeight * getPercentHeight(45)) / 100,
                            fontSize:
                              (windowHeight * getPercentHeight(40)) / 100,
                            color: "red",
                            marginTop: 2,
                          }}
                        >
                          {breakStrng(a.timelabel, lang)}
                        </MyText>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          if (a.buttonlabel === "{nextchallenge}") {
                            nextRoundd(a);
                          } else {
                            acceptchallengee(a);
                          }
                        }}
                        style={{
                          flexDirection: "row",
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                          height: (windowHeight * getPercentHeight(76)) / 100,
                          width: (windowWidth * getPercentWidth(354)) / 100,
                          backgroundColor: "#36ceff",
                        }}
                      >
                        {a.buttonlabel === "{nextchallenge}" ? (
                          <MyText
                            style={{
                              fontSize:
                                (windowHeight * getPercentHeight(25)) / 100,
                            }}
                          >
                            {lang[`{nextchallenge}`]}
                          </MyText>
                        ) : (
                            <MyText
                              style={{
                                fontSize:
                                  (windowHeight * getPercentHeight(25)) / 100,
                              }}
                            >
                              {lang[`{acceptchallenge}`]}
                            </MyText>
                          )}
                        <Image
                          source={require("../../allpngandsvg/noun_Check_1604774.png")}
                          style={{
                            width: (windowWidth * getPercentWidth(49)) / 100,
                            height: (windowHeight * getPercentHeight(49)) / 100,
                            marginLeft: 2,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) :
          null}
        <Image
          style={{ resizeMode: "contain", width: "100%", marginTop: 10 }}
          source={require("../../allpngandsvg/seperater.png")}
        />

        {opponentTurn && opponentTurn.length ? (
          <View style={{ ...styles.yourTurnMain, marginTop: 0 }}>
            <MyText style={styles.yourTurn}>{lang[`{histurn}`]}</MyText>
            {opponentTurn.map((a, i) => {
              return (
                <View key={i} style={styles.yourTurnDiv}>
                  <View style={styles.first}>
                    <ImageBackground
                      source={{ uri: a.user.imageurl }}
                      style={styles.workingWomen}
                    />
                  </View>
                  <View style={styles.lastDiv}>
                    <View style={styles.last1}>
                      <View style={styles.last1In}>
                        <MyText style={styles.titlee}>
                          {a.user.shortName}
                        </MyText>
                        <MyText style={styles.secondT}>
                          {breakStrng(a.textlabel, lang)}
                        </MyText>
                        <MyText
                          style={{
                            lineHeight:
                              (windowHeight * getPercentHeight(45)) / 100,
                            fontSize:
                              (windowHeight * getPercentHeight(40)) / 100,
                            color: "red",
                            marginTop: 2,
                          }}
                        >
                          {breakStrng(a.timelabel, lang)}
                        </MyText>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          borderRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                          height: (windowHeight * getPercentHeight(76)) / 100,
                          width: (windowWidth * getPercentWidth(354)) / 100,
                          backgroundColor: "#f95a35",
                        }}
                      >
                        <TouchableOpacity>
                          <MyText
                            style={{
                              fontSize:
                                (windowHeight * getPercentHeight(25)) / 100,
                            }}
                          >
                            {lang[`{hold}`]}
                          </MyText>
                        </TouchableOpacity>
                        <Image
                          source={require("../../allpngandsvg/noun_Check_1604774.png")}
                          style={{
                            width: (windowWidth * getPercentWidth(49)) / 100,
                            height: (windowHeight * getPercentHeight(49)) / 100,
                            marginLeft: 2,
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
        <View style={styles.historyButDiv}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("s_c_r_e_e_n", "home");
              Actions.drawerNestedTwo();
              props.individual_challenge_history()
            }}
            style={styles.historyBut}
          >
            <Text>{lang[`{challengehistory}`]}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingBottom: 130,
          }}
        ></View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  suggestionArray: store.suggestionArray,
  history: store.history,
  yourTurnOpponentTurnObj: store.yourTurnOpponentTurnObj,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startRandomChallenge,
      challengeSuggestions,
      startIndivisualChallenge,
      yourTurnOpponentTurn,
      nextRound,
      acceptChallenge,
      getUserDataApi,
      individual_challenge_history,
      pushToHistory,
      getLanguage,
      TeamChallengeApi,
      getLeaderBoards,
      Badges_Api,
      Statistics_Api,
      StrengthAndWeakness,
      Area_Api,
      Get_advertisement,
      Get_IncidentTypes
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
