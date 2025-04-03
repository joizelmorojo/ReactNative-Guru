import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const ModalStyle = () => {
  const screenData = useScreenDimensions(2870, 1242);
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    mainContainer: {
      height: windowHeight,
      width: windowWidth,
      backgroundColor: "rgba(0,0,0,0.2)",
      position: "absolute",
      overflow:"scroll",
      top: -20,
    },

    bgImageStyle: {
      height: heightWidthFn(681).deviceHeight,
      width: "100%",
      alignItems: "center",
      paddingTop: 10,
    },
    bgImage: {
      height: heightWidthFn(481).deviceHeight,
      width: "100%",
    },
    centeredView2: {
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      marginTop: 22,
      width: heightWidthFn(961).devicewidth,
      paddingBottom: heightWidthFn(70).deviceHeight,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    GreenOkButton: {
      width: heightWidthFn(740).devicewidth,
      height: heightWidthFn(150).deviceHeight,
      marginTop: heightWidthFn(120).deviceHeight,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2cfd89",
      alignSelf: "center",
      borderRadius: 25,
    },
    RoboWithCoin: {
      height: heightWidthFn(600).deviceHeight,
      width: heightWidthFn(500).devicewidth,
      resizeMode: "contain",
    },
    winnerText: {
      fontSize: heightWidthFn(77).deviceHeight,
      textAlign: "center",
      fontWeight: "bold",
      color: "#0c51a9",
    },
    SmallText: {
      fontSize: heightWidthFn(30).deviceHeight,
      color: "#0c51a9",
    },
    TrophyWithTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: heightWidthFn(45).deviceHeight,
      marginBottom: heightWidthFn(25).deviceHeight,
    },
    TrophyHelpText: {
      fontSize: heightWidthFn(57).deviceHeight,
      color: "#0c51a9",
    },
    greenTrophyImageContainer: {
      height: heightWidthFn(120).deviceHeight,
      width: heightWidthFn(120).deviceHeight,
      borderRadius: 50,
      justifyContent: "center",
      backgroundColor: "#11df91",
      alignItems: "center",
      marginLeft: heightWidthFn(50).devicewidth,
      shadowColor: "#11df91",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 6,
    },
    Trophy: {
      height: heightWidthFn(60).deviceHeight,
      width: heightWidthFn(60).devicewidth,
    },
    bluebgImage: {
      height: heightWidthFn(497).deviceHeight,
      width: heightWidthFn(864).devicewidth,
    },
    blueBgInnerContainer: {
      marginTop: heightWidthFn(20).deviceHeight,
      marginLeft: heightWidthFn(40).devicewidth,
    },
    innerFlexContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "90%",
    },
    TrophyText: {
      fontSize: heightWidthFn(35).deviceHeight,
      color: "#ffff",
    },
    OrangeTrophyImageContainer: {
      height: heightWidthFn(120).deviceHeight,
      width: heightWidthFn(120).deviceHeight,
      borderRadius: 50,
      justifyContent: "center",
      backgroundColor: "#df6912",
      alignItems: "center",
      marginLeft: heightWidthFn(50).devicewidth,
      shadowColor: "#df6912",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 6,
    },
    middleLine: {
      height: "100%",
      width: 1.5,
      backgroundColor: "#6c699d",
    },
  })
} 
