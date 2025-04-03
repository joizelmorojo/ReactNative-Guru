import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity as TouchableOpacity1,
  View,
} from "react-native";
import { Dimensions, } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";
import {
  getLeaderBoards,
  startRandomChallenge,
  startIndivisualChallenge,
  getUserDataApi,
  pushToHistory,
  Get_advertisement,
} from "../../redux/actions";
import { lastTabStyles } from "./LastTabStyles";
import { TouchableOpacity as TouchableOpacity2 } from "react-native-gesture-handler";
import Loader from "../../component/Loader";
import NumberFormat from "react-number-format";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";



const heightt = 2208;

const widthh = 1242;

const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

const TouchableOpacityNew = withPreventDoubleClick(TouchableOpacity2);

function getPercentWidth(val) {
  return (val / widthh) * 100;
}

function getPercentHeight(val) {
  return (val / heightt) * 100;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = lastTabStyles;

function LastTabPage(props) {
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

  useEffect(() => {
    props.getUserDataApi();
    props.getLeaderBoards();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const drawer = useRef();

  const closeDrawer = () => {
    drawer.current._root.close();
  };

  const openDrawer = () => {
    drawer.current._root.open();
  };

  const styles = lastTabStyles();

  const [items, setItems] = useState([
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "150",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "149",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "148",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "147",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "146",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "145",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "144",
      pt: "1500",
      pts: "{pts}",
    },
    {
      url: require("../../allpngandsvg/working-woman-1-1004x1024copia3.png"),
      name: "Rodrigo S.",
      sno: "143",
      pt: "1500",
      pts: "{pts}",
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);

    props.getLeaderBoards();
    props.getUserDataApi();
    props.Get_advertisement()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const randomChallenge = () => {
    props.startRandomChallenge();
  };
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  console.log(props.leaderBoards, "props.leaderBoards");
  return (
    <>
      <Loader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.container}
      >

        <ImageBackground
          source={require("../../allpngandsvg/backgroundpurplewide.png")}
          style={styles.image}
        >

          <TouchableOpacity1
            onPress={props.openDrawer}
            style={styles.threeDots}
          >
            
            <Image
              style={{ width: "100%", resizeMode: "contain" }}
              source={require("../../allpngandsvg/threeDots.png")}
            />
          </TouchableOpacity1>

          <MyText style={styles.topText}>
            <NumberFormat
              value={props.user && props.user.points}
              displayType={"text"}
              renderText={(formattedValue) => (
                <Text>
                  {formattedValue} {lang["{points}"]}
                </Text>
              )}
              thousandSeparator={true}
            />
          </MyText>
          


          <View collapsable={false} style={styles.profileDiv}>
            <View collapsable={false} style={styles.profileDivInside}>
              <View collapsable={false} style={styles.besideCircles}>
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

              <View collapsable={false} style={styles.besideCircles}>
                <View collapsable={false} style={styles.bigCircle}>
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

              <View collapsable={false} style={styles.besideCircles}>
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
            
            <MyText style={styles.name}>
              {props.user && props.user.shortName}
            </MyText>
          </View>

          
          <View collapsable={false} style={styles.Top3}>

            <MyText style={styles.top3Text}>{lang[`{top3}`]}</MyText>
            
            <View collapsable={false} style={styles.top3Flex}>
              {props.leaderBoards &&
                props.leaderBoards.slice(0, 3).map((a, i) => {
                  return (

                    <View collapsable={false} style={styles.top3Div} key={i}>
                      <View collapsable={false} style={styles.imageView}>
                        
                        <Image
                          source={{ uri: a.imageurl }}
                          style={styles.top3Images}
                        />
                        <View collapsable={false} style={styles.badge}>
                          <MyText style={styles.badgeText}>{i + 1}</MyText>
                        </View>
                      </View>

                      <View collapsable={false} style={styles.contentView}>
                        <MyText style={styles.contentHead}>{a.username}</MyText>

                        <MyText style={styles.contentSubHead}>
                          <NumberFormat
                            value={a.totalpoints}
                            displayType={"text"}
                            renderText={(formattedValue) => (
                              <Text>
                                {formattedValue} {lang["{pts}"]}
                              </Text>
                            )}
                            thousandSeparator={true}
                          />
                        </MyText>


                        {a.iduser ==
                        props.user.iduser ? null : a.availableToPlay ? (
                          <TouchableOpacity
                            onPress={() =>
                              props.startIndivisualChallenge(a.iduser)
                            }
                          >
                            <MyText style={styles.contentSubChallenge}>
                              {lang[`{challenge}`]}
                            </MyText>
                          </TouchableOpacity>
                        ) : null}

                        



                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        </ImageBackground>
        
        
        
        
        <View collapsable={false} style={styles.tableDiv}>
          {props.leaderBoards &&
            props.leaderBoards.slice(3).map((a, i) => {
              
              return (
                <View collapsable={false} key={i}>
                  <View collapsable={false} style={a.me ? styles.tableActive : styles.table}>    

                    <View collapsable={false} style={styles.tableFirst}>
                      
                     <MyText style={styles.sno}>
                     {a.iduser ==
                        props.user.iduser ? null : a.availableToPlay ? (
                          <TouchableOpacity
                            onPress={() =>
                              props.startIndivisualChallenge(a.iduser)
                            }
                          >
                            <MyText style={styles.contentSubChallenge2}>
                              {lang[`{challenge}`]}
                            </MyText>
                          </TouchableOpacity>
                        ) : null}
                     </MyText>
                     
                      <Image
                        style={styles.tableImage}
                        source={{ uri: a.imageurl }}
                      />
                      <MyText style={styles.tableName}>{a.username}</MyText>
                    </View>


                    <MyText style={styles.tablepts}>
                      <NumberFormat
                        value={a.totalpoints}
                        displayType={"text"}
                        renderText={(formattedValue) => (
                          <Text>
                            {formattedValue} {lang["{pts}"]}
                          </Text>
                        )}
                        thousandSeparator={true}
                      />
                    </MyText>

                    
                  </View>
                  <View collapsable={false} style={{ alignItems: "center", width: "100%" }}>
                    <Image
                      style={{ width: "70%", resizeMode: "contain" }}
                      source={require("../../allpngandsvg/seperater.png")}
                    />
                  </View>
                </View>
              );
            })}
        </View>




      </ScrollView>
    </>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  history: store.history,
  leaderBoards: store.leaderBoards,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startRandomChallenge,
      getLeaderBoards,
      startIndivisualChallenge,
      getUserDataApi,
      pushToHistory,
      Get_advertisement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LastTabPage);
