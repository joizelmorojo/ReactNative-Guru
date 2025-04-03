import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pushToHistory, ChangeArea, setLanguage } from "../../redux/actions";
import MyText from "../MyText/MyText";

const ChangeLanguageModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);

        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MyText style={styles.Title}>
              {lang[`{changelanguage}`]}
            </MyText>
            <View style={{
              marginBottom: 15
            }}>
              {props.translation && props.translation.languages && props.translation.languages.map((a, i) => {
                return a.id !== props.defaulLanguage && (
                  <TouchableOpacity
                    onPress={() => {
                      props.setLanguage(a.id)
                      setModalVisible(false);
                    }}
                    key={i}
                    style={styles.list}
                  >
                    <MyText style={{
                      alignSelf: "flex-start", textAlign: "left", fontSize: 16
                    }}>{a.id}</MyText>
                  </TouchableOpacity>
                )
              })}
            </View>
            <View style={{
              flexDirection: "row"
            }}>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", elevation: 2 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ ...styles.textStyle }}>{lang[`{cancel}`]}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.thirdView}
      >
        <MyText style={styles.thirdFirst}>
          {lang[`{changelanguage}`]}
        </MyText>
      </TouchableOpacity>
    </>
  );
};

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  history: store.history,
  currentLanguage: store.currentLanguage,
  TeamChallenge: store.TeamChallenge,
  area: store.area,
  translation: store.translation
});
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  Title: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  thirdView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  list: {
    width: "100%",
    marginTop: 10,
  },
  thirdFirst: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pushToHistory,
      ChangeArea,
      setLanguage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguageModalComponent);
