import React from "react";
import { ImageBackground, View } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import MyText from "../../component/MyText/MyText";
import { LogStyle } from "./logStyle";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);
class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../allpngandsvg/backgroundpurplewide.png")}
      >
        <View style={styles.MainContainer}>
          <View>
            <View style={styles.headingMainContainer}>
              <View>
                <MyText style={styles.Logo}>Logo App</MyText>
              </View>
              <View>
                <View>
                  <MyText style={styles.AppName}>Name App</MyText>
                </View>
                <View>
                  <MyText style={styles.Slogan}>Slogan </MyText>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.Button,
                  {
                    backgroundColor: "#fff",
                  },
                ]}
              >
                <MyText
                  style={{ color: "#090554", fontSize: 15 }}
                >{`{login}`}</MyText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button}>
                <MyText
                  style={{ color: "#fff", fontSize: 15 }}
                >{`{register}`}</MyText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.BottomLogoContainer}>
            <MyText style={styles.LogoBottom}>Logo Company</MyText>
            <MyText style={styles.BottomSlogan}>Slogan</MyText>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = LogStyle;

export default Log;
