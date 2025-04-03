import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const AfterVsPageStyles = () => {
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
        afterRobot: {
            flexDirection: "row",
            justifyContent: "center"
        },
        robotText: {
            marginTop: windowHeight * getPercentHeight(43) / 100,
            marginLeft: windowWidth * getPercentWidth(43) / 100,
        },
        robotTextFont: {
            fontSize: windowHeight * getPercentHeight(55) / 100,
            fontWeight: "bold",
            color: "white"
        },
        topRobot: {
            height: windowHeight * getPercentHeight(260) / 100,
            width: windowWidth * getPercentWidth(369) / 100,
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
            width: windowWidth * getPercentWidth(960) / 100,
            justifyContent: "center"
        },
        vsImage: {
            width: windowHeight * getPercentHeight(249) / 100,
            height: windowHeight * getPercentHeight(249) / 100,
            borderRadius: windowHeight * getPercentHeight(249) / 100,
            borderWidth: 3,
            borderColor: "white",
        },
        besideVs: {
            marginTop: windowHeight * getPercentHeight(20) / 100,
            fontSize: windowHeight * getPercentHeight(40) / 100,
            color: "#527381",
            fontWeight: "bold"
        },
        vs: {
            fontSize: windowHeight * getPercentHeight(76) / 100,
            fontWeight: "bold",
            color: "#0f469e",
            marginTop: windowHeight * getPercentHeight(180) / 100,
        },
        lastList: {
            width: screenData.isLandscape ? "80%" : windowWidth * getPercentWidth(1145) / 100,
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
            width: "100%",
            justifyContent: "space-evenly",
        },
        indivisualMainActive: {
            height: windowHeight * getPercentHeight(307) / 100,
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "#2196f3",
            borderRadius: 10
        },
        indivisual: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        indivisual1: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start"
        },
        text1: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            marginRight: windowWidth * getPercentWidth(40) / 100,
            marginLeft: windowWidth * getPercentWidth(40) / 100,
            width: "33.33%",
            textAlign: "left",
            color: "#527381",
        },
        text12: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            marginRight: windowWidth * getPercentWidth(40) / 100,
            marginLeft: windowWidth * getPercentWidth(40) / 100,
            width: "33.33%",
            textAlign: "right",
            color: "#527381",
        },
        text1Active: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            width: "33.33%",
            textAlign: "left",
            color: "white",
            marginRight: windowWidth * getPercentWidth(40) / 100,
            marginLeft: windowWidth * getPercentWidth(40) / 100,
        },
        text1Active2: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            width: "33.33%",
            textAlign: "right",
            color: "white",
            marginRight: windowWidth * getPercentWidth(40) / 100,
            marginLeft: windowWidth * getPercentWidth(40) / 100,
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