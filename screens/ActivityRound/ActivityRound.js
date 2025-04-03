import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { Dimensions,} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyText from "../../component/MyText/MyText";
import { ActivityRoundStyle } from "./ActivityRoundStyle";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = ActivityRoundStyle;
let pageHeight = 2998;
let pageWidth = 1242;
class ActivityRound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  heightWidthFn = (value) => {
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
  render() {
    let lang = this.props.currentLanguage ? this.props.currentLanguage[0] : ""
    return (
      this.props.user &&
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../allpngandsvg/backgrounddarkbluewide.png")}
          style={styles.ActivityRoundHeader}
        >
          <View style={styles.ActivityRoundHeaderContainer}>
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
                  source={{ uri: this.props.user.imageurl }}
                />
              </View>
              <MyText style={styles.personalText}>{lang[`{personal}`]}</MyText>
            </View>
            <MyText style={styles.WaitText}>{lang[`{waityourturn}`]}</MyText>
            <View style={styles.roboLeftImageContainer}>
              <Image
                style={styles.roboLeftImage}
                source={require("../../allpngandsvg/Objetointeligentevectorialleft.png")}
              />
              <MyText
                style={{
                  color: "white",
                  fontSize: this.heightWidthFn(82).deviceHeight,
                  fontWeight: "700",
                }}
              >
                {lang[`{round}`]}{" "}
                <MyText
                  style={{
                    color: "#2de9f0",
                    fontSize: this.heightWidthFn(82).deviceHeight,
                    fontWeight: "700",
                  }}
                >
                  2/3
                </MyText>
              </MyText>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: this.heightWidthFn(50).devicewidth,
            paddingVertical: this.heightWidthFn(50).devicewidth,
          }}
        >
          <View>
            <MyText
              style={{
                color: "#07035b",
                fontSize: this.heightWidthFn(61).deviceHeight,
                marginBottom: this.heightWidthFn(73).deviceHeight,
                paddingHorizontal: this.heightWidthFn(63).deviceHeight,
                fontWeight: "bold",
              }}
            >{lang[`{activestatistic}`]}</MyText>
          </View>
          <View style={styles.VSDiv}>
            <View style={styles.vsDivInside}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.vsImage}
                  source={{ uri: this.props.user.imageurl }}
                />
                <MyText style={styles.besideVs}>{this.props.user.shortName}</MyText>
                <MyText style={styles.besideVs}>10 pst</MyText>
              </View>
              <View
                style={{
                  alignItems: "center",
                  alignSelf: "flex-start",
                  marginTop: -this.heightWidthFn(123).deviceHeight,
                }}
              >
                <MyText style={styles.vs}>0 : 1</MyText>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.vsImage}
                  source={require("../../allpngandsvg/working-woman-1-1004x1024copia3.png")}
                />
                <MyText style={styles.besideVs}>Karla M.</MyText>
                <MyText style={styles.besideVs}>36 pst</MyText>
              </View>
            </View>
          </View>
          <View>
            <MyText
              style={{
                fontSize: this.heightWidthFn(55).deviceHeight,
                alignSelf: "center",
                fontWeight: "bold",
                color: "#2196f3",
                marginBottom: 20,
              }}
            >{lang[`{round}`]} 1 de 3</MyText>
          </View>

          <View style={styles.lastListMain}>
            <View style={styles.lastList}>
              <View style={styles.indivisualMain}>
                <View style={styles.indivisual}>
                  <MyText style={styles.text1}>
                    <Image
                      style={{
                        width: this.heightWidthFn(45).devicewidth,
                        height: this.heightWidthFn(55).deviceHeight,
                      }}
                      source={require("../../allpngandsvg/noun_Close_1891237.png")}
                    />
                  </MyText>
                  <MyText style={styles.text1}>{lang[`{winner}`]}</MyText>
                  <MyText style={styles.text1}>
                    <Image
                      style={{
                        width: this.heightWidthFn(45).devicewidth,
                        height: this.heightWidthFn(55).deviceHeight,
                      }}
                      source={require("../../allpngandsvg/noun_Check_1905028.png")}
                    />
                  </MyText>
                </View>
                <View style={styles.indivisual}>
                  <MyText style={styles.text1}>1</MyText>
                  <MyText style={styles.text1}>{lang[`{right questions}`]}</MyText>
                  <MyText style={styles.text1}>2</MyText>
                </View>
                <View style={styles.indivisual}>
                  <MyText style={styles.text1}>10 seg</MyText>
                  <MyText style={styles.text1}>{lang[`{time}`]}</MyText>
                  <MyText style={styles.text1}>1 seg</MyText>
                </View>
                <View style={styles.indivisual}>
                  <MyText style={styles.text1}>20%</MyText>
                  <MyText style={styles.text1}>{lang[`{effectiveness}`]}</MyText>
                  <MyText style={styles.text1}>20%</MyText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityRound)
