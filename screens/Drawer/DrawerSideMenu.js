import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyText from "../../component/MyText/MyText";
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
} from "../../redux/actions";
import * as ImagePicker from "expo-image-picker";
import { apiBase } from "../../env";
import Axios from "axios";
import NumberFormat from "react-number-format";
import * as FileSystem from "expo-file-system";
import ChangeAreaModal from "../../component/Modal/changeAreaModal";
import ChangeLanguageModal from "../../component/Modal/changeLanguageModal";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  async uploadImageAsync(uri) {
    if (uri) {
      this.props.settingLoaderTrue();
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
          this.props.settingLoaderFalse();
          console.log(response.data);
          this.props.getUserDataApi();
        })
        .catch((error) => {
          this.props.settingLoaderFalse();
          console.log(error);
        });
    });
  }
  verifyCameraRollPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      return false;
    }
    return true;
  };
  permission = () => {
    (async () => {
      const hasPermission = await this.verifyCameraRollPermissions();
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
            this.uploadImageAsync(result.uri);
          } else {
            this.props.settingErrorAlertTrue(
              "{smallfile}",
              409
            )
          }
        })

      }
    })();
  };
  pickImage = async () => {
    this.permission();
  };
  logout = () => {
    this.props.logout();
    this.props.closeDrawer();
  };
  componentDidMount() {
    this.props.getUserData();

    AsyncStorage.getItem("Default_Lang").then((res) => {
      if (res) {
        console.log(res)
        this.props.setLanguage(res)
      }
    })
  }

  onValueChange(value) {
    this.props.setLanguage(value);
  }

  render() {
    let lang = this.props.currentLanguage ? this.props.currentLanguage[0] : "";
    return this.props.user ? (
      <View style={styles.container}>
        <View style={styles.firstView}>
          <MyText style={styles.first}>
            {lang[`{myprofile}`]}{" "}
            <TouchableOpacity onPress={() => this.props.closeDrawer()}>
              <Image
                style={styles.closeIconImg}
                source={require("../../allpngandsvg/threeDotsWhite.png")}
              />
            </TouchableOpacity>
          </MyText>
        </View>
        <View style={styles.secondDiv}>
          <View style={styles.secondFirst}>
            <MyText style={styles.secondFirstText1}>
              {this.props.user.shortName}
            </MyText>
            <MyText style={styles.secondFirstText2}>
              <NumberFormat
                value={this.props.user.points}
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
                uri: this.props.user.imageurl,
              }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this.pickImage} style={styles.thirdView}>
          <MyText style={styles.thirdFirst}>
            {lang[`{changephoto}`]}{" "}
            <Image
              style={styles.editIcon}
              source={require("../../allpngandsvg/editIcon.jpg")}
            />
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.drawerNestedOne();
            this.props.StrengthAndWeakness();
            this.props.closeDrawer();
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
            this.props.individual_challenge_history();
            this.props.closeDrawer();
          }}
          style={styles.thirdView}
        >
          <MyText style={styles.thirdFirst}>
            {lang[`{challengehistory}`]}
          </MyText>
        </TouchableOpacity>
        {this.props.user && this.props.user.company && this.props.user.company.canChangeArea ? <ChangeAreaModal closeDrawer={this.props.closeDrawer} /> : null}
        {this.props.user && this.props.user.company && this.props.user.company.canChangeLanguage ? <ChangeLanguageModal closeDrawer={this.props.closeDrawer} /> : null}
        <TouchableOpacity
          onPress={() => this.logout()}
          style={styles.thirdView}
        >
          <MyText style={styles.thirdFirst}>{lang[`{logout}`]}</MyText>
        </TouchableOpacity>
      </View>
    ) : null;
  }
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  history: store.history,
  currentLanguage: store.currentLanguage,
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
      Get_advertisement
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
