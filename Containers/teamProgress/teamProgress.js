import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  RefreshControl,
} from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import CircularProgress from "../../component/circularProgress/circularProgress";
import MyText from "../../component/MyText/MyText";
import { teamProgressStyle } from "./teamProgressStyle";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import NumberFormat from "react-number-format";
import { breakStrng, Get_advertisement, TeamChallengeApi } from "../../modules/actions";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function TeamProgress(props) {
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
  const drawer = useRef();
  const styles = teamProgressStyle();

  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
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
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
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
          style={styles.TeamProgressHeader}
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
              {/* zIndex:1 */}
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
                        {formattedValue} {lang["{points}"]}
                      </Text>
                    )}
                    thousandSeparator={true}
                  />
                </MyText>
                <MyText style={styles.smallText}>{lang[`{myprofile}`]}</MyText>
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
            style={styles.progressView}
            imageStyle={{
              borderRadius: 5,
            }}
          >
            <View style={styles.progressTextView}>
              <MyText
                style={{
                  color: "white",
                  fontSize: heightWidthFn(73).deviceHeight,
                  fontWeight: "bold",
                }}
              >
                {lang[`{roundisover}`]}
              </MyText>
            </View>
          </ImageBackground>
          <View style={styles.answerView}>
            <View style={styles.answerViewContainer}>
              <CircularProgress
                color2="#e5ffe3"
                color1="#23ff00"
                centerText={`+${props.roundObj && props.roundObj.roundpoints}`}
                strokeDashoffset={110}
                width={heightWidthFn(210).devicewidth}
                strokeWidth={heightWidthFn(30).deviceHeight}
              />
            </View>
            <View>
              <MyText
                style={{
                  fontSize: heightWidthFn(50).deviceHeight,
                  fontWeight: "bold",
                }}
              >
                {lang[`{contributionteam}`]}{" "}
              </MyText>
            </View>
            <View>
              <Image
                style={{
                  width: heightWidthFn(300).devicewidth,
                  height: heightWidthFn(250).deviceHeight,
                  zIndex: 10,
                  resizeMode: "contain",
                }}
                source={require("../../allpngandsvg/happyRobo.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: "#e5f6fe",
            padding: 20,
          }}
          source={require("../../allpngandsvg/backgrounddarkbluewide.png")}
        >
          <View style={styles.TeamProgressButton}>
            <MyText style={styles.TeamProgressButtonText}>
              {lang[`{teamprogress}`]}{" "}
              {props.roundObj && props.roundObj.progressteam}%
            </MyText>
          </View>
          <View style={styles.remarkDiv}>
            <MyText
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {lang[`{correct}`]}
            </MyText>
            <MyText
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {props.roundObj && props.roundObj.correct}
            </MyText>
          </View>
          <View style={styles.remarkDiv2}>
            <MyText
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {lang[`{wrong}`]}
            </MyText>
            <MyText
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {props.roundObj && props.roundObj.incorrect}
            </MyText>
          </View>
          <View style={styles.helpingText}>
            <MyText
              style={{
                fontSize: heightWidthFn(50).deviceHeight,
                color: "#113f97",
                textAlign: "center",
              }}
            >
              {breakStrng(props.roundObj && props.roundObj.waittimetext, lang)}
            </MyText>
          </View>
          <TouchableOpacity
            onPress={() => props.TeamChallengeApi()}
            style={styles.GreenOkButton}
          >
            <MyText
              style={{
                textAlign: "center",
              }}
            >
              {lang[`{ok}`]}
            </MyText>
          </TouchableOpacity>
          <View
            style={{
              height: heightWidthFn(500).deviceHeight,
            }}
          ></View>
        </View>
      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  TeamChallenge: store.TeamChallenge,
  roundObj: store.roundObj,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      TeamChallengeApi,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TeamProgress);
