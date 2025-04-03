import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";
export const nextChallengeStyle = () => {
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
    TeamChallengeHeader: {
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
      fontWeight: "bold",
      color: "white",
    },
    smallText: { fontSize: heightWidthFn(30).deviceHeight, color: "white" },
    BottomTitle: { fontSize: heightWidthFn(65).deviceHeight, color: "white" },
    progressView: {
      height: "100%",
      position: "absolute",
      backgroundColor: "#0E3A86",
      borderRadius: 5,
      fontWeight: "bold",
    },
    progressViewBg: {
      width: screenData.isLandscape ? "95%" : heightWidthFn(1024).devicewidth,
      height: heightWidthFn(273).deviceHeight,
      marginVertical: 15,
      borderRadius: 5,
      overflow: "hidden",
    },
    progressTextView: {
      width: heightWidthFn(1024).devicewidth,
      height: heightWidthFn(273).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      
    },
    answerView: {
      width: screenData.isLandscape
        ? heightWidthFn(2000).devicewidth
        : heightWidthFn(1172).devicewidth,
      height: heightWidthFn(305).deviceHeight,
      backgroundColor: "#E5F6FE",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
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
      alignContent: "space-between",
      height: heightWidthFn(250).deviceHeight,
      paddingHorizontal: heightWidthFn(50).deviceHeight,
      paddingVertical: heightWidthFn(10).deviceHeight,
      width:"70%"
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
    settingTextWidth: {
      width: heightWidthFn(800).devicewidth,
    },
    ListContainer: {
      width: heightWidthFn(1100).devicewidth,
      padding: 15,
      alignSelf:"center",
      width:"100%",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  });
};