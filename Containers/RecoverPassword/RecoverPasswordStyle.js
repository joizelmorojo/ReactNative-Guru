import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";
export const RecoverpasswordStyle = () => {
  const screenData = useScreenDimensions();
  const pageHeight = screenData.constantHeightt;
  const pageWidth = screenData.constantWidthh;

  const [heightt, setHeightt] = useState(screenData.constantHeightt);
  const [widthh, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  function getPercentWidth(val) {
    return (val / widthh) * 100;
  }

  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }
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
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

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
    MainContainer: {
      width: windowWidth,
      height: windowHeight,
      alignItems: "center",
      justifyContent: "center",
    },
    LogoBottom: {
      height: (windowHeight * getPercentHeight(211)) / 100,
      width: (windowWidth * getPercentWidth(800)) / 100,
      marginTop: (windowWidth * getPercentWidth(283)) / 100,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "center",
      bottom: (windowHeight * getPercentHeight(80)) / 100,
      position: "absolute",
    },
    logo: {
      marginTop: (windowHeight * getPercentHeight(85)) / 100,
      width: (windowWidth * getPercentWidth(1000)) / 100,
      height: (windowHeight * getPercentHeight(80)) / 10,
      resizeMode: "cover",
    },
    Button: {
      borderWidth: 1,
      borderColor: "white",
      color: "white",
      textAlign: "center",
      height: heightWidthFn(150).deviceHeight,
      padding: 10,
      borderRadius: 30,
      width: heightWidthFn(780).devicewidth,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    NewItem: {
      borderWidth: 2,
      height: heightWidthFn(150).deviceHeight,
      width: heightWidthFn(780).devicewidth,
      alignSelf: "center",
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: heightWidthFn(52).deviceHeight,
    },
    forgotPassText: {
      textAlign: "center",
      color: "white",
      marginBottom: heightWidthFn(52).deviceHeight,
      fontSize: 10,
    },
    form: {
      marginVertical: (windowHeight * getPercentHeight(150)) / 100,
    },
  });
};
