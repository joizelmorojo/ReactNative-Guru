import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const thirdTabPageStyles = () => {
  const screenData = useScreenDimensions();
  const pageHeight = screenData.constantHeightt;
  const pageWidth = screenData.constantWidthh;
  const windowWidth = screenData.width;
  const windowHeight = screenData.height;
  const heightt = screenData.constantHeightt;
  const widthh = screenData.constantWidthh;
  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }

  function getPercentWidth(val) {
    return (val / widthh) * 100;
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
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: windowHeight,
      width: windowWidth,
    },
    image: {
      height: (windowHeight * getPercentHeight(710)) / 100,
      resizeMode: "stretch",
    },
    threeDots: {
      position: "absolute",
      right: (windowWidth * getPercentWidth(60)) / 100,
      top: (windowHeight * getPercentHeight(82)) / 100,
      width: (windowWidth * getPercentWidth(90)) / 100,
      height: (windowHeight * getPercentHeight(75)) / 100,
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
      height: (windowHeight * getPercentHeight(281)) / 100,
      width: windowWidth,
      marginTop: (windowHeight * getPercentHeight(259)) / 100,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
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
    StatsMainDiv: {
      width: screenData.isLandscape ? "90%" : heightWidthFn(1164).devicewidth,
      height: heightWidthFn(157).deviceHeight,
      marginTop: heightWidthFn(80).deviceHeight,
      backgroundColor: "#0e1130",
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      zIndex: 1,
    },
    statsText: {
      color: "white",
      fontSize: heightWidthFn(50).deviceHeight,
      alignSelf: "center",
      width: "45%",
    },
    twoIconView: {
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "40%",
    },
    staticsIcon: {
      height: heightWidthFn(88).deviceHeight,
      width: heightWidthFn(96).devicewidth,
    },
    RoboFronticon: {
      height: heightWidthFn(170).deviceHeight,
      width: heightWidthFn(300).devicewidth,
      zIndex: 3,
      resizeMode: "contain",
    },
    mainProgressDiv: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: screenData.isLandscape ? "90%" : heightWidthFn(1084).devicewidth,
      marginVertical: heightWidthFn(20).deviceHeight,
      alignSelf: "center",
    },
    FlexDivs: {
      width: "20%",
      alignItems: "center",
    },
    ProgressHelpText: {
      textAlign: "center",
      fontSize: heightWidthFn(27).devicewidth,
      color: "#527381",
    },
    LineView: {
      width: "12%",
      alignItems: "center",
      marginTop: heightWidthFn(-60).deviceHeight,
    },
    lineText: {
      width: heightWidthFn(140).devicewidth,
      height: heightWidthFn(10).deviceHeight,
      borderRadius: 10,
      backgroundColor: "#4a00e0",
    },
    percentageViewContainer: {
      width: screenData.isLandscape ? "90%" : heightWidthFn(1160).devicewidth,
      minHeight: heightWidthFn(250).deviceHeight,
      paddingTop:heightWidthFn(30).deviceHeight,
      paddingBottom:heightWidthFn(30).deviceHeight,
      alignSelf: "center",
      backgroundColor: "#e5f6fe",
      flexDirection: "row",
      justifyContent: "space-evenly",
      borderRadius: 5,
    },
    percentageHelpText: {
      width: "60%",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    percentageTextContainer: {
      width: "30%",
      justifyContent: "center",
    },
    percentageText: {
      fontSize: heightWidthFn(100).deviceHeight,
      fontWeight: "bold",
      color: "#ff6415",
    },
    MainContainerRoboWithText: {
      width: screenData.isLandscape ? "90%" : heightWidthFn(1064).devicewidth,
      minHeight: heightWidthFn(213).deviceHeight,
      marginVertical: heightWidthFn(40).deviceHeight,
      alignSelf: "center",
      flexDirection: "row",
      backgroundColor: "white",
      shadowColor: "#e5f6fe",
      borderRadius: 5,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    CategoryRobo: {
      width: heightWidthFn(330).devicewidth,
      height: heightWidthFn(200).deviceHeight,
      resizeMode: "contain",
    },
    CategoryText: {
      width: screenData.isLandscape ? "80%" : "60%",
      justifyContent: "flex-end",
      paddingBottom: heightWidthFn(50).deviceHeight,
    },
    LastDivBgImage: {
      height: "auto",
      width: "auto",
      paddingHorizontal: heightWidthFn(116).devicewidth,
      paddingVertical: heightWidthFn(47).deviceHeight,
    },
    ListMainDiv: {
      flexDirection: "row",
      marginVertical: heightWidthFn(35).deviceHeight,
    },
    smallDP: {
      height: heightWidthFn(109).deviceHeight,
      width: heightWidthFn(109).deviceHeight,
      marginHorizontal: heightWidthFn(36).devicewidth,
      borderRadius: 50,
    },
    morechallengeTXT: {
      color: "#2fecec",
      fontSize: heightWidthFn(30).deviceHeight,
    },
    ProfileName: {
      color: "#ffff",
      fontSize: heightWidthFn(40).deviceHeight,
      fontWeight: "bold",
    },
  });
};
