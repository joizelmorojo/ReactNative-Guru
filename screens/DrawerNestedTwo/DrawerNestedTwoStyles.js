import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const DrawerNestedTwoStyles = () => {
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
            backgroundColor: "#ededed",
            height: windowHeight,
            width: windowWidth,
        },
        back: {
            marginTop: windowHeight * getPercentHeight(110) / 100,
            marginLeft: windowWidth * getPercentWidth(35) / 100,
            width: 20,
            height: 20,
        },
        heading: {
            position: "absolute",
            color: "#2196f3",
            fontSize: windowHeight * getPercentHeight(60) / 100,
            fontWeight: "bold",
            width: "80%",
            marginLeft: windowWidth * getPercentWidth(140) / 100,
            marginTop: windowHeight * getPercentHeight(90) / 100,
        },
        secondDiv: {
            paddingLeft: windowWidth * getPercentWidth(36) / 100,
            paddingRight: windowWidth * getPercentWidth(36) / 100,
        },
        secondDivInside: {
            height: windowHeight * getPercentHeight(305) / 100,
            marginTop: windowHeight * getPercentHeight(60) / 100,
            width: "100%",
            backgroundColor: "#e5f6fe",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        robo: {
            height: windowHeight * getPercentHeight(256) / 100,
            width: windowWidth * getPercentWidth(306) / 100,
            resizeMode: "contain",
            marginLeft: windowWidth * getPercentWidth(20) / 100,
            marginTop: windowHeight * getPercentHeight(20) / 100,
        },
        roboText: {
            fontSize: windowHeight * getPercentHeight(40) / 100,
            marginTop: windowHeight * getPercentHeight(60) / 100,
            color: "#527381",
            marginLeft: windowWidth * getPercentWidth(75) / 100,
            width: "50%"
        },
        tableMainDiv: {
            alignItems: "center",
            marginTop: windowHeight * getPercentHeight(94) / 100,
            paddingBottom: windowHeight * getPercentHeight(350) / 100,
        },
        tr: {
            flexDirection: "row",
            width: screenData.isLandscape ? "90%" : windowWidth * getPercentWidth(1098) / 100,
            borderBottomWidth: 2,
            borderBottomColor: "#c0bfc5",
            paddingTop: windowHeight * getPercentHeight(20) / 100,
            paddingBottom: windowHeight * getPercentHeight(20) / 100,
            alignItems: "center"
        },
        image: {
            height: windowHeight * getPercentHeight(100) / 100,
            width: windowHeight * getPercentHeight(100) / 100,
            borderRadius: windowHeight * getPercentHeight(100) / 100,
            marginRight: windowHeight * getPercentHeight(20) / 100,
        },
        name: {
            fontSize: windowHeight * getPercentHeight(45) / 100,
            color: "#527381",
            fontWeight: "bold",
            width: windowWidth * getPercentWidth(550) / 100,
            lineHeight: windowHeight * getPercentHeight(60) / 100
        },
        besideName: {
            fontSize: windowHeight * getPercentHeight(35) / 100,
            color: "red",
        },
        ratio: {
            fontSize: windowHeight * getPercentHeight(40) / 100,
            color: "#527381",
            fontWeight: "bold"
        },
        ratioMain: {
            position: "absolute",
            right: windowWidth * getPercentWidth(50) / 100,
        }

    });
}