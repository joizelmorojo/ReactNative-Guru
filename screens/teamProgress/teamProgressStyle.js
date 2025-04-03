import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const teamProgressStyle = () => {
  const screenData = useScreenDimensions();
  const pageHeight = screenData.constantHeightt;
  const pageWidth = screenData.constantWidthh;
  const windowWidth = screenData.width;
  const windowHeight = screenData.height;

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
      width: windowWidth,
      height: windowHeight,
      overflow: "scroll",
      color: "white",
    },
    TeamProgressHeader: {
      paddingTop: heightWidthFn(200).deviceHeight,
      height: heightWidthFn(800).deviceHeight,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    threeDots: {
      position: "absolute",
      right: heightWidthFn(60).devicewidth,
      top: heightWidthFn(80).deviceHeight,
      width: heightWidthFn(90).devicewidth,
      height: heightWidthFn(75).deviceHeight,
    },
    imageView: {
      width: 62.3,
      height: 62.3,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      marginHorizontal: 64 / 3,
    },
    imageCircle: {
      width: 62.3,
      height: 62.3,
      borderRadius: 50,
    },
    FamilyImage: {
      width: "80%",
      height: "100%",
    },
    Title: {
      fontSize: heightWidthFn(53).deviceHeight,
      fontWeight: "600",
      color: "white",
    },
    smallText: { fontSize: heightWidthFn(30).deviceHeight, color: "white" },
    BottomTitle: { fontSize: heightWidthFn(65).deviceHeight, color: "white" },
    progressView: {
      width: screenData.isLandscape ? "95%" : heightWidthFn(956).devicewidth,
      height: heightWidthFn(189).deviceHeight,
      // backgroundColor: "#0E3A86",
      marginVertical: 15,
      borderRadius: 20,
    },
    progressViewBg: {
      width: heightWidthFn(956).devicewidth,
      height: heightWidthFn(189).deviceHeight,
      borderRadius: 20,
      overflow: "hidden",
    },
    progressTextView: {
      width: heightWidthFn(956).devicewidth,
      height: heightWidthFn(189).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",

    },
    answerView: {
      width: screenData.isLandscape
        ? heightWidthFn(2000).devicewidth : heightWidthFn(1172).devicewidth,
      height: heightWidthFn(299).deviceHeight,
      backgroundColor: "#E5F6FE",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      zIndex: 1,
      marginBottom: heightWidthFn(85).deviceHeight,
      marginLeft: screenData.isLandscape ? heightWidthFn(-100).devicewidth : 0,
    },
    ChallengeRanking: {
      height: heightWidthFn(217).deviceHeight,
      paddingHorizontal: heightWidthFn(15).deviceHeight,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "white",
    },
    SubBody: {
      backgroundColor: "white",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    answerViewContainer: {

    },
    answerText: {
      width: heightWidthFn(816).devicewidth,
      paddingHorizontal: heightWidthFn(41).deviceHeight,
      color: "white",
      fontWeight: "bold",
      paddingVertical: 6,
      borderRadius: 5,
      backgroundColor: "#39F03E",
    },
    ListContainer: {
      width: heightWidthFn(1100).devicewidth,
      padding: 15,
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    TeamProgressButton: {
      width: heightWidthFn(1008).devicewidth,
      minHeight: heightWidthFn(169).deviceHeight,
      backgroundColor: "#1a6edf",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
    },
    TeamProgressButtonText: {
      fontSize: heightWidthFn(60).deviceHeight,
      color: "white",
      textAlign: "center",
    },
    remarkDiv: {
      width: heightWidthFn(988).devicewidth,
      paddingVertical: heightWidthFn(20).deviceHeight,
      paddingTop: heightWidthFn(61).deviceHeight,
      paddingHorizontal: heightWidthFn(64).devicewidth,
      // height: heightWidthFn(169).deviceHeight,
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
      borderRadius: 5,
    },
    remarkDiv2: {
      width: heightWidthFn(988).devicewidth,
      paddingHorizontal: heightWidthFn(64).devicewidth,
      // height: heightWidthFn(169).deviceHeight,
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
      borderRadius: 5,
    },
    helpingText: {
      width: heightWidthFn(1008).devicewidth,
      minHeight: heightWidthFn(169).deviceHeight,
      marginTop: heightWidthFn(50).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
    },
    GreenOkButton: {
      width: heightWidthFn(740).devicewidth,
      height: heightWidthFn(100).deviceHeight,
      marginTop: heightWidthFn(120).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2cfd89",
      alignSelf: "center",
      borderRadius: 25,
    },
  })
}
