import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item, Picker } from 'native-base'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pushToHistory, ChangeArea } from "../../redux/actions";
import MyText from "../MyText/MyText";

const ChangeAreaModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("--Selecciona--")
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return (
    < >
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
              {lang[`{changearea}`]}
            </MyText>
            <MyText style={styles.modalText}>
              {lang[`{warningareatext}`]}
            </MyText>
            <Item picker rounded bordered style={{
              marginBottom: 15
            }}>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={value}
                onValueChange={(value) => setValue(value)}
              >
                <Picker.Item label={"Seleccionar"} value={"Seleccionar"} />
                {props.area && props.area.map((a, i) => (
                  <Picker.Item key={i} label={a.name} value={a.idarea} />
                ))}
              </Picker>
            </Item>
            <View style={{
              flexDirection: "row"
            }}>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", elevation: 2 }}
                onPress={() => {
                  if (value && value !== "Seleccionar") {
                    props.ChangeArea(value)
                    console.log(value)
                    setModalVisible(!modalVisible);
                    props.closeDrawer();
                    setValue("Seleccionar")
                  }
                }}
              >
                <Text style={styles.textStyle}>{lang[`{accept}`]}</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setValue("Sele...")
                }}
              >
                <Text style={{ ...styles.textStyle, color: "#2196F3" }}>{lang[`{cancel}`]}</Text>
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
          {lang[`{changearea}`]}
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
  area: store.area
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
    alignItems: "center",
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
    width: "50%"
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
      ChangeArea
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAreaModalComponent);
