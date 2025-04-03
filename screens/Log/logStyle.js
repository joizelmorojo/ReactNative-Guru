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
export const LogStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
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
    marginBottom: heightWidthFn(52).deviceHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoBottom: {
    backgroundColor: "white",
    borderRadius: 10,
    width: heightWidthFn(600).devicewidth,
    height: heightWidthFn(235).deviceHeight,
    paddingVertical: heightWidthFn(70).deviceHeight,
    justifyContent:"center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  MainContainer: {
    width: (windowWidth / 1.6),
    height: windowHeight / 1.6,
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  headingMainContainer: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    marginBottom: 112 / 3,
  },
  Logo: {
    backgroundColor: "white",
    padding: 10,
    paddingTop: 15,
    fontSize: 20,
    height: 169 / 3,
    fontWeight: "bold",
  },
  AppName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  Slogan: {
    color: "white",
    marginTop: -5,
    fontSize: 20,
  },
  forgotPassText: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
    marginBottom: heightWidthFn(52).deviceHeight,
  },
  BottomLogoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomSlogan: {
    borderBottomWidth: 4,
    borderBottomColor: "white",
    width: 321 / 3,
    paddingVertical: 5,
    color: "white",
    textAlign: "center",
  },
});
