import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";
export const ChallengeQuestionStyles = () => {
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
      backgroundColor: "#2196f3",
      height: windowHeight,
      width: windowWidth,
      paddingTop: heightWidthFn(109).deviceHeight,
    },
    questionImage: {
      height: heightWidthFn(600).deviceHeight,
      width: "100%",
    },
    counter: {
      position: "absolute",
      marginTop: heightWidthFn(0).deviceHeight,
      right: heightWidthFn(106).deviceHeight,
      height: heightWidthFn(157).deviceHeight,
      width: heightWidthFn(157).deviceHeight,
      backgroundColor: "#21ff84",
      borderRadius: heightWidthFn(157).deviceHeight,
      alignItems: "center",
      justifyContent: "center",
    },
    WomanImage: {
      height: heightWidthFn(106).deviceHeight,
      width: heightWidthFn(106).deviceHeight,
      marginHorizontal: heightWidthFn(51).devicewidth,
      borderRadius: 50,
    },
    WomanImageText: {
      fontSize: heightWidthFn(55).deviceHeight,
      fontWeight: "bold",
      color: "white",
    },
    QuestionMaindiv: {
      marginTop: heightWidthFn(184).deviceHeight,
      marginHorizontal: heightWidthFn(54).devicewidth,
    },
    Question: {
      fontSize: heightWidthFn(55).deviceHeight,
      marginBottom: heightWidthFn(55).deviceHeight,
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    codeQuestion: {
      fontSize: heightWidthFn(40).deviceHeight,
      marginBottom: heightWidthFn(30).deviceHeight,
      width: "80%",
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    listMainDiv: {
      paddingVertical: heightWidthFn(73).deviceHeight,
      paddingHorizontal: heightWidthFn(54).devicewidth,
      backgroundColor: "white",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "96%",
      alignSelf: "center"
    },
    list: {
      fontSize: heightWidthFn(37).deviceHeight,
      paddingVertical: heightWidthFn(45).deviceHeight,
      color: "#022e80",
      width: "80%",
    },
    listHr: {
      backgroundColor: "#90caf9",
      height: 2,
    },
    greenCircle: {
      height: heightWidthFn(157).deviceHeight,
      width: heightWidthFn(157).deviceHeight,
      backgroundColor: "#21ff84",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    bottomGreenContainer: {
      marginTop: heightWidthFn(550).deviceHeight,
      minHeight: heightWidthFn(366).deviceHeight,
      height: "auto",
      width: windowWidth,
      backgroundColor: "#21ff84",
      position: "absolute",
      justifyContent: "center",
    },
    bottomRedContainer: {
      marginTop: heightWidthFn(550).deviceHeight,
      minHeight: heightWidthFn(366).deviceHeight,
      height: "auto",
      width: windowWidth,
      backgroundColor: "#FE2180",
      position: "absolute",
      justifyContent: "center",
    },
    smallWhiteDiv: {
      height: heightWidthFn(97).deviceHeight,
      width: heightWidthFn(325).devicewidth,
      backgroundColor: "white",
      borderRadius: 5,
      alignSelf: "flex-end",
      marginTop: heightWidthFn(-120).deviceHeight,
      marginRight: heightWidthFn(93).devicewidth,
      marginBottom: heightWidthFn(30).deviceHeight,
      alignItems: "center",
      justifyContent: "center",
    },
    smallWhiteDivText: {
      fontSize: heightWidthFn(45).deviceHeight,
      color: "#022e80",
    },
    mainDiv: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    MainDivText: {
      fontSize: heightWidthFn(70).deviceHeight,
      color: "#022e80",
    },
    RoboImageLeft: {
      height: heightWidthFn(205).deviceHeight,
      width: heightWidthFn(350).devicewidth,
      resizeMode: "contain"
    }
  });
}