import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const footerStyles = () => {
  const screenData = useScreenDimensions();
  const [heightt, setHeightt] = useState(screenData.constantHeightt);
  const [widthh, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  function getPercentWidth(val) {
    return (val / widthh) * 100;
  }

  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }
  return StyleSheet.create({
    footerMainView: {
      width: windowWidth,
      zIndex: 99,
      height: (windowHeight * getPercentHeight(300)) / 100,
      position: "absolute",
      bottom: 0
    },
    footerMain: {
      width: windowWidth,
      height: 110,
      position: "absolute",
      bottom: 0,
      resizeMode: "cover",
      marginBottom: -((windowHeight * getPercentHeight(80)) / 100),
      flexDirection: "row",
    },
    chellangeIconMain: {
      width: 70,
      height: 70,
      alignItems: "center",
      marginBottom: 0,
      top: -12,
      borderRadius: 70,
      marginBottom: 0,
      zIndex: 1,
    },
    chellangeIcon: {
      width: 130,
      height: 130,
      borderRadius: 70,
      resizeMode: "contain",
      alignItems: "center",
      justifyContent: "center",
      top: 15,
      zIndex: 1,
    },
    chellangeIconImg: {
      width: 25,
      height: 25,
      position: "absolute",
      top: 25,
    },
    homeIcon: {
      width: 38,
      height: "100%",
      position: "absolute",
      resizeMode: "contain",
      top: 25,
      left: (windowWidth * getPercentWidth(72)) / 100,
      zIndex: 1000000,
    },
    homeIconImg: {
      width: "75%",
      height: "25%",
    },
    friendsIcon: {
      width: 35,
      height: "100%",
      position: "absolute",
      resizeMode: "contain",
      top: 25,
      left: (windowWidth * getPercentWidth(315)) / 100,
      zIndex: 1000000,
    },
    friendsIconImg: {
      width: "75%",
      height: "25%",
    },
    statsIcon: {
      width: 40,
      height: "100%",
      position: "absolute",
      resizeMode: "contain",
      top: 25,
      left: (windowWidth * getPercentWidth(813)) / 100,
    },
    statsIconImg: {
      width: "75%",
      height: "25%",
    },
    lastIcon: {
      width: 40,
      height: "100%",
      position: "absolute",
      resizeMode: "contain",
      top: 25,
      left: (windowWidth * getPercentWidth(1074)) / 100,
    },
    lastIconImg: {
      width: "75%",
      height: "25%",
    },

    main: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "baseline",
      bottom: 0,
    },
    firstView: {
      width: windowWidth / 2 - 30,
      height: 110,
      backgroundColor: "white",
    },
    secondView: {
      width: 60,
      height: 55,
      backgroundColor: "white",
    },
    circle: {
      width: 70,
      height: 70,
      position: "absolute",
      zIndex: 9999,
      borderRadius: 70,
      left: (windowWidth * getPercentWidth(530)) / 100,
      borderWidth: 20,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderColor: "red",
      transform: [{ rotate: "50deg" }],
    },
    thirdView: {
      width: windowWidth / 2 - 30,
      height: 110,
      backgroundColor: "white",
    },
  });
};
