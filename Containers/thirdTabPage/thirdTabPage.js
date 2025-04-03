import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import CircularProgress from "../../component/circularProgress/circularProgress";
import { thirdTabPageStyles } from "./thirdTabPageStyled";
import MyText from "../../component/MyText/MyText";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import {
  startRandomChallenge,
  getUserDataApi,
  Statistics_Api,
  pushToHistory,
  Get_advertisement,
} from "../../modules/actions";
import { TouchableOpacity as TouchableOpacity2 } from "react-native-gesture-handler";
import Loader from "../../Loader";
import NumberFormat from "react-number-format";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);
const TouchableOpacityNew = withPreventDoubleClick(TouchableOpacity2);


function ThirdTabPage(props) {
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
  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };
  const styles = thirdTabPageStyles();
  useEffect(() => {
    props.getUserDataApi();
  }, []);
  const randomChallenge = () => {
    props.startRandomChallenge();
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.getUserDataApi();
    props.Statistics_Api();
    props.Get_advertisement()

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  let data = props.statistics;
  return (
    <>
      <>
        <Loader />
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ImageBackground
            source={require("../../allpngandsvg/backgroundpurplewide.png")}
            style={styles.image}
          >
            <View style={styles.threeDots}>
              <TouchableOpacity1
                style={{ width: "100%", height: "100%" }}
                onPress={props.openDrawer}
              >
                <Image
                  style={{ width: "100%", resizeMode: "contain" }}
                  source={require("../../allpngandsvg/threeDots.png")}
                />
              </TouchableOpacity1>
            </View>
            {props.user && (
              <MyText style={styles.topText}>
                <NumberFormat
                  value={props.user.points}
                  displayType={"text"}
                  renderText={(formattedValue) => (
                    <Text>
                      {props.user.shortName} {formattedValue} {lang["{points}"]}
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
                      source={{ uri: props.user && props.user.imageurl }}
                      style={styles.profileImage}
                    ></ImageBackground>
                  </View>
                  {props.user && props.user.team && props.user.team.area ? (
                    <MyText style={{ ...styles.textSearch, lineHeight: 12 }}>
                      {props.user.team.area.name}
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
            </View>
          </ImageBackground>
          <View style={styles.StatsMainDiv}>
            <MyText style={styles.statsText}>{lang[`{yourstats}`]}</MyText>
            <View style={styles.twoIconView}>
              <Image
                style={styles.staticsIcon}
              />
              <Image
                style={styles.RoboFronticon}
                source={require("../../allpngandsvg/Objeto_inteligente_vectorial_front.png")}
              />
            </View>
          </View>
          <View style={styles.mainProgressDiv}>
            <View style={styles.FlexDivs}>
              <CircularProgress
                color2="#dde8ff"
                color1="#4a00e0"
                centerText={data && data.questionsanswered + "%"}
                strokeDashoffset={data && (data.questionsanswered / 100) * 242} //242
                width={90}
                strokeWidth={13}
              />
              <MyText style={styles.ProgressHelpText}>
                {lang[`{questionsanswered}`]}
              </MyText>
            </View>
            <View style={styles.LineView}>
              <MyText style={styles.lineText} />
            </View>
            <View style={styles.FlexDivs}>
              <CircularProgress
                color2="#e5ffe3"
                color1="#23ff00"
                centerText={data && data.rightquestions + "%"}
                strokeDashoffset={data && (data.rightquestions / 100) * 242} //242
                width={90}
                strokeWidth={13}
              />
              <MyText style={styles.ProgressHelpText}>
                {lang[`{right questions}`]}
              </MyText>
            </View>
            <View style={styles.LineView}>
              <MyText
                style={{
                  ...styles.lineText,
                  backgroundColor: "#23ff00",
                }}
              />
            </View>
            <View style={styles.FlexDivs}>
              <CircularProgress
                color2="#ffeee6"
                color1="#ff6415"
                centerText={data && data.wrongquestions + "%"}
                strokeDashoffset={data && (data.wrongquestions / 100) * 242} //242
                width={90}
                strokeWidth={13}
              />
              <MyText style={styles.ProgressHelpText}>
                {lang[`{wrongquestions}`]}
              </MyText>
            </View>
          </View>
          <View style={styles.percentageViewContainer}>
            <View style={styles.percentageHelpText}>
              <MyText style={{ ...styles.ProgressHelpText, textAlign: "left", fontSize:heightWidthFn(48).devicewidth }}>

                {lang[`{youaredoingbetter}`].match("_") ? lang[`{youaredoingbetter}`].split("_")[0] : lang[`{youaredoingbetter}`]}{"\n"}
                {lang[`{youaredoingbetter}`].match("_") ? lang[`{youaredoingbetter}`].split("_")[1] : ""}
              </MyText>
            </View>
            <View style={styles.percentageTextContainer}>
              <MyText style={styles.percentageText}>
                {data && data.youaredoingbetter}%
              </MyText>
            </View>
          </View>
          <View style={styles.MainContainerRoboWithText}>
            <View
              style={{
                width: screenData.isLandscape ? "20%" : "40%",
              }}
            >
              <Image
                style={styles.CategoryRobo}
                source={require("../../allpngandsvg/Objetointeligentevectorialleft3.png")}
              />
            </View>
            <View style={styles.CategoryText}>
              <MyText style={{ fontWeight: "bold" }}>
                {lang[`{yourbestcategory}`]}
              </MyText>
              <MyText style={{ fontWeight: "bold" }}>
                {data && data.yourbestcategory}
              </MyText>
            </View>
          </View>
          <View style={styles.MainContainerRoboWithText}>
            <View
              style={{
                width: screenData.isLandscape ? "20%" : "40%",
              }}
            >
              <Image
                style={styles.CategoryRobo}
                source={require("../../allpngandsvg/Objeto_inteligente_vectorial_front_up2.png")}
              />
            </View>
            <View style={styles.CategoryText}>
              <MyText style={{ fontWeight: "bold" }}>{lang[`{workon}`]}</MyText>
              <MyText style={{ fontWeight: "bold" }}>
                {data && data.workon}
              </MyText>
            </View>
          </View>
          <ImageBackground
            style={styles.LastDivBgImage}
            source={require("../../allpngandsvg/background_dark_small.png")}
          >
            {data &&
              [
                data.morechallenges,
                data.morechallengeswon,
                data.morechallengeslost,
              ].map((a, i) => {
                return a && a.shortName ? (
                  <View key={i} style={styles.ListMainDiv}>
                    <Image
                      style={styles.smallDP}
                      source={{
                        uri: a.imageurl,
                      }}
                    />
                    <View>
                      <MyText style={styles.morechallengeTXT}>
                        {i === 0 && lang[`{morechallenges}`]}
                        {i === 1 && lang[`{morechallengeswon}`]}
                        {i === 2 && lang[`{morechallengeslost}`]}
                      </MyText>
                      <MyText style={styles.ProfileName}>{a.shortName}</MyText>
                    </View>
                  </View>
                ) : null;
              })}

            <View
              style={{
                height: heightWidthFn(340).deviceHeight,
              }}
            ></View>
          </ImageBackground>
        </ScrollView>
      </>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  history: store.history,
  statistics: store.statistics,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startRandomChallenge,
      getUserDataApi,
      Statistics_Api,
      pushToHistory,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ThirdTabPage);
