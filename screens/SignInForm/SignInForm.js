import { Input, Item } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import { TouchableOpacity as TouchableOpacity1 } from "react-native-gesture-handler";
import MyText from "../../component/MyText/MyText";
import { SignInFormStyles } from "./SignInFormStyles";
import axios from "axios";
import { apiBase } from "../../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Area_Api,
  challengeSuggestions,
  getLanguage,
  getUserData,
  pushToHistory,
  setLanguage,
  settingErrorAlertTrue,
  settingLoaderFalse,
  settingLoaderTrue,
  signIn,
  yourTurnOpponentTurn,
} from "../../redux/actions";
import { useScreenDimensions } from "../../hooks/dimensions";
import Animated, { Easing } from "react-native-reanimated";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
const { Value, timing } = Animated;
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);

function SignInForm(props) {
  let [toCenter] = useState(
    new Value(
      -(Dimensions.get("window").width + Dimensions.get("window").width)
    )
  );
  let [_transX] = useState(new Value(0));

  function animation1() {
    timing(_transX, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  function animation2() {
    timing(toCenter, {
      toValue: 0,
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }
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
    animation1();
    animation2();
  }, [screenData]);
  const styles = SignInFormStyles();

  useEffect(() => {
    setTimeout(() => { }, 500);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    let lang = props.currentLanguage ? props.currentLanguage[0] : "";
    if (email && password) {
      function validateEmail() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      if (validateEmail()) {

        AsyncStorage.getItem("pushNotiToken").then((a) => {
          let token = JSON.parse(a);
          props.settingLoaderTrue();
          return axios({
            method: "post",
            url: `${apiBase}app/login`,
            data: {
              email: email,
              password: password,
              pushNotificationToken: token,
            },
          })
            .then((res) => {
              if (res.data.token) {
                props.settingLoaderFalse();
                AsyncStorage.setItem("authToken", JSON.stringify(res.data.token));
                AsyncStorage.setItem("user", JSON.stringify(res.data.user));
                props.signIn(res.data.user, res.data.token);
                props.yourTurnOpponentTurn();
                props.challengeSuggestions();
                setEmail("");
                setPassword("");
              }
            })
            .catch((error) => {
              props.settingLoaderFalse();
              props.settingErrorAlertTrue("{userorpasswordincorrect}", "signin");
            });
        });
      } else {
        props.settingErrorAlertTrue("{emailformatincorrect}", "signin");

      }
    } else {
      props.settingErrorAlertTrue("{userorpasswordrequired}", "signin");
    }
  };

  useEffect(() => {
    props.getLanguage();
    props.getUserData();
    AsyncStorage.getItem("authToken").then((res) => {
      if (res) {
        Actions.home();
        props.pushToHistory("_home");
        props.Area_Api()
      }
    });
  }, []);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return props.currentLanguage ? (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: '100%',
          alignItems: 'center',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ImageBackground
          imageStyle={{ height: windowHeight }}
          source={require("../../allpngandsvg/backgroundpurplewide.png")}
          style={styles.background}
        >
          <Animated.Image
            style={[
              styles.logoImage,
              {
                opacity: _transX,
              },
            ]}
            source={require("../../allpngandsvg/logoexeltis.png")}
          />

          <Animated.Image
            style={[
              styles.nameApp,
              {
                opacity: _transX,
              },
            ]}
            source={require("../../allpngandsvg/logo.png")}
          />
          <Animated.View
            style={[
              styles.form,
              {
                marginLeft: toCenter,
              },
            ]}
          >
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/noun_Mail_3564810.png")}
              />
              <Input
                onChangeText={(ev) => setEmail(ev)}
                value={email}
                keyboardType="email-address"
                placeholder={lang["{email}"]}
              />
            </Item>
            <View style={styles.hr}></View>
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix}
                source={require("../../allpngandsvg/noun_password_3324726.png")}
              />
              <Input
                onChangeText={(ev) => setPassword(ev)}
                secureTextEntry={true}
                value={password}
                placeholder={lang["{password}"]}
              />
            </Item>
            <TouchableOpacity onPress={() => signIn()} style={styles.button}>
              <MyText style={styles.buttonText}>{lang[`{signin}`]}</MyText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.pushToHistory("signInForm");
                setEmail("");
                setPassword("");
                Actions.registration();
              }}
            >
              <MyText style={{ color: "grey", marginTop: 10, fontWeight: "bold" }}>
                {lang["{register}"]}
              </MyText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.pushToHistory("signInForm");
                setEmail("");
                setPassword("");
                Actions.recoverPassword();
              }}
            >
              <MyText style={{ color: "grey", marginTop: 10 }}>
                {lang["{forgotyourpasswor}"]}
              </MyText>
            </TouchableOpacity>
            <View style={styles.threeLineMain}>
              <View style={styles.line}></View>
              <View style={styles.line}></View>
              <View style={styles.line}></View>
            </View>
          </Animated.View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  ) : null;
}

const mapStateToProps = ({ store }) => ({
  translation: store.translation,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      signIn,
      getLanguage,
      getUserData,
      settingLoaderTrue,
      yourTurnOpponentTurn,
      settingLoaderFalse,
      challengeSuggestions,
      settingErrorAlertTrue,
      pushToHistory,
      Area_Api,
      setLanguage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
