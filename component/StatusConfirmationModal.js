
import React, { useEffect, useState } from 'react';
import { Image, Modal, Platform, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useScreenDimensions } from '../hooks/dimensions';
import MyText from './MyText/MyText';
import { Button, Fab, Icon } from "native-base";
import { IncidentPng } from '../env'
import { Report_IncidentTypes } from '../redux/actions';
function StatusConfirmationModal(props) {
    const screenData = useScreenDimensions();
    const [pageHeight, setHeightt] = useState(screenData.constantHeightt);
    const [pageWidth, setWidthh] = useState(screenData.constantWidthh);
    const [windowWidth, setwindowWidth] = useState(screenData.width);
    const [windowHeight, setwindowHeight] = useState(screenData.height);
    const [ModalVisible, setModalVisible] = useState(false);
    const [idincidenttype, setIncidentTypeId] = useState("")
    const [actions, setActions] = useState([])
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
    let { FabActive, setFabActive, setStop, stop, idquestion } = props
    let lang = props.currentLanguage ? props.currentLanguage[0] : "";

    return (
        <>
            <Fab
                active={FabActive}
                direction="up"
                containerStyle={Platform.OS === "ios" ? { zIndex: 100, right: heightWidthFn(15).devicewidth } : { right: heightWidthFn(15).devicewidth }}
                style={{ backgroundColor: '#5067FF', zIndex: 111, overflow: "hidden" }}
                position="bottomRight"
                onPress={() => {
                    setFabActive(!FabActive)
                    setStop(!stop)
                }}>
                <Image style={{
                    height: "98%",
                    width: "98%",
                    resizeMode: "contain"
                }} source={{
                    uri: IncidentPng
                }} />
                {FabActive && props.incidentData && props.incidentData.map((value, i) => {
                    return (
                        <Button style={{ zIndex: FabActive ? 115 : 100 }} onPress={() => {
                            setIncidentTypeId(value.idincidenttype)
                            setModalVisible(true)
                        }} key={i}>
                            {FabActive ? <MyText style={{ position: "absolute", color: "white", left: heightWidthFn(-550).devicewidth, textAlign: "right", minWidth: 150 }}>{value.name}</MyText> : null}
                            <Button onPress={() => {
                                setIncidentTypeId(value.idincidenttype)
                                setModalVisible(true)
                            }} style={{ backgroundColor: '#5067FF', overflow: "hidden", zIndex: 111, height: "100%", width: "100%" }} rounded>
                                <Image style={{
                                    height: 42,
                                    width: 42,
                                    resizeMode: "contain"
                                }} source={{
                                    uri: value.iconurl
                                }} />
                            </Button>
                        </Button>
                    )
                })
                }
            </Fab>
            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}
                onDismiss={() => setModalVisible(!ModalVisible)}
                onRequestClose={() => {
                    setModalVisible(!ModalVisible);
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPressOut={() => { setModalVisible(!ModalVisible) }}
                    style={{ ...styles.centeredView2, }}>
                    <TouchableWithoutFeedback>
                        <View style={{ ...styles.modalView, width: heightWidthFn(915).devicewidth }}>
                            <View style={{ width: "100%" }}>

                                <MyText style={{
                                    fontSize: heightWidthFn(60).devicewidth,
                                    color: "#333333",
                                    textAlign: "center"
                                }}>
                                    {lang && lang[`{reportconfirmation}`]}
                                </MyText>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: heightWidthFn(70).deviceHeight,
                                    justifyContent: "space-around"
                                }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            props.Report_IncidentTypes(idquestion, idincidenttype)
                                            setModalVisible(!ModalVisible)
                                            setFabActive(!FabActive)
                                            setStop(!stop)
                                            setIncidentTypeId("")
                                        }}
                                        style={{
                                            height: heightWidthFn(80).deviceHeight,
                                            width: "45%",
                                            borderRadius: 20,
                                            alignSelf: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#ff3333",
                                        }}
                                    >
                                        <MyText
                                            style={{
                                                fontSize: heightWidthFn(50).deviceHeight,
                                                color: "#ffffff",
                                                fontWeight: "400"
                                            }}
                                        >{lang && lang[`{yes}`]}</MyText>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(!ModalVisible)
                                            setFabActive(!FabActive)
                                            setStop(!stop)
                                            setIncidentTypeId("")
                                        }}
                                        style={{
                                            height: heightWidthFn(80).deviceHeight,
                                            width: "45%",
                                            borderRadius: 20,
                                            alignSelf: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#ff3333",
                                        }}
                                    >
                                        <MyText
                                            style={{
                                                fontSize: heightWidthFn(50).deviceHeight,
                                                color: "#ffffff",
                                                fontWeight: "400"
                                            }}
                                        >{lang && lang[`{no}`]}</MyText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity >
            </Modal>
        </>
    );
}
const mapStateToProps = ({ store }) => ({
    currentLanguage: store.currentLanguage,
    incidentData: store.incidentData
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            Report_IncidentTypes
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(StatusConfirmationModal)
const styles = StyleSheet.create({
    centeredView1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    centeredView2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 5,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});