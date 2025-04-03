import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const heightt = 2208;
const widthh = 1242;

function getPercentHeight(val) {
  return (val / heightt) * 100;
}

function getPercentWidth(val) {
  return (val / widthh) * 100;
}
const heightWidthFn = (value) => {
  let height = (value / heightt) * 100;
  let width = (value / widthh) * 100;
  let deviceHeight = (windowHeight * height) / 100;
  let devicewidth = (windowWidth * width) / 100;
  return {
    height,
    width,
    deviceHeight,
    devicewidth,
  };
};
export const ChallengeQuestion1optionpageStyle = StyleSheet.create({
  container: {
    backgroundColor: "#2196f3",
    height: windowHeight,
    width: windowWidth,
  },
  topText: {
    marginTop: heightWidthFn(109).deviceHeight,
  },
  WomanImage: {
    height: heightWidthFn(106).deviceHeight,
    width: heightWidthFn(106).deviceHeight,
    marginRight: heightWidthFn(51).devicewidth,
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
  },
  listMainDiv: {
    paddingVertical: heightWidthFn(73).deviceHeight,
    paddingHorizontal: heightWidthFn(54).devicewidth,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    fontSize: heightWidthFn(37).deviceHeight,
    color: "#022e80",
  },
  listHr: {
    backgroundColor: "#90caf9",
    marginVertical: heightWidthFn(45).deviceHeight,
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
    height: heightWidthFn(366).deviceHeight,
    width: windowWidth,
    backgroundColor: "#21ff84",
    position: "absolute",
    bottom: 0 ,
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
