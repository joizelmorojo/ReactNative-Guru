import React from "react";
import {
    Dimensions,
    StyleSheet,
    View,
} from "react-native";
import MyText from "./MyText/MyText";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const heightt = 2208
const widthh = 1242

function getPercentHeight(val) {
    return (val / heightt) * 100
}

function getPercentWidth(val) {
    return (val / widthh) * 100
}

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexDiv}>
                    <View style={styles.logo}><MyText style={styles.logoText}>LOGO APP</MyText></View>
                    <View style={{ marginLeft: windowWidth * getPercentWidth(10) / 100 }}>
                        <MyText style={styles.name}>NAME APP</MyText>
                        <MyText style={styles.slogan}>Slogan</MyText>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#2195f3",
        alignItems: "center",
        justifyContent: "center"
    },
    flexDiv: {
        flexDirection: "row",
    },
    logo: {
        height: windowHeight * getPercentHeight(172) / 100,
        width: windowWidth * getPercentWidth(327) / 100,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    logoText: {
        color: "#333333",
        fontSize: windowHeight * getPercentHeight(60) / 100,
        fontWeight: "bold"
    },
    name: {
        color: "white",
        fontSize: windowHeight * getPercentHeight(60) / 100,
        fontWeight: "bold"
    },
    slogan: {
        color: "white",
        fontSize: windowHeight * getPercentHeight(60) / 100,
    }
});