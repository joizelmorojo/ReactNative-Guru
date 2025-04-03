import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyText from "../component/MyText/MyText";
import * as Permissions from "expo-permissions";
import {
  Change_ProfilePhoto,
  getUserData,
  getUserDataApi,
  individual_challenge_history,
  logout,
  pushToHistory,
  setLanguage,
  StrengthAndWeakness,
  settingLoaderFalse,
  settingLoaderTrue,
  settingErrorAlertTrue,
  Get_advertisement,
  settingDrawerOpenedFalse,
  settingDrawerOpenedTrue,
} from "../redux/actions";
import * as ImagePicker from "expo-image-picker";
import { apiBase } from "../env";
import Axios from "axios";
import NumberFormat from "react-number-format";
import * as FileSystem from "expo-file-system";
import ChangeAreaModal from "../component/Modal/changeAreaModal";
import ChangeLanguageModal from "../component/Modal/changeLanguageModal";

export const SideMenu = ({
  user,
  defaulLanguage,
  currentLanguage,
  navigation,
  history,
  drawerOpened,
}) => {
  console.log(
    "SideMenu || user", user
  );
  const [selected, setSelected] = useState(undefined);
  const lang = currentLanguage ? currentLanguage[0] : "";

  const uploadImageAsync = async (uri) => {
    if (uri) {
      settingLoaderTrue();
    }
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    const payloadKey = "file";
    const method = "POST";
    const formData = new FormData();
    formData.append(payloadKey, {
      uri,
      name: `${Math.random()}`,
      type: `image/${fileType}`,
    });
    AsyncStorage.getItem("authToken").then((a) => {
      return Axios({
        method,
        url: `${apiBase}user/app/change-profile-photo`,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(a)}`,
        },
        data: formData,
      })
        .then((response) => {
          settingLoaderFalse();
          console.log(response.data);
          getUserDataApi();
        })
        .catch((error) => {
          settingLoaderFalse();
          console.log(error);
        });
    });
  }
  const verifyCameraRollPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      return false;
    }
    return true;
  };
  const permission = () => {
    (async () => {
      const hasPermission = await verifyCameraRollPermissions();
      if (!hasPermission) return;
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      console.log(result, "new");

      if (!result.cancelled) {
        FileSystem.getInfoAsync(result.uri, { md5: true, size: true }).then((res) => {
          console.log(res.size)
          if (Number(res.size) < 5000000) {
            uploadImageAsync(result.uri);
          } else {
            settingErrorAlertTrue(
              "{smallfile}",
              409
            )
          }
        })
      }
    })();
  };
  const pickImage = async () => {
    permission();
  };
  const loggingout = () => {
    logout();
    settingDrawerOpenedFalse();
  };

  return (
    user != undefined ? <View style={styles.container}>
      <View style={styles.firstView}>
        <MyText style={styles.first}>
          {lang[`{myprofile}`]}{" "}
          <TouchableOpacity onPress={() => settingDrawerOpenedFalse()}>
            <Image
              style={styles.closeIconImg}
              source={require("../allpngandsvg/threeDotsWhite.png")}
            />
          </TouchableOpacity>
        </MyText>
      </View>
      <View style={styles.secondDiv}>
        <View style={styles.secondFirst}>
          <MyText style={styles.secondFirstText1}>
            {user.shortName}
          </MyText>
          <MyText style={styles.secondFirstText2}>
            <NumberFormat
              value={user.points}
              displayType={"text"}
              renderText={(formattedValue) => (
                <Text>
                  {formattedValue} {lang["{points}"]}
                </Text>
              )}
              thousandSeparator={true}
            />
          </MyText>
        </View>
        <View>
          <Image
            style={styles.secondImg}
            source={{
              uri: user.imageurl,
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={pickImage} style={styles.thirdView}>
        <MyText style={styles.thirdFirst}>
          {lang[`{changephoto}`]}{" "}
          <Image
            style={styles.editIcon}
            source={require("../allpngandsvg/editIcon.jpg")}
          />
        </MyText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Actions.drawerNestedOne();
          StrengthAndWeakness();
          settingDrawerOpenedFalse();
        }}
        style={styles.thirdView}
      >
        <MyText style={styles.thirdFirst}>
          {lang[`{strengthsweaknesses}`]}
        </MyText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Actions.drawerNestedTwo();
          individual_challenge_history();
          settingDrawerOpenedFalse();
        }}
        style={styles.thirdView}
      >
        <MyText style={styles.thirdFirst}>
          {lang[`{challengehistory}`]}
        </MyText>
      </TouchableOpacity>
      {user && user.company && user.company.canChangeArea ? <ChangeAreaModal closeDrawer={() => settingDrawerOpenedFalse()} /> : null}
      {user && user.company && user.company.canChangeLanguage ? <ChangeLanguageModal closeDrawer={() => settingDrawerOpenedFalse()} /> : null}
      <TouchableOpacity
        onPress={() => loggingout()}
        style={styles.thirdView}
      >
        <MyText style={styles.thirdFirst}>{lang[`{logout}`]}</MyText>
      </TouchableOpacity>
    </View> : null);
}

const mapStateToProps = (store) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  history: store.history,
  currentLanguage: store.currentLanguage,
  drawerOpened: store.drawerOpened
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout,
      Change_ProfilePhoto,
      getUserData,
      setLanguage,
      individual_challenge_history,
      StrengthAndWeakness,
      pushToHistory,
      settingLoaderFalse,
      settingLoaderTrue,
      getUserDataApi,
      settingErrorAlertTrue,
      Get_advertisement,
      settingDrawerOpenedFalse,
      settingDrawerOpenedTrue
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "#2196f3",
    padding: 30,
    paddingRight: 10,
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
  },
  first: {
    color: "white",
    fontSize: 20,
  },
  closeIconImg: {
    width: 50,
    resizeMode: "cover",
    height: 20,
  },
  secondDiv: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  secondImg: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: "white",
    borderWidth: 3,
  },
  secondFirst: {
    marginRight: 10,
  },
  secondFirstText1: {
    color: "black",
    fontWeight: "900",
    fontSize: 17,
  },
  secondFirstText2: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "right",
  },
  thirdView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  thirdFirst: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  editIcon: {
    width: 15,
    resizeMode: "contain",
    height: 15,
  },
});
