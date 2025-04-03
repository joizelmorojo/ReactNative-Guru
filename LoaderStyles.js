import { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import useScreenDimensions from './utils/dimention';

export const loaderStyles = () => {
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
        loaderOverlay:{
            position: "absolute",
            top: 0,
            height: windowHeight,
            width: windowWidth,
            backgroundColor: "#ffffff7a",
            zIndex: 999999,
            alignItems: "center",
            justifyContent: "center"
        },
        logo:{
        }
    })
}

