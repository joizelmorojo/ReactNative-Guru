import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  View,
  TouchableOpacity as TouchableOpacity1,
  KeyboardAvoidingView,
} from "react-native";
import {
  ScrollView,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyText from "../../component/MyText/MyText";
import { RecoverpasswordStyle } from "./RecoverPasswordStyle";
import axios from "axios";
import { apiBase } from "../../env";
import { useScreenDimensions } from "../../hooks/dimensions";
import { Input, Item } from "native-base";
import {
  settingErrorAlertTrue,
  settingLoaderFalse,
  settingLoaderTrue,
} from "../../redux/actions";
const TouchableOpacity = TouchableOpacity1;

function Recoverpassword(props) {
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
  const styles = RecoverpasswordStyle();
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const gettingValues = (ev) => {
    setEmail(ev);
  };

  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  const send = () => {
    if (email) {
      props.settingLoaderTrue();
      axios({
        method: "post",
        url: `${apiBase}public/forgot-password/${email}`,
      })
        .then((response) => {
          props.settingErrorAlertTrue(
            response.data,
            "successRecoverPassWord"
          );
          setEmail("");
          props.settingLoaderFalse();
        })
        .catch((error) => {
          props.settingLoaderFalse();
          console.log(error.response);
          if (
            error.response &&
            error.message
          ) {
            props.settingErrorAlertTrue(
              error.response.data.messageError
                ? error.response.data.messageError
                : "",
              409
            );
          } else {
            console.log(error.message);
          }
        });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: '100%',
          alignItems: 'center',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>

        <ImageBackground
          style={styles.background}
          source={require("../../allpngandsvg/backgroundpurplewide3.png")}
        >
          <View style={styles.MainContainer}>
            <Image
              style={styles.logo}
              source={require("../../allpngandsvg/logo.png")}
            />
            <View style={styles.form}>
              <View>
                <MyText style={styles.forgotPassText}>
                  {lang[`{recoverpassword}`]}
                </MyText>
              </View>
              <View>
                <Item style={styles.NewItem} fixedLabel last bordered rounded>
                  <Input
                    placeholderTextColor="#fff"
                    value={email}
                    style={{
                      color: "white",
                    }}
                    keyboardType="email-address"
                    placeholder={lang["{email}"]}
                    onChangeText={(ev) => gettingValues(ev)}
                  />
                </Item>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    {
                      backgroundColor: "#fff",
                      width: heightWidthFn(780).devicewidth,
                      alignSelf: "center",
                    },
                  ]}
                  onPress={() => send()}
                >
                  <MyText style={{ color: "#090554", fontSize: 15 }}>
                    {lang[`{send}`]}
                  </MyText>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              source={require("../../allpngandsvg/logoexeltis.png")}
              style={styles.LogoBottom}
            />
          </View>

        </ImageBackground>
      </KeyboardAvoidingView>

    </ScrollView>
  );
}

const styles = RecoverpasswordStyle;

const mapStateToProps = ({ store }) => ({
  translation: store.translation,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      settingErrorAlertTrue,
      settingLoaderFalse,
      settingLoaderTrue,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Recoverpassword);
