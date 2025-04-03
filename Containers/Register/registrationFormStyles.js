import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const Registrationsyles = () => {
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
  function getPercentWidth(val) {
    return (val / pageWidth) * 100;
  }

  function getPercentHeight(val) {
    return (val / pageHeight) * 100;
  }
  return StyleSheet.create({
    background: {
      width: windowWidth,
      alignItems: "center",
      paddingBottom: screenData.isLandscape ? 100 : heightWidthFn(100).deviceHeight,
      resizeMode: "cover",
    },
    container: {
      height: windowHeight,
      width: windowWidth,
    },
    logoImage: {
      height: heightWidthFn(400).deviceHeight,
      resizeMode: "contain",
    },
    WhiteContainer: {
      width: "90%",
      backgroundColor: "white",
      padding: heightWidthFn(25).devicewidth,
      borderRadius: heightWidthFn(25).devicewidth,
      marginBottom: heightWidthFn(43).deviceHeight,
    },
    containerHeading: {
      color: "#090554",
      fontSize: heightWidthFn(52).devicewidth,
      textAlign: "center",
      fontWeight: "bold"
    },
    containerHeading2: {
      color: "#666666",
      fontSize: heightWidthFn(45).devicewidth,
      textAlign: "center",
    },
    input: {
      width: "95%",
      fontSize: (windowHeight * getPercentHeight(52)) / 100,
      borderColor: "transparent",
      alignSelf: "center"
    },
    suffix1: {
      height: (windowHeight * getPercentHeight(45)) / 100,
      width: (windowWidth * getPercentWidth(65)) / 100,
      resizeMode: "contain",
    },
    registerButton: {
      height: heightWidthFn(187).deviceHeight,
      width: "60%",
      backgroundColor: "#006699",
      borderRadius: heightWidthFn(93).deviceHeight,
      justifyContent: "center",
      alignItems: "center"
    },
    requiredStar: {
      color: "red",
      fontSize: heightWidthFn(60).devicewidth,
      marginTop: heightWidthFn(-20).deviceHeight
    }
  })
}

