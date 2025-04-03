import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
let pageHeight = 2208;
let pageWidth = 1242;
let heightWidthFn = (value) => {
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
function getPercentHeight(val) {
  return (val / pageHeight) * 100;
}

function getPercentWidth(val) {
  return (val / pageWidth) * 100;
}
export const ActivityRoundStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    overflow: "scroll",
    color: "white",
  },
  ActivityRoundHeader: {
    paddingTop: heightWidthFn(200).deviceHeight,
    height: heightWidthFn(750).deviceHeight,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: heightWidthFn(75).devicewidth,
    height: heightWidthFn(75).devicewidth,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 50,
    marginRight: 10,
    marginLeft: -50,
  },
  imageCircle: {
    width: heightWidthFn(75).devicewidth,
    height: heightWidthFn(75).devicewidth,
    borderRadius: 50,
  },
  ActivityRoundHeaderContainer: {
    width: heightWidthFn(820).devicewidth,
    alignItems: "center",
    justifyContent: "space-between",
  },
  personalText: {
    color: "white",
    fontSize: heightWidthFn(55).deviceHeight,
    fontWeight: "bold",
  },
  WaitText: {
    color: "white",
    fontSize: heightWidthFn(76).deviceHeight,
    fontWeight: "bold",
    marginVertical: 5,
  },
  roboLeftImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  roboLeftImage: {
    height: heightWidthFn(190).deviceHeight,
    width: heightWidthFn(320).devicewidth,
    resizeMode: "contain"
  },
  VSDiv: {
    alignItems: "center",
  },
  vsDivInside: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: (windowWidth * getPercentWidth(960)) / 100,
  },
  vsImage: {
    width: (windowHeight * getPercentHeight(253)) / 100,
    height: (windowHeight * getPercentHeight(253)) / 100,
    borderRadius: (windowHeight * getPercentHeight(253)) / 100,
  },
  besideVs: {
    marginTop: 6,
    fontSize: (windowHeight * getPercentHeight(40)) / 100,
    color: "#527381",
  },
  vs: {
    fontSize: heightWidthFn(37).deviceHeight,
    fontWeight: "bold",
    width: heightWidthFn(195).devicewidth,
    height: heightWidthFn(74).deviceHeight,
    color: "white",
    backgroundColor: "#2196f3",
    textAlign: "center",
    paddingVertical: heightWidthFn(10).deviceHeight,
    alignItems:"center",
    justifyContent:"center",
    marginTop: (windowHeight * getPercentHeight(180)) / 100,
    borderRadius: 5,
  },
  lastList: {
    width: heightWidthFn(786).deviceHeight,
    alignItems: "center",
  },
  lastListMain: {
    alignItems: "center",
    backgroundColor: "#d9eeff",
  },
  indivisualMain: {
    justifyContent: "space-evenly",
  },
  indivisualMainActive: {
    height: (windowHeight * getPercentHeight(307)) / 100,
    justifyContent: "space-evenly",
    backgroundColor: "#2196f3",
    borderRadius: 10,
  },
  indivisual: {
    flexDirection: "row",
    marginVertical: heightWidthFn(60).deviceHeight,
    justifyContent: "space-evenly",
  },
  indivisual1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text1: {
    fontSize: (windowHeight * getPercentHeight(36)) / 100,
    width: "33.33%",
    textAlign: "center",
    color: "#527381",
  },
  text1Active: {
    fontSize: (windowHeight * getPercentHeight(46)) / 100,
    width: "33.33%",
    textAlign: "center",
    color: "white",
  },
  okButton: {
    width: (windowWidth * getPercentWidth(747)) / 100,
    height: (windowHeight * getPercentHeight(172)) / 100,
    backgroundColor: "#2cfd89",
    borderRadius: (windowHeight * getPercentHeight(172)) / 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
