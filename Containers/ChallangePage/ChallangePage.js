import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import MyText from "../../component/MyText/MyText";
import { ChallangeStyles } from "./ChallangeStyles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  startRandomChallenge,
  getUserDataApi,
  pushToHistory,
  Get_advertisement,
} from "../../modules/actions";
import useScreenDimensions from "../../utils/dimention";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import Loader from "../../Loader";
import NumberFormat from "react-number-format";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function ChallangePage(props) {
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
  const drawer = useRef();
  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };
  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  const styles = ChallangeStyles();

  const [state, setState] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const tooltipTrue = (i) => {
    setState({
      ...state,
      [`tooltip${i}`]: state[`tooltip${i}`] ? false : true,
    });
  };
  useEffect(() => {
    props.getUserDataApi();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    props.Get_advertisement()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const randomChallenge = () => {
    props.startRandomChallenge();
  };

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let user = props.user;
  const arr = props.badges ? props.badges : [];
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
            source={require("../../allpngandsvg/backgroundpurplewide.png")}
            style={styles.image}
          >
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
            <View style={styles.profileDiv}>
              <View style={styles.profileDivInside}>
                <View style={styles.besideCircles}>
                  <TouchableOpacity
                    onPress={() => {
                      Actions.searchPage();
                    }}
                    style={styles.smallCircle1}
                  >
                    <Image
                      style={styles.seachIcon}
                      source={require("../../allpngandsvg/noun_Search_3565529.png")}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    onPress={() => randomChallenge()}
                    style={styles.smallCircle2}
                  >
                    <Image
                      style={styles.shuffleIcon}
                      source={require("../../allpngandsvg/noun_Shuffle_434866.png")}
                    />
                  </TouchableOpacity>
                  <MyText style={styles.textSearch}>
                    {lang[`{randomchallenge}`]}
                  </MyText>
                </View>
              </View>
              <MyText style={styles.name}>{user.shortName}</MyText>
            </View>
          </ImageBackground>
          <View style={{ width: windowWidth, alignItems: "center" }}>
            <View style={styles.robotDiv}>
              <View style={{ width: "65%" }}>
                <MyText style={styles.robotDivText1}>{lang[`{badges}`]}</MyText>
                <MyText style={styles.robotDivText2}>
                  {lang[`{badgesyouveunlocked}`]}
                </MyText>
              </View>
              <Image
                style={styles.robotDivImage}
                source={require("../../allpngandsvg/Objetointeligentevectorial(3).png")}
              />
            </View>
          </View>
          <View style={styles.lastFlexDiv}>
            {arr.map((a, i) => {
              return (
                <TouchableOpacity1
                  onPress={() => tooltipTrue(i)}
                  key={i}
                  style={styles.flexBoxes}
                >
                  <Image
                    style={styles.lastDivImages}
                    source={
                      a.earned
                        ? {
                          uri: a.badge.icon.iconurl,
                        }
                        : require("../../allpngandsvg/bloqueado.png")
                    }
                  />
                  {!state[`tooltip${i}`] && (
                    <MyText style={styles.textBesideImg}>{a.badge.name}</MyText>
                  )}
                  {state[`tooltip${i}`] && (
                    <View style={{ ...styles.tooltip, zIndex: 9 }}>
                      <TouchableOpacity1
                        style={{ height: "100%", width: "100%" }}
                      >
                        <Text style={styles.tooltipText}>{a.tooltip}</Text>
                      </TouchableOpacity1>
                      <View style={styles.triangle}></View>
                    </View>
                  )}
                </TouchableOpacity1>
              );
            })}
          </View>
        </ScrollView>
      </>
    )
  );
}

const mapStateToProps = ({ store }) => ({
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  user: store.user,
  history: store.history,
  badges: store.badges,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startRandomChallenge,
      getUserDataApi,
      pushToHistory,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChallangePage);
