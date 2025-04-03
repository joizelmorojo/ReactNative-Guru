import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const DrawerNestedOneStyles = () => {
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
    container: {
      backgroundColor: "#ededed",
      height: windowHeight,
      width: windowWidth,
    },
    back: {
      marginTop: (windowHeight * getPercentHeight(110)) / 100,
      marginLeft: (windowWidth * getPercentWidth(35)) / 100,
      width: 20,
      height: 20,
    },
    heading: {
      position: "absolute",
      color: "#2196f3",
      fontSize: (windowHeight * getPercentHeight(60)) / 100,
      fontWeight: "bold",
      width: "80%",
      marginLeft: (windowWidth * getPercentWidth(140)) / 100,
      marginTop: (windowHeight * getPercentHeight(90)) / 100,
    },
    secondDiv: {
      paddingLeft: (windowWidth * getPercentWidth(36)) / 100,
      paddingRight: (windowWidth * getPercentWidth(36)) / 100,
    },
    secondDivInside: {
      minHeight: (windowHeight * getPercentHeight(305)) / 100,
      height: "auto",
      marginTop: (windowHeight * getPercentHeight(60)) / 100,
      width: "100%",
      backgroundColor: "#e5f6fe",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    robo: {
      minHeight: (windowHeight * getPercentHeight(346)) / 100,
      height: "98%",
      width: (windowWidth * getPercentWidth(275)) / 100,
      resizeMode: "contain",
      marginTop: -8,
      marginLeft: (windowWidth * getPercentWidth(75)) / 100,
    },
    roboText: {
      fontSize: windowHeight * getPercentHeight(40) / 100,
      marginTop: (windowHeight * getPercentHeight(90)) / 100,
      color: "#527381",
      width: "60%",
    },
    tableMainDiv: {
      paddingTop: (windowHeight * getPercentHeight(20)) / 100,
      paddingBottom: (windowHeight * getPercentHeight(300)) / 100,
    },
    tr: {
      flexDirection: "row",
      borderBottomColor: "#c0bfc5",
      borderBottomWidth: 2,
      paddingBottom: (windowHeight * getPercentHeight(52)) / 100,
      paddingTop: (windowHeight * getPercentHeight(52)) / 100,
    },
    tr1: {
      backgroundColor: "#0f479f",
      height: (windowHeight * getPercentHeight(118)) / 100,
      width: (windowHeight * getPercentHeight(118)) / 100,
      borderRadius: (windowHeight * getPercentHeight(118)) / 100,
      justifyContent: "center",
      alignItems: "center",
      marginRight: (windowWidth * getPercentWidth(24)) / 100,
    },
    trImage1: {
      height: (windowHeight * getPercentHeight(73)) / 100,
      resizeMode: "contain",
    },
    trImage2: {
      height: (windowHeight * getPercentHeight(90)) / 100,
      resizeMode: "contain",
    },
    trImage3: {
      height: (windowHeight * getPercentHeight(60)) / 100,
      resizeMode: "contain",
    },
    trName: {
      fontSize: (windowHeight * getPercentHeight(43)) / 100,
      fontWeight: "bold",
      color: "#527381",
    },
    trQues: {
      fontSize: (windowHeight * getPercentHeight(43)) / 100,
      color: "#527381",
      marginRight: (windowWidth * getPercentWidth(44)) / 100,
    },
    rightLeftMain: {
      flexDirection: "row",
    },
    rightLeftImage: {
      height: (windowHeight * getPercentHeight(40)) / 100,
      width: (windowHeight * getPercentHeight(40)) / 100,
      resizeMode: "contain",
    },
    rightLeft: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: screenData.isLandscape
        ? "90%"
        : (windowWidth * getPercentWidth(975)) / 100,
      marginTop: (windowHeight * getPercentHeight(20)) / 100,
    },
  });
};
