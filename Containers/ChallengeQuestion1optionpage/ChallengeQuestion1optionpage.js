import React from "react";
import {
  Image,
  ScrollView,
  View,
} from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import MyText from "../../component/MyText/MyText";
import { ChallengeQuestion1optionpageStyle } from "./ChallengeQuestion1optionpageStyle";
const heightt = 2208;
const widthh = 1242;
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const heightWidthFn = (value) => {
  let height = (value / heightt) * 100;
  let width = (value / widthh) * 100;
  let deviceHeight = (windowHeight * height) / 100;
  let devicewidth = (windowWidth * width) / 100;
  return {
    height,
    width,
    deviceHeight,
    devicewidth,
  };
};
const styles = ChallengeQuestion1optionpageStyle;
class ChallengeQuestion1optionpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lang = this.props.currentLanguage ? this.props.currentLanguage[0] : "";
    let oppenentName = this.props.challengeObj.challenge.usertwo.shortName;
    return (
      props.user && (
        <>
          <ScrollView style={styles.container}>
            <View>
              <View
                style={{
                  ...styles.topText,
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <Image
                  source={{ uri: this.props.user.imageurl }}
                  style={styles.WomanImage}
                />
                <MyText style={styles.WomanImageText}>
                  {lang[`{challengevs}`]} {oppenentName}
                </MyText>
              </View>
              <View style={styles.QuestionMaindiv}>
                <View>
                  <MyText style={styles.Question}>
                    ¿Cuantas marcas con nitrato de Miclonazol existen en el
                    mercado mexicano?
                  </MyText>
                </View>
                <View style={styles.listMainDiv}>
                  <View
                    style={{
                      width: "70%",
                    }}
                  >
                    <MyText style={styles.list}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </MyText>
                    <MyText style={styles.listHr}></MyText>
                    <MyText style={styles.list}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </MyText>
                    <MyText style={styles.listHr}></MyText>
                    <MyText style={styles.list}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </MyText>
                  </View>
                  <View
                    style={{
                      width: "20%",
                    }}
                  >
                    <View style={styles.greenCircle}>
                      <MyText
                        style={{
                          fontSize: heightWidthFn(37).deviceHeight,
                        }}
                      >
                        13.6s
                      </MyText>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomGreenContainer}>
            <View style={styles.smallWhiteDiv}>
              <MyText style={styles.smallWhiteDivText}>+10 pts</MyText>
            </View>
            <TouchableOpacity
              style={styles.mainDiv}
              onPress={() => Actions.VsPage()}
            >
              <View>
                <MyText style={styles.MainDivText}>
                  {lang[`{rightkeepitup}`]}
                </MyText>
                <MyText
                  style={{
                    fontSize: heightWidthFn(70).deviceHeight,
                    color: "white",
                  }}
                >
                  {lang[`{next}`]}
                </MyText>
              </View>
              <View>
                <Image
                  style={styles.RoboImageLeft}
                  source={require("../../allpngandsvg/Objetointeligentevectorialleft.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </>
      )
    );
  }
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  challengeObj: store.randomChallengeObj,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeQuestion1optionpage);
