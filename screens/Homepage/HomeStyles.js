import { useEffect, useState } from "react";
import {  StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const HomeStyles = () => {
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
      flex: 1,
    },
    image: {
      height:
        (windowHeight *
          getPercentHeight(screenData.isLandscape ? 1400 : 1345)) /
        100,
      resizeMode: "stretch",
    },
    challenge: {
      color: "#36cdff",
      marginLeft: (windowHeight * getPercentHeight(118)) / 100,
      fontSize: (windowHeight * getPercentHeight(65)) / 100,
      fontWeight: "bold",
      marginTop: (windowHeight * getPercentHeight(30)) / 100,
    },
    trophy: {
      width: (windowHeight * getPercentHeight(48)) / 100,
      height: (windowHeight * getPercentHeight(46)) / 100,
      resizeMode: "contain",
    },
    sliderImage: {
      width: "100%",
      height:
        (windowHeight * getPercentHeight(screenData.isLandscape ? 250 : 229)) /
        100,
      marginTop: (windowHeight * getPercentHeight(30)) / 100,
      display: "flex",
      flexDirection: "row",
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
      borderRadius: 10,
    },
    titleMain: {
      height: "100%",
      justifyContent: "space-between",
    },
    title: {
      fontSize: (windowHeight * getPercentHeight(43)) / 100,
      color: "white",
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: (windowHeight * getPercentHeight(31)) / 100,
      color: "white",
    },
    besideSub: {
      height: (windowHeight * getPercentHeight(60)) / 100,
      width: (windowHeight * getPercentHeight(200)) / 100,
      color: "white",
      fontSize: (windowHeight * getPercentHeight(31)) / 100,
      borderColor: "white",
      borderWidth: 1,
      display: "flex",
      padding: 2,
      borderRadius: 5,
    },
    profileImageShort: {
      height: (windowHeight * getPercentHeight(130)) / 100,
      width: (windowHeight * getPercentHeight(130)) / 100,
      borderRadius: (windowHeight * getPercentHeight(130)) / 100,
      borderColor: "white",
      borderWidth: 2,
    },
    textSearch: {
      color: "#527381",
      marginTop: 5,
    },
    yourTurnMain: {
      paddingLeft: (windowHeight * getPercentHeight(50)) / 100,
      paddingRight: (windowHeight * getPercentHeight(50)) / 100,
      paddingTop: (windowHeight * getPercentHeight(30)) / 100,
      width: "90%",
    },
    yourTurnDiv: {
      flexDirection: "row",
      width: "100%",
    },
    yourTurn: {
      fontSize: (windowHeight * getPercentHeight(69)) / 100,
      fontWeight: "bold",
    },
    first: {
      marginTop: 10,
      alignItems: "center",
      width: (windowWidth * getPercentWidth(135)) / 100,
    },
    workingWomen: {
      width: (windowHeight * getPercentHeight(120)) / 100,
      height: (windowHeight * getPercentHeight(120)) / 100,
      borderRadius: (windowHeight * getPercentHeight(120)) / 100,
      overflow: "hidden",
      zIndex: 2,
      borderColor: "white",
      marginRight: (windowWidth * getPercentWidth(40)) / 100,
      borderWidth: 2,
    },
    line: {
      height: (windowHeight * getPercentHeight(304)) / 100,
      width: 10,
      marginTop: -35,
    },
    lastDiv: {
      width: "100%",
    },
    last1: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    last1In: {
      marginTop: (windowHeight * getPercentHeight(30)) / 100,
    },
    titlee: {
      fontSize: (windowHeight * getPercentHeight(55)) / 100,
      fontWeight: "bold",
      lineHeight: (windowHeight * getPercentHeight(60)) / 100,
    },
    secondT: {
      fontSize: (windowHeight * getPercentHeight(40)) / 100,
      lineHeight: (windowHeight * getPercentHeight(45)) / 100,
    },
    threeDots: {
      position: "absolute",
      right: (windowWidth * getPercentWidth(60)) / 100,
      top: (windowHeight * getPercentHeight(82)) / 100,
      width: (windowWidth * getPercentWidth(90)) / 100,
      height: (windowHeight * getPercentHeight(75)) / 100,
      zIndex: 9999,
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
      overflow:"visible",
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
      zIndex:999999
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
    historyButDiv: {
      width: windowWidth,
      alignItems: "center",
      marginTop: (windowHeight * getPercentHeight(70)) / 100,
    },
    historyBut: {
      backgroundColor: "#f95a35",
      paddingHorizontal: (windowHeight * getPercentHeight(50)) / 100,
      paddingVertical: (windowHeight * getPercentHeight(25)) / 100,
      borderRadius: 50,
    },
    line: {
      height: 50,
      paddingTop: 17,
      textAlign: 'center',
      backgroundColor: 'orange',
      borderWidth: 1,
      borderColor: 'purple',
  }
  });
};
