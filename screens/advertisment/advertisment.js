import { Icon } from "native-base";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    Image,
    Modal,
    TouchableHighlight,
    View,
    Linking,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import MyText from "../../component/MyText/MyText";
import { Post_advertisement_action, pushToHistory } from "../../redux/actions";
import { ModalStyle } from "./ModalStyle";

const ModalComponent = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const screenData = useScreenDimensions(2870, 1242);
    const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
    const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
    const [windowWidth, setwindowWidth] = useState(screenData.width);
    const [windowHeight, setwindowHeight] = useState(screenData.height);
    useEffect(() => {
        setHeightt(screenData.constantHeightt);
        setWidthh(screenData.constantWidthh);
        setwindowWidth(screenData.width);
        setwindowHeight(screenData.height);
    }, [screenData]);
    const heightWidthFn = (value) => {
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

    useEffect(() => {
        if (props.AdvertismentData) {
            setModalVisible(true);
        } else {
            setModalVisible(false);
        }
    }, [props.AdvertismentData]);

    const styles = ModalStyle();
    let lang = props.currentLanguage ? props.currentLanguage[0] : "";
    let data = props.AdvertismentData ? props.AdvertismentData : {}
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onDismiss={() => props.Post_advertisement_action(data.idAdvertisement, "close")}
            supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
            onRequestClose={() => {
                props.Post_advertisement_action(data.idAdvertisement, "close")
            }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPressOut={() => { props.Post_advertisement_action(data.idAdvertisement, "close") }}
                style={{ ...styles.centeredView2, ...styles.mainContainer }}>
                <TouchableWithoutFeedback>
                    <View >
                        <ScrollView
                        >
                            <View
                                style={[
                                    styles.modalView,
                                    { backgroundColor: "white", flex: 0 },
                                ]}
                            >
                                <ImageBackground
                                    style={styles.bgImageStyle}
                                    imageStyle={styles.bgImage}
                                    source={{
                                        uri: data.backgroundurl ? data.backgroundurl : ""
                                    }}
                                >
                                    <TouchableOpacity onPress={() => props.Post_advertisement_action(data.idAdvertisement, "close")} style={{
                                        alignSelf: "flex-end",
                                        marginRight: 10
                                    }} >

                                        <Icon type="FontAwesome" name="close" />
                                    </TouchableOpacity>
                                    <View style={{
                                        width: "100%",
                                        alignItems: "center"
                                    }}>
                                        <MyText style={{ color: data.textColor && `#${data.textColor}`, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>

                                            {data.titulo && data.titulo}
                                        </MyText>
                                        <Image
                                            style={styles.RoboWithCoin}
                                            source={{
                                                uri: data.imageUrl ? data.imageUrl : ""
                                            }}
                                        />
                                    </View>
                                </ImageBackground>
                                <View style={{
                                    marginTop: 15,
                                    width: "100%",
                                    padding: 6,
                                    alignItems: "center"
                                }}>
                                    <MyText style={{ color: data.textColor && `#${data.textColor}`, fontSize: 13, textAlign: "center" }}>
                                        {data.text && data.text}
                                    </MyText>
                                </View>
                            </View>
                            <TouchableHighlight
                                style={[
                                    styles.GreenOkButton,
                                    { marginBottom: screenData.isLandscape ? 50 : 0, backgroundColor: data.buttonColor && `#${data.buttonColor}` },
                                ]}
                                onPress={() => {
                                    props.Post_advertisement_action(data.idAdvertisement, "moreinfo")
                                    Linking.openURL(data.linkButton && data.linkButton)
                                }}
                            >
                                <MyText
                                    style={{
                                        textAlign: "center",
                                        color: data.textButtonColor && `#${data.textButtonColor}`
                                    }}
                                >
                                    {data.buttonText && data.buttonText}
                                </MyText>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity >
        </Modal>
    );
};

const mapStateToProps = ({ store }) => ({
    user: store.user,
    defaulLanguage: store.defaulLanguage,
    history: store.history,
    currentLanguage: store.currentLanguage,
    TeamChallenge: store.TeamChallenge,
    AdvertismentData: store.AdvertismentData
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            pushToHistory,
            Post_advertisement_action
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
