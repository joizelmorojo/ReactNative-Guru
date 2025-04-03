import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  settingNetworkAlertFalse,
  settingNetworkAlertTrue,
} from "../../redux/actions";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import Animated from "react-native-reanimated";
import { Easing, Value, timing } from "react-native-reanimated";
import { useScreenDimensions } from "../../hooks/dimensions";
const { width } = Dimensions.get("window");
function NetworkModal(props) {
  let [_transX] = useState(new Value(-100));
  const netInfo = useNetInfo();
  const screenData = useScreenDimensions();
  const [show, setShow] = useState(false);
  const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
  const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  const NetwortInfo = async () => {
    props.settingNetworkAlertFalse();
    if (show) {
      if (netInfo.isConnected) {
        props.settingNetworkAlertFalse();
      } else if (netInfo && !netInfo.isConnected) {
        props.settingNetworkAlertTrue();
      }
    }
  };
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
    NetwortInfo();
  }, [netInfo, show]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 6000);
  }, []);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return props.NetworkAlert ? (
    props.NetworkAlert.show ? (
      <Animated.View
        style={[
          styles.offlineContainer,
          { height: heightWidthFn(160).deviceHeight },
        ]}
      >
        <Text
          style={[
            styles.offlineText,
            { fontSize: heightWidthFn(30).deviceHeight },
          ]}
        >
          {lang[`{nointernetconnection}`]}
        </Text>
      </Animated.View>
    ) : null
  ) : null;
}

const mapStateToProps = ({ store }) => ({
  ErrorAlert: store.ErrorAlert,
  currentLanguage: store.currentLanguage,
  NetworkAlert: store.NetworkAlert,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      settingNetworkAlertFalse,
      settingNetworkAlertTrue,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NetworkModal);
const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    position: "absolute",
    top: 0,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
  },
  offlineContainer: {
    backgroundColor: "red",

    justifyContent: "center",
    alignItems: "center",
    width,
    position: "absolute",
    top: 0,
    zIndex: 999999999,
  },
  offlineText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 10,
  },
});
