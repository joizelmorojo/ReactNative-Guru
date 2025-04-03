import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const PreviousChallengeStyle = () => {
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
      backgroundColor: "white",
    },
    threeDots: {
      position: "absolute",
      right: heightWidthFn(60).devicewidth,
      top: heightWidthFn(82).deviceHeight,
      width: heightWidthFn(90).devicewidth,
      height: heightWidthFn(75).deviceHeight,
      zIndex: 9999,
    },
    TeamChallengeHeader: {
      paddingTop: heightWidthFn(100).deviceHeight,
      height: heightWidthFn(470).deviceHeight,
      marginBottom: 20,
      overflow: "hidden",
      justifyContent: "center",
      backgroundColor: "white",
    },
    imageView: {
      height: heightWidthFn(240).deviceHeight,
      width: heightWidthFn(280).devicewidth,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      marginHorizontal: heightWidthFn(33).deviceHeight,
    },
    imageCircle: {
      height: heightWidthFn(240).deviceHeight,
      width: heightWidthFn(240).deviceHeight,
      borderColor: "white",
      borderWidth: 2,
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
      width: heightWidthFn(1024).devicewidth,
      height: heightWidthFn(273).deviceHeight,
      backgroundColor: "#0E3A86",
      marginVertical: 15,
      borderRadius: 5,
    },
    progressViewBg: {
      width: heightWidthFn(1024).devicewidth,
      height: heightWidthFn(273).deviceHeight,
      borderRadius: 5,
      overflow: "hidden",
    },
    progressTextView: {
      width: heightWidthFn(1024).devicewidth,
      height: heightWidthFn(273).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
    },
    answerView: {
      width: "90%",
      minHeight: heightWidthFn(305).deviceHeight,
      backgroundColor: "#E5F6FE",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginTop: heightWidthFn(50).deviceHeight,
      marginBottom: heightWidthFn(85).deviceHeight,
      paddingRight: heightWidthFn(80).devicewidth,
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
      minHeight: heightWidthFn(250).deviceHeight,
      paddingHorizontal: heightWidthFn(40).devicewidth,
      width: "80%",
      paddingVertical: heightWidthFn(10).deviceHeight,
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
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    blueText: {
      color: "#113d95",
      marginTop: -15,
    },
  });
};
