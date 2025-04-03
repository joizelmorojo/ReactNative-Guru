import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const SignInFormStyles = () => {
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
      backgroundColor: "#08045e",
      height: windowHeight,
      width: windowWidth,
    },
    background: {
      width: windowWidth,
      height: screenData.isLandscape ? "auto" : windowHeight,
      alignItems: "center",
      paddingBottom: screenData.isLandscape ? 100 : 0,
      resizeMode: "cover",
    },
    logoImage: {
      height: (windowHeight * getPercentHeight(0)) / 100,
      width: (windowWidth * getPercentWidth(0)) / 100,
      marginTop: (windowWidth * getPercentWidth(0)) / 100,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    logoText: {
      fontSize: (windowHeight * getPercentHeight(0)) / 100,
      fontWeight: "bold",
    },
    slogan: {
      marginTop: (windowHeight * getPercentHeight(0)) / 100,
      color: "white",
      fontSize: (windowHeight * getPercentHeight(0)) / 100,
      fontWeight: "bold",
    },
    nameApp: {
      marginTop: (windowHeight * getPercentHeight(85)) / 100,
      width: (windowWidth * getPercentWidth(1000)) / 100,
      height: (windowHeight * getPercentHeight(80)) / 10,
      resizeMode: "cover"
    },
    nameAppText: {
      color: "white",
      fontSize: (windowHeight * getPercentHeight(0)) / 100,
      fontWeight: "bold",
    },
    form: {
      width: (windowWidth * getPercentWidth(1100)) / 100,
      height: (windowHeight * getPercentHeight(910)) / 100,
      marginTop: (windowHeight * getPercentHeight(45)) / 100,
      paddingTop: (windowHeight * getPercentHeight(80)) / 100,
      backgroundColor: "white",
      borderRadius: 5,
      alignItems: "center",
    },
    suffix: {
      height: (windowHeight * getPercentHeight(60)) / 100,
      width: (windowWidth * getPercentWidth(60)) / 100,
      resizeMode: "contain",
      marginRight: (windowWidth * getPercentWidth(60)) / 100,
    },
    suffix1: {
      height: (windowHeight * getPercentHeight(45)) / 100,
      width: (windowWidth * getPercentWidth(65)) / 100,
      resizeMode: "contain",
      marginRight: (windowWidth * getPercentWidth(60)) / 100,
    },
    input: {
      width: (windowWidth * getPercentWidth(880)) / 100,
      fontSize: (windowHeight * getPercentHeight(56)) / 100,
      borderColor: "transparent",
    },
    hr: {
      height: 2,
      backgroundColor: "#e5e5e5",
      width: (windowWidth * getPercentWidth(880)) / 100,
      marginTop: (windowHeight * getPercentHeight(20)) / 100,
      marginBottom: (windowHeight * getPercentHeight(20)) / 100,
    },
    button: {
      width: (windowWidth * getPercentWidth(710)) / 100,
      height: (windowHeight * getPercentHeight(145)) / 100,
      backgroundColor: "#0762a8",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      marginTop: (windowHeight * getPercentHeight(80)) / 100,
    },
    buttonText: {
      color: "white",
      fontSize: (windowHeight * getPercentHeight(52)) / 100,
    },
    threeLineMain: {
      flexDirection: "row",
    },
    line: {
      width: (windowWidth * getPercentWidth(140)) / 100,
      marginTop: (windowHeight * getPercentHeight(50)) / 100,
      marginRight: (windowWidth * getPercentWidth(10)) / 100,
      height: 5,
      backgroundColor: "#cde0ee",
      borderRadius: 5,
    },
  })
}

