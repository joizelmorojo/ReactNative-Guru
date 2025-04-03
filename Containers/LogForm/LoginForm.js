import React from "react";
import { ImageBackground, TextInput, View } from "react-native";
import { Dimensions } from "react-native";
import MyText from "../../component/MyText/MyText";
import { LogFormStyles } from "./logFormStyle";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class LoginForm extends React.Component {
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
              <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                placeholder="{user}"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                placeholder="{password}"
              />
              <MyText
                style={styles.forgotPassText}
              >{`{forgot your password}`}</MyText>
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

const styles = LogFormStyles;

export default LoginForm;
