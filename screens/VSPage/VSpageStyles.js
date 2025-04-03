import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const VSpageStyles = () => {
    const screenData = useScreenDimensions();
    const [heightt, setHeightt] = useState(screenData.constantHeightt);
    const [widthh, setWidthh] = useState(screenData.constantWidthh);
    const [windowWidth, setwindowWidth] = useState(screenData.width);
    const [windowHeight, setwindowHeight] = useState(screenData.height);
    useEffect(() => {
        setHeightt(screenData.constantHeightt);
        setWidthh(screenData.constantWidthh);
        setwindowWidth(screenData.width);
        setwindowHeight(screenData.height);
    }, [screenData]);

    function getPercentWidth(val) {
        return (val / widthh) * 100;
    }

    function getPercentHeight(val) {
        return (val / heightt) * 100;
    }
    return StyleSheet.create({
        container: {
            backgroundColor: "white",
            height: windowHeight,
            width: windowWidth,
        },
        topDiv: {
            width: "100%",
            backgroundColor: "#2196f3",
            height: windowHeight * getPercentHeight(745) / 100,
            alignItems: "center"
        },
        topHead: {
            flexDirection: "row",
            marginTop: windowHeight * getPercentHeight(85) / 100,
            justifyContent: "center"
        },
        topHeadImg: {
            width: windowHeight * getPercentHeight(80) / 100,
            height: windowHeight * getPercentHeight(80) / 100,
            borderRadius: windowHeight * getPercentHeight(80) / 100,
        },
        topHeadText: {
            fontSize: windowHeight * getPercentHeight(62) / 100,
            color: "white",
            fontWeight: "bold",
            marginLeft: windowWidth * getPercentWidth(18) / 100,
        },
        topHeadText2: {
            fontSize: windowHeight * getPercentHeight(74) / 100,
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        topRobot: {
            height: windowHeight * getPercentHeight(433) / 100,
            width: windowWidth * getPercentWidth(330) / 100,
            marginTop: windowHeight * getPercentHeight(18) / 100,
            resizeMode: "contain"
        },
        VSDiv: {
            height: windowHeight * getPercentHeight(345) / 100,
            marginTop: -(windowHeight * getPercentHeight(133) / 100),
            alignItems: "center",
        },
        vsDivInside: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: screenData.isLandscape ? "60%" : windowWidth * getPercentWidth(960) / 100,
            // alignItems: "center"
        },
        vsImage: {
            width: windowHeight * getPercentHeight(249) / 100,
            height: windowHeight * getPercentHeight(249) / 100,
            borderRadius: windowHeight * getPercentHeight(249) / 100,
            borderWidth: 3,
            borderColor: "white"
        },
        besideVs: {
            marginTop: windowHeight * getPercentHeight(46) / 100,
            fontSize: windowHeight * getPercentHeight(30) / 100,
            color: "#527381"
        },
        vs: {
            fontSize: windowHeight * getPercentHeight(76) / 100,
            fontWeight: "bold",
            color: "#0f469e",
            marginTop: windowHeight * getPercentHeight(180) / 100,
        },
        lastList: {
            width: screenData.isLandscape ? "80%" : windowWidth * getPercentWidth(1140) / 100,
            height: 50,
            marginTop: windowHeight * getPercentHeight(118) / 100,
            alignItems: "center",
        },
        lastListMain: {
            alignItems: "center",
            height: windowHeight * getPercentHeight(1300) / 100,
            marginTop: -(windowHeight * getPercentHeight(118) / 100),
        },
        indivisualMain: {
            height: windowHeight * getPercentHeight(307) / 100,
            justifyContent: "space-evenly"
        },
        indivisualMainActive: {
            height: windowHeight * getPercentHeight(307) / 100,
            justifyContent: "space-evenly",
            backgroundColor: "#2196f3",
            borderRadius: 10
        },
        indivisual: {
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        indivisual1: {
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        text1: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            width: "33.33%",
            textAlign: "center",
            color: "#527381",
        },
        text1Active: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            width: "33.33%",
            textAlign: "center",
            color: "white",
        },
        okButton: {
            width: windowWidth * getPercentWidth(747) / 100,
            height: windowHeight * getPercentHeight(172) / 100,
            backgroundColor: "#2cfd89",
            borderRadius: windowHeight * getPercentHeight(172) / 100,
            alignItems: "center",
            justifyContent: "center",
        },
    });
}