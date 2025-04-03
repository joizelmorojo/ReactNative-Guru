import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";
export const GetReadyStyles = () => {
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
      backgroundColor: "#f3f5fd",
      height: windowHeight,
      width: windowWidth,
      overflow: "hidden"
    },
    getReadyText: {
      fontSize: heightWidthFn(115).deviceHeight,
      fontWeight: "bold",
      color: "#113d95",
      marginTop: heightWidthFn(150).deviceHeight,
    },
    RoboImageContainer: {
      height: "auto",
      width: "auto",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: heightWidthFn(80).deviceHeight,
      marginVertical: heightWidthFn(88).deviceHeight,
    },
    ShapeBackground: {
      height: heightWidthFn(680).deviceHeight,
      width: heightWidthFn(747).deviceHeight,
    },
    RoboWithRemote: {
      height: heightWidthFn(937).deviceHeight,
      width: heightWidthFn(650).devicewidth,
      resizeMode: "contain"
    },
    shadowImage: {
      height: heightWidthFn(90).deviceHeight,
      width: heightWidthFn(550).devicewidth,
    },
    WomanImage: {
      height: heightWidthFn(106).deviceHeight,
      width: heightWidthFn(106).deviceHeight,
      marginHorizontal: heightWidthFn(51).devicewidth,
      borderRadius: 50,
    },
    WomanImageText: {
      fontSize: heightWidthFn(60).deviceHeight,
      fontWeight: "bold",
      color: "#113d95",
    },
    challengeText: {
      fontSize: heightWidthFn(70).deviceHeight,
      color: "#113d95",
    },
    blueRoundDiv: {
      height: heightWidthFn(255).deviceHeight,
      width: heightWidthFn(255).deviceHeight,
      backgroundColor: "#113f97",
      alignItems: "center",
      borderRadius: heightWidthFn(255).deviceHeight,
      justifyContent: "center",
    },
    blueRoundDivText: {
      fontSize: heightWidthFn(94).deviceHeight,
      color: "#39f5de",
      fontWeight: "bold",
    }
  });
}
