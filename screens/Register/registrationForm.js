import { Input, Item, Picker } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import MyText from "../../component/MyText/MyText";
import { Registrationsyles } from "./registrationFormStyles";
import { companyName } from "../../env";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Area_Api,
  challengeSuggestions,
  getLanguage,
  getUserData,
  pushToHistory,
  RegisterAreaList,
  RegisterTeamList,
  setLanguage,
  settingErrorAlertTrue,
  settingLoaderFalse,
  settingLoaderTrue,
  signIn,
  RegistrationApi,
  yourTurnOpponentTurn,
  setEmptyRegisterField,
} from "../../redux/actions";
import { useScreenDimensions } from "../../hooks/dimensions";
import Animated, { Easing } from "react-native-reanimated";
const { Value, timing } = Animated;

function RegistrationForm(props) {
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
  const styles = Registrationsyles();

  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [secondlastname, setsecondlastname] = useState("");
  const [country, setcountry] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [workarea, setworkarea] = useState("");
  const [team, setteam] = useState("");
  useEffect(() => {
    props.RegisterAreaList(companyName)
  }, [])
  useEffect(() => {
    console.log(props.registrationAreaList)
  }, [props.registrationAreaList])
  function validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const register = () => {
    let data = {
      "lastName": lastname,
      "whatsapp": whatsapp,
      "countrycode": country,
      "motherLastName": secondlastname,
      "idTeam": team,
      "name": firstname,
      "email": email,
      "idArea": workarea
    }
    if (firstname && lastname && email && country && whatsapp && workarea && team) {

      if (validateEmail()) {
        if (whatsapp.length >= 10 && whatsapp.length <= 14) {
          props.RegistrationApi(companyName, data)

        } else {
          props.settingErrorAlertTrue("{errorwhatsappNumberDigits10to14}", "signin");
        }
      } else {
        props.settingErrorAlertTrue("{emailformatincorrect}", "signin");
      }
    } else {
      props.settingErrorAlertTrue("{fieldsrequired}", "signin");
    }
  }
  useEffect(() => {
    if (props.emptyField) {
      setEmail("")
      setfirstname("")
      setcountry("")
      setsecondlastname("")
      setworkarea("")
      setteam("")
      setwhatsapp("")
      setlastname("")
      props.setEmptyRegisterField(false)
    }
  }, [props.emptyField])
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
          source={require("../../allpngandsvg/backgroung-light.png")}
          style={styles.background}
        >
          <Image
            style={
              styles.logoImage
            }
            source={require("../../allpngandsvg/logo.png")}
          />
          <View style={styles.WhiteContainer}>
            <MyText style={styles.containerHeading}>
              {lang[`{yourdata}`]}
            </MyText>
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/RegisterPersonIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Input
                onChangeText={(ev) => setfirstname(ev)}
                value={firstname}
                placeholder={lang["{firstname}"]}
              />
            </Item>
            <Item style={{
              ...styles.input,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: "#e6e6e6"
            }} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/RegisterPersonIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Input
                onChangeText={(ev) => setlastname(ev)}
                value={lastname}
                placeholder={lang["{lastname}"]}
              />
            </Item>
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/RegisterPersonIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                {" "}
              </MyText>
              <Input
                onChangeText={(ev) => setsecondlastname(ev)}
                value={secondlastname}
                placeholder={lang["{secondlastname}"]}
              />
            </Item>
          </View>

          <View style={styles.WhiteContainer}>
            <MyText style={styles.containerHeading}>
              {lang[`{contactdata}`]}
            </MyText>
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/noun_Mail_3564810.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Input
                onChangeText={(ev) => setEmail(ev)}
                value={email}
                keyboardType="email-address"
                placeholder={lang["{email}"]}
              />
            </Item>
            <Item style={{
              ...styles.input,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderColor: "#e6e6e6"
            }} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/LocationIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Input
                onChangeText={(ev) => setcountry(ev)}
                value={country}
                placeholder={lang["{country}"]}
              />
            </Item>
            <Item style={styles.input} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/Whatsapp.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Input
                onChangeText={(ev) => {
                  if (ev.length <= 14) {
                    setwhatsapp(ev)
                  }
                }}
                value={whatsapp}
                placeholder={lang["{whatsapp}"]}
                keyboardType="number-pad"
              />
            </Item>
          </View>

          <View style={styles.WhiteContainer}>
            <MyText style={styles.containerHeading}>
              {lang[`{gamedata}`]}
            </MyText>
            <MyText style={styles.containerHeading2}>
              {lang[`{later you can change}`]}
            </MyText>
            <Item style={{
              ...styles.input,
              borderBottomWidth: 3,
              borderColor: "#e6e6e6"
            }} fixedLabel last>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/WorkAreaIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              <Picker
                note
                mode="dropdown"
                style={{ color: "black" }}
                selectedValue={workarea}
                onValueChange={(value) => {
                  setworkarea(value)
                  if (value) {
                    props.RegisterTeamList(value)
                  }
                }}
              >
                <Picker.Item label={lang["{workarea}"] ? lang["{workarea}"] : " "} value="" />
                {
                  props.registrationAreaList ? props.registrationAreaList.map((a, i) => (
                    <Picker.Item label={a.name} value={a.idarea} key={a.idarea} />
                  )) : null
                }
              </Picker>
            </Item>
            <Item style={styles.input} fixedLabel last disabled>
              <Image
                style={styles.suffix1}
                source={require("../../allpngandsvg/TeamIcon.png")}
              />
              <MyText style={styles.requiredStar}>
                *
            </MyText>
              {
                props.registrationTeamList ?
                  <Picker
                    note
                    mode="dropdown"
                    style={{ color: "black" }}
                    selectedValue={team}
                    onValueChange={(value) => setteam(value)}
                  >
                    <Picker.Item label={lang["{team}"]} value="" />
                    {props.registrationTeamList.map((a, i) => (
                      <Picker.Item label={a.name} value={a.idTeam} key={a.idTeam} />
                    ))
                    }
                  </Picker>
                  :
                  <Input
                    onChangeText={(ev) => setteam(ev)}
                    value={team}
                    disabled
                    placeholder={lang["{team}"]}
                  />
              }
            </Item>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => register()}
          >
            <MyText style={{
              fontSize: heightWidthFn(52).devicewidth,
              color: "#ffffff"
            }}>
              {lang[`{register}`]}
            </MyText>
          </TouchableOpacity>
        </ImageBackground >
      </KeyboardAvoidingView>
    </ScrollView >
  ) : null;
}

const mapStateToProps = ({ store }) => ({
  translation: store.translation,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  registrationAreaList: store.registrationAreaList,
  registrationTeamList: store.registrationTeamList,
  emptyField: store.emptyField
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
      setLanguage,
      RegisterAreaList,
      RegisterTeamList,
      RegistrationApi,
      setEmptyRegisterField
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
