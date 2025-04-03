import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useScreenDimensions from "../../utils/dimention";

export const lastTabStyles = () => {
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
        image: {
            height: windowHeight * getPercentHeight(1222) / 100,
            resizeMode: "stretch",
        },
        topText: {
            color: "white",
            fontWeight: "bold",
            fontSize: windowHeight * getPercentHeight(60) / 100,
            textAlign: "center",
            marginTop: windowHeight * getPercentHeight(121) / 100
        },
        profileDiv: {
            backgroundColor: "white",
            height: windowHeight * getPercentHeight(358) / 100,
            width: windowWidth,
            marginTop: windowHeight * getPercentHeight(259) / 100
        },
        profileDivInside: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: -(windowHeight * getPercentHeight(205) / 100)
        },
        smallCircle1: {
            width: windowHeight * getPercentHeight(196) / 100,
            height: windowHeight * getPercentHeight(196) / 100,
            backgroundColor: "#2195f3",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: windowHeight * getPercentHeight(196) / 100,
        },
        smallCircle2: {
            width: windowHeight * getPercentHeight(196) / 100,
            height: windowHeight * getPercentHeight(196) / 100,
            backgroundColor: "#8c38e5",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: windowHeight * getPercentHeight(196) / 100
        },
        textSearch: {
            color: "#527381",
      fontSize:10,
      marginTop: windowHeight * getPercentHeight(20) / 100
        },
        bigCircle: {
            width: windowHeight * getPercentHeight(380) / 100,
            height: windowHeight * getPercentHeight(380) / 100,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: windowHeight * getPercentHeight(380) / 100,
            overflow: "hidden",
            borderColor: "white",
            borderWidth: 3
        },
        profileImage: {
            width: "100%",
            height: "100%",
        },
        seachIcon: {
            width: windowHeight * getPercentHeight(82) / 100,
            height: windowHeight * getPercentHeight(82) / 100
        },
        shuffleIcon: {
            width: windowHeight * getPercentHeight(87) / 100,
            height: windowHeight * getPercentHeight(62) / 100
        },
        besideCircles: {
            alignItems: "center",
            width: "33.33%"
        },
        name: {
            marginTop: windowHeight * getPercentHeight(20) / 100,
            textAlign: "center",
            fontSize: windowHeight * getPercentHeight(49) / 100,
            fontWeight: "bold"
        },
        top3: {
            marginTop: windowHeight * getPercentHeight(22) / 100,
        },
        top3Text: {
            color: "white",
            textAlign: "center",
            fontSize: windowHeight * getPercentHeight(65) / 100,
            fontWeight: "bold",
        },
        top3Flex: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: windowHeight * getPercentHeight(54) / 100,
        },
        top3Div: {
            width: "32%",
            height: windowHeight * getPercentHeight(190) / 100,
            flexDirection: "row"
        },
        imageView: {
            position: "relative",
            width:"40%"
        },
        top3Images: {
            width: windowHeight * getPercentHeight(120) / 100,
            height: windowHeight * getPercentHeight(120) / 100,
            borderRadius: windowHeight * getPercentHeight(120) / 100,
        },
        badge: {
            position: "absolute",
            width: windowHeight * getPercentHeight(40) / 100,
            height: windowHeight * getPercentHeight(40) / 100,
            borderRadius: windowHeight * getPercentHeight(40) / 100,
            backgroundColor: "#2196f3",
            alignItems: "center",
            justifyContent: "center",
            right: 0
        },
        badgeText: {
            color: "white",
            fontSize: windowHeight * getPercentHeight(32) / 100,
        },
        contentView: {
            justifyContent: "space-evenly",
            marginLeft: windowWidth * getPercentWidth(15) / 100,
            width:"60%"
        },
        contentHead: {
            color: "white",
            fontSize: windowHeight * getPercentHeight(30) / 100,
            fontWeight: "bold"
        },
        contentSubHead: {
            color: "white",
            fontSize: windowHeight * getPercentHeight(25) / 100,
            fontWeight: "bold"
        },

        contentSubChallenge: {
            color: "white",
            fontSize: windowHeight * getPercentHeight(22) / 100,
            height: windowHeight * getPercentHeight(58) / 100,
            paddingTop: windowHeight * getPercentHeight(10) / 100,
            textAlign: "center",
            width: windowWidth * getPercentWidth(126) / 100,
            borderRadius: 2,
            borderColor: "white",
            borderWidth: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold"
        },
        contentSubChallenge2: {
            color: "grey",
            fontSize: windowHeight * getPercentHeight(22) / 100,
            height: windowHeight * getPercentHeight(58) / 100,
            paddingTop: windowHeight * getPercentHeight(10) / 100,
            textAlign: "center",
            width: windowWidth * getPercentWidth(126) / 100,
            borderRadius: 2,
            borderColor: "grey",
            borderWidth: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold"
        },
        table: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: windowWidth * getPercentWidth(102) / 100,
            paddingLeft: windowWidth * getPercentWidth(102) / 100,
            paddingTop: windowWidth * getPercentWidth(14) / 100,
            paddingBottom: windowWidth * getPercentWidth(14) / 100,
        },
        tableActive: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: windowWidth * getPercentWidth(102) / 100,
            paddingLeft: windowWidth * getPercentWidth(102) / 100,
            paddingTop: windowWidth * getPercentWidth(14) / 100,
            paddingBottom: windowWidth * getPercentWidth(14) / 100,
            backgroundColor: "#2196f3"
        },
        tableFirst: {
            flexDirection: "row",
            alignItems: "center"
        },
        sno: {
            fontSize: windowHeight * getPercentHeight(28) / 100,
            marginRight: windowWidth * getPercentWidth(36) / 100,
        },
        tableImage: {
            width: windowHeight * getPercentHeight(95) / 100,
            height: windowHeight * getPercentHeight(95) / 100,
            borderRadius: windowHeight * getPercentHeight(95) / 100,
            marginRight: windowWidth * getPercentWidth(22) / 100,
        },
        tableName: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            color: "#636a6f",
            fontWeight: "bold"
        },
        tablepts: {
            fontSize: windowHeight * getPercentHeight(46) / 100,
            color: "#636a6f",
            fontWeight: "bold"
        },
        tableDiv: {
            paddingBottom: windowHeight * getPercentHeight(400) / 100,
        },
        threeDots: {
            position: "absolute",
            right: windowWidth * getPercentWidth(60) / 100,
            top: windowHeight * getPercentHeight(82) / 100,
            width: windowWidth * getPercentWidth(90) / 100,
            height: windowHeight * getPercentHeight(75) / 100,
        }
    });
}