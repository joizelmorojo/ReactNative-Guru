import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useScreenDimensions } from "../../hooks/dimensions";

export const SearchPageStyles = () => {
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
            height: windowHeight,
            width: windowWidth,
            backgroundColor: "#2195f3",
        },
        main: {
            height: windowHeight,
            width: windowWidth,
            alignItems: "center"
        },
        back: {
            marginTop: windowHeight * getPercentHeight(110) / 100,
            marginLeft: windowWidth * getPercentWidth(35) / 100,
            width: 20,
            height: 20,
        },
        heading: {
            color: "white",
            position: "absolute",
            fontSize: 20,
            fontWeight: "bold",
            top: -(windowHeight * getPercentHeight(80) / 100),
            overflow: "visible",
            textAlign: "left",
            width: "80%"

        },
        inputMain: {
            width: windowWidth * getPercentWidth(800) / 100,
            borderRadius: 25,
            alignItems: "center",
            marginTop: windowHeight * getPercentHeight(290) / 100,
            paddingBottom: windowHeight * getPercentHeight(50) / 100,
        },
        icon: {
            width: windowWidth * getPercentWidth(80) / 100,
            height: windowHeight * getPercentHeight(80) / 100,
        },
        input: {
            color: "white",
            paddingLeft: windowHeight * getPercentHeight(40) / 100,
            paddingRight: windowHeight * getPercentHeight(40) / 100,
            paddingTop: windowHeight * getPercentHeight(10) / 100,
            paddingBottom: windowHeight * getPercentHeight(10) / 100,
        },
        bgImage: {
            height: windowHeight * getPercentHeight(700) / 100,
            resizeMode: "contain",
            top: windowHeight * getPercentHeight(30) / 100,
        },
        searchImage: {
            height: windowHeight * getPercentHeight(100) / 100,
            width: windowHeight * getPercentHeight(100) / 100,
            borderRadius: windowHeight * getPercentHeight(100) / 100,
            marginRight: windowWidth * getPercentWidth(10) / 100,
        },
        flexDiv: {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
        },
        searchText: {
            fontWeight: "bold",
            marginLeft: windowWidth * getPercentWidth(10) / 100,
        },
        searchText2: {
            fontWeight: "normal",
            fontSize: windowHeight * getPercentHeight(26) / 100,
            color: "#2196f3"
        },
        challengeButt: {
            height: windowHeight * getPercentHeight(60) / 100,
            width: windowHeight * getPercentHeight(130) / 100,
            marginLeft: windowWidth * getPercentWidth(40) / 100,
            borderColor: "#2196f3",
            borderWidth: 2,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
        },
        challengeButtText: {
            color: "#2196f3",
            fontSize: windowHeight * getPercentHeight(20) / 100
        }
    });
}