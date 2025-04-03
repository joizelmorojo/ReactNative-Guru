import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Image,
  Modal,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useScreenDimensions from "../../utils/dimention";
import { breakStrng, pushToHistory } from "../../modules/actions";
import MyText from "../MyText/MyText";
import { ModalStyle } from "./ModalStyle";

const ModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const screenData = useScreenDimensions(2870, 1242);
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
    setModalVisible(props.model);
  }, [props.TeamChallenge]);

  const styles = ModalStyle();
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={[styles.centeredView2, styles.mainContainer]}>
          <ScrollView
          >
            <View
              style={[
                styles.centeredView2,
                { backgroundColor: "white", flex: 0 },
              ]}
            >
              <ImageBackground
                style={styles.bgImageStyle}
                imageStyle={styles.bgImage}
                source={require("../../allpngandsvg/greenboxbg.png")}
              >
                <Image
                  style={styles.RoboWithCoin}
                  source={require("../../allpngandsvg/robot_with_coin.png")}
                />
              </ImageBackground>
              <View>
                <MyText style={styles.winnerText}>
                  {lang[`{wehavewinner}`]}
                </MyText>
                <MyText style={styles.winnerText}>
                  {lang[`{congratulationsteam}`]}
                </MyText>
              </View>
              <View style={styles.TrophyWithTextContainer}>
                <MyText style={styles.TrophyHelpText}>
                  {props.TeamChallenge &&
                    props.TeamChallenge.notificationDTO &&
                    props.TeamChallenge.notificationDTO.team1Name}
                </MyText>
                <View style={styles.greenTrophyImageContainer}>
                  <Image
                    style={styles.Trophy}
                    source={require("../../allpngandsvg/noun_Trophy_1822853.png")}
                  />
                </View>
              </View>
              <View>
                <MyText style={styles.SmallText}>
                  {breakStrng(
                    props.TeamChallenge &&
                      props.TeamChallenge.notificationDTO &&
                      props.TeamChallenge.notificationDTO.competitiondatetext,
                    lang
                  )}
                </MyText>
              </View>
              <ImageBackground
                style={styles.bluebgImage}
                imageStyle={{
                  borderRadius: 5,
                }}
                source={require("../../allpngandsvg/backgrounddarkbluewide.png")}
              >
                <View style={styles.blueBgInnerContainer}>
                  <MyText
                    style={{
                      color: "white",
                    }}
                  >
                    {lang[`{results}`]}
                  </MyText>
                </View>
                <View style={styles.innerFlexContainer}>
                  <View>
                    <View style={styles.TrophyWithTextContainer}>
                      <View style={styles.greenTrophyImageContainer}>
                        <Image
                          style={styles.Trophy}
                          source={require("../../allpngandsvg/noun_Trophy_1822853.png")}
                        />
                      </View>
                      <View
                        style={{
                          marginLeft: 10,
                        }}
                      >
                        <MyText style={styles.TrophyText}>
                          {lang[`{team}`]}
                        </MyText>
                        <MyText style={styles.TrophyText}>
                          {props.TeamChallenge &&
                            props.TeamChallenge.notificationDTO &&
                            props.TeamChallenge.notificationDTO.team1Name}
                        </MyText>
                      </View>
                    </View>
                    <View style={styles.TrophyWithTextContainer}>
                      <View style={styles.OrangeTrophyImageContainer}>
                        <Image
                          style={styles.Trophy}
                          source={require("../../allpngandsvg/noun_Trophy_1822853.png")}
                        />
                      </View>
                      <View
                        style={{
                          marginLeft: 10,
                        }}
                      >
                        <MyText style={styles.TrophyText}>
                          {lang[`{team}`]}
                        </MyText>
                        <MyText style={styles.TrophyText}>
                          {props.TeamChallenge &&
                            props.TeamChallenge.notificationDTO &&
                            props.TeamChallenge.notificationDTO.team2Name}
                        </MyText>
                      </View>
                    </View>
                  </View>
                  <View style={styles.middleLine}></View>
                  <View
                    style={{
                      justifyContent: "space-around",
                    }}
                  >
                    <View>
                      <MyText style={styles.TrophyText}>Campaign</MyText>
                      <MyText
                        style={{
                          fontSize: heightWidthFn(30).deviceHeight,
                          color: "#ffff",
                        }}
                      >
                        {lang[`{campaignyougot}`]}
                      </MyText>
                    </View>
                    <View>
                      <MyText style={styles.TrophyText}>
                        <NumberFormat
                          value={
                            props.TeamChallenge &&
                            props.TeamChallenge.notificationDTO &&
                            props.TeamChallenge.notificationDTO.yourPoints
                          }
                          displayType={"text"}
                          renderText={(formattedValue) => (
                            <Text>{formattedValue} </Text>
                          )}
                          thousandSeparator={true}
                        />{" "}
                        pts{" "}
                        {props.TeamChallenge &&
                          props.TeamChallenge.notificationDTO &&
                          props.TeamChallenge.notificationDTO.bonusPoints >
                            0 && (
                            <NumberFormat
                              value={
                                props.TeamChallenge &&
                                props.TeamChallenge.notificationDTO &&
                                props.TeamChallenge.notificationDTO.bonusPoints
                              }
                              displayType={"text"}
                              renderText={(formattedValue) => (
                                <Text>
                                  + {formattedValue}
                                  {" pts"}
                                </Text>
                              )}
                              thousandSeparator={true}
                            />
                          )}
                      </MyText>
                      <MyText
                        style={{
                          fontSize: heightWidthFn(30).deviceHeight,
                          color: "#12e092",
                        }}
                      >
                        {props.TeamChallenge &&
                          props.TeamChallenge.notificationDTO &&
                          props.TeamChallenge.notificationDTO.bonusPoints > 0 &&
                          props.TeamChallenge.notificationDTO.bonusText}
                      </MyText>
                    </View>
                    <View>
                      <MyText
                        style={{
                          fontSize: heightWidthFn(35).deviceHeight,
                          color: "#12e092",
                        }}
                      >
                        Total:{" "}
                        {props.TeamChallenge &&
                          props.TeamChallenge.notificationDTO &&
                          props.TeamChallenge.notificationDTO.totalPoints}{" "}
                        {lang[`{pts}`]}
                      </MyText>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <TouchableHighlight
              style={[
                styles.GreenOkButton,
                { marginBottom: screenData.isLandscape ? 50 : 0 },
              ]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <MyText
                style={{
                  textAlign: "center",
                }}
              >
                {lang[`{ok}`]}
              </MyText>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
