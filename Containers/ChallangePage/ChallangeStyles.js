import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const ChallangeStyles = () => {
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
    image: {
      height: (windowHeight * getPercentHeight(795)) / 100,
      resizeMode: "stretch",
    },
    topText: {
      color: "white",
      fontWeight: "bold",
      fontSize: (windowHeight * getPercentHeight(60)) / 100,
      textAlign: "center",
      marginTop: (windowHeight * getPercentHeight(121)) / 100,
    },
    profileDiv: {
      backgroundColor: "white",
      height: (windowHeight * getPercentHeight(358)) / 100,
      width: windowWidth,
      marginTop: (windowHeight * getPercentHeight(259)) / 100,
    },
    profileDivInside: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: -((windowHeight * getPercentHeight(205)) / 100),
    },
    smallCircle1: {
      width: (windowHeight * getPercentHeight(196)) / 100,
      height: (windowHeight * getPercentHeight(196)) / 100,
      backgroundColor: "#2195f3",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: (windowHeight * getPercentHeight(196)) / 100,
    },
    smallCircle2: {
      width: (windowHeight * getPercentHeight(196)) / 100,
      height: (windowHeight * getPercentHeight(196)) / 100,
      backgroundColor: "#8c38e5",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: (windowHeight * getPercentHeight(196)) / 100,
    },
    textSearch: {
      color: "#527381",
      fontSize:10,
      marginTop: (windowHeight * getPercentHeight(20)) / 100,
    },
    bigCircle: {
      width: (windowHeight * getPercentHeight(380)) / 100,
      height: (windowHeight * getPercentHeight(380)) / 100,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: (windowHeight * getPercentHeight(380)) / 100,
      overflow: "hidden",
      borderColor: "white",
      borderWidth: 3,
    },
    profileImage: {
      width: "100%",
      height: "100%",
    },
    seachIcon: {
      width: (windowHeight * getPercentHeight(82)) / 100,
      height: (windowHeight * getPercentHeight(82)) / 100,
    },
    shuffleIcon: {
      width: (windowHeight * getPercentHeight(87)) / 100,
      height: (windowHeight * getPercentHeight(62)) / 100,
    },
    besideCircles: {
      alignItems: "center",
      width: "33.33%",
    },
    name: {
      marginTop: (windowHeight * getPercentHeight(20)) / 100,
      textAlign: "center",
      fontSize: (windowHeight * getPercentHeight(49)) / 100,
      fontWeight: "bold",
    },
    robotDiv: {
      width: screenData.isLandscape
        ? "80%"
        : (windowWidth * getPercentWidth(1150)) / 100,
      height:"auto",
      backgroundColor: "#e5f6fe",
      marginTop: (windowHeight * getPercentHeight(60)) / 100,
      padding: (windowHeight * getPercentHeight(34)) / 100,
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
    },
    robotDivText1: {
      fontSize: (windowHeight * getPercentHeight(50)) / 100,
      fontWeight: "bold",
    },
    robotDivText2: {
      fontSize: (windowHeight * getPercentHeight(35)) / 100,
      marginTop: (windowHeight * getPercentHeight(20)) / 100,
    },
    robotDivImage: {
      height: (windowHeight * getPercentHeight(320)) / 100,
      width: (windowWidth * getPercentWidth(450)) / 100,
      resizeMode: "contain",
      marginTop: -((windowHeight * getPercentHeight(40)) / 100),
    },
    lastFlexDiv: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: windowWidth,
      flexWrap: "wrap",
      paddingBottom: (windowHeight * getPercentHeight(340)) / 100,
      overflow: "visible",
    },
    flexBoxes: {
      width: windowWidth / 3 - (windowWidth * getPercentWidth(60)) / 100,
      marginTop: (windowWidth * getPercentWidth(60)) / 100,
      height: (windowHeight * getPercentHeight(270)) / 100,
      alignItems: "center",
      overflow: "visible",
      zIndex: 2,
    },
    lastDivImages: {
      height: (windowHeight * getPercentHeight(195)) / 100,
      width: (windowHeight * getPercentHeight(195)) / 100,
      resizeMode: "contain",
    },
    textBesideImg: {
      fontSize: (windowHeight * getPercentHeight(40)) / 100,
      marginTop: (windowHeight * getPercentHeight(13)) / 100,
      color: "#527381",
      textAlign:"center",
      alignSelf:"center"
    },
    tooltip: {
      position: "absolute",
      width: "100%",
      height: "80%",
      backgroundColor: "#2196f3",
      borderRadius: 5,
      opacity: 1,
      padding: (windowHeight * getPercentHeight(30)) / 100,
      justifyContent: "center",
      zIndex: 999999999,
    },
    tooltipText: {
      color: "white",
      fontSize: (windowHeight * getPercentHeight(30)) / 100
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: (windowHeight * getPercentHeight(30)) / 100,
      borderRightWidth: (windowHeight * getPercentHeight(30)) / 100,
      borderBottomWidth: (windowHeight * getPercentHeight(60)) / 100,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#2196f3",
      transform: [{ rotate: "180deg" }],
      position: "absolute",
      bottom: -((windowHeight * getPercentHeight(20)) / 100),
      left: (windowWidth * getPercentWidth(150)) / 100,
    },
    threeDots: {
      position: "absolute",
      right: (windowWidth * getPercentWidth(60)) / 100,
      top: (windowHeight * getPercentHeight(82)) / 100,
      width: (windowWidth * getPercentWidth(90)) / 100,
      height: (windowHeight * getPercentHeight(75)) / 100,
      zIndex: 9999,
    },
  });
};
