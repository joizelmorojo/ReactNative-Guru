import { Text } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, BackHandler } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { alert502, ok502, title502 } from "../../env";
import {
  breakStrng,
  pushToHistory,
  removeLastTab,
  setEmptyRegisterField,
  settingErrorAlertFalse,
  TeamChallengeApi,
  UserLogoutWhen501Error,
} from "../../modules/actions";

function AlertModal(props) {
  let [show, setShow] = useState(false)
  const backAction = () => {
    if (
      Actions.currentScene === "AfterVsPage" ||
      Actions.currentScene === "VsPageLose" ||
      Actions.currentScene === "VsPage" ||
      Actions.currentScene === "getReady" ||
      Actions.currentScene === "ChallengeQuestion" ||
      Actions.currentScene === "GetReadyTeam" ||
      Actions.currentScene === "ChallengeQuestionTeam"
    ) {
      return true;
    } else {
      if (props.history.length) {
        if (
          Actions.currentScene === "_drawerNestedOne" ||
          Actions.currentScene === "drawerNestedOne" ||
          Actions.currentScene === "drawerNestedTwo" ||
          Actions.currentScene === "_drawerNestedTwo" ||
          Actions.currentScene === "searchPage" ||
          Actions.currentScene === "_searchPage"
        ) {
          Actions[props.history[props.history.length - 1]]();
        } else if (
          Actions.currentScene === "registration"
          ||
          Actions.currentScene === "_registration"
          ||
          Actions.currentScene === "recoverPassword"
          ||
          Actions.currentScene === "_recoverPassword"
        ) {
          props.setEmptyRegisterField(true)
          Actions.signInForm()
        } else {
          Actions[
            props.history[
            props.history.length > 1 ? props.history.length - 2 : 0
            ]
          ]();
          props.removeLastTab();
        }
      } else {
        BackHandler.exitApp();
      }
      return true;
    }
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const handleClose = () => {
    setShow(false);
    if (Number(props.ErrorAlert.statusCode) === 401) {
      props.UserLogoutWhen501Error()
    }
    if (props.ErrorAlert.statusCode === "successRecoverPassWord") {
      Actions.signInForm();
    }
    if (props.ErrorAlert.statusCode === "dispatch") {
      props.TeamChallengeApi();
    }
    setTimeout(() => {
      props.settingErrorAlertFalse("", "");
    }, 500)
  };
  useEffect(() => {
    if (props.ErrorAlert) {
      setShow(props.ErrorAlert.show)
    }
  }, [props, props.ErrorAlert]);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return (
    <SCLAlert
      theme={
        props.ErrorAlert &&
          props.ErrorAlert.statusCode === "successRecoverPassWord" || props.ErrorAlert && props.ErrorAlert.statusCode === "ReportQuestionSuccess"
          ? "success"
          : "danger"
      }
      show={show}
      title={
        props.ErrorAlert &&
          props.ErrorAlert.statusCode === "successRecoverPassWord" || props.ErrorAlert && props.ErrorAlert.statusCode === "ReportQuestionSuccess"
          ? ""
          : lang["{ooops}"] === undefined ? title502 : lang["{ooops}"]
      }
      headerIconComponent={
        <Image
          source={
            props.ErrorAlert &&
              props.ErrorAlert.statusCode === "successRecoverPassWord" || props.ErrorAlert && props.ErrorAlert.statusCode === "ReportQuestionSuccess"
              ? require("../../allpngandsvg/Objeto_inteligente_vectorial_front.png")
              : require("../../allpngandsvg/Objeto_inteligente_vectorial_front_up.png")
          }
          style={{
            height: 60,
            width: 60,
            resizeMode: "contain",
          }}
        />
      }
      onRequestClose={handleClose}
      subtitleContainerStyle={{
        display: "none",
        marginBottom: 0
      }}
      titleContainerStyle={{
        display: props.ErrorAlert &&
          props.ErrorAlert.statusCode === "successRecoverPassWord" || props.ErrorAlert && props.ErrorAlert.statusCode === "ReportQuestionSuccess"
          ? "none"
          : "flex",
        marginBottom: 0
      }}
    >
      <Text style={{
        fontSize: 18,
        textAlign: "center",
        color: "#555555",
        fontWeight: '300'
      }}>
        {
          props.ErrorAlert
            ? Number(props.ErrorAlert.statusCode) === 409
              ? breakStrng(props.ErrorAlert.message, lang)
              : Number(props.ErrorAlert.statusCode) === 500
                ? lang[`{tryagainmorelate}`]
                : Number(props.ErrorAlert.statusCode) === 401
                  ? lang[`{Unauthorized}`]
                  : Number(props.ErrorAlert.statusCode) === 403
                    ? lang[`{Forbidden}`]
                    : Number(props.ErrorAlert.statusCode) === 404
                      ? lang[`{Not Found}`]
                      : Number(props.ErrorAlert.statusCode) === 408
                        ? lang[`{RequestTimeout}`]
                        : Number(props.ErrorAlert.statusCode) === 400
                          ? lang[`{BadRequest}`] :
                          props.ErrorAlert.statusCode === "ReportQuestionSuccess" ?
                            lang[`{reportthankyou}`]
                            :
                            Number(props.ErrorAlert.statusCode) === 502
                              ? lang[`{servicenotavailable}`] === undefined ? alert502 : lang[`{servicenotavailable}`] :
                              Number(props.ErrorAlert.statusCode) === "newalert"
                                ? props.ErrorAlert.message
                                : props.ErrorAlert.statusCode === "signin" ||
                                  props.ErrorAlert.statusCode === "successRecoverPassWord"
                                  ? breakStrng(props.ErrorAlert.message, lang)
                                  : breakStrng(props.ErrorAlert.message, lang)
            : lang[`{errormessage}`]
        }
      </Text>
      <SCLAlertButton
        theme={
          props.ErrorAlert &&
            props.ErrorAlert.statusCode === "successRecoverPassWord" || props.ErrorAlert && props.ErrorAlert.statusCode === "ReportQuestionSuccess"
            ? "success"
            : "danger"
        }
        onPress={handleClose}
      >
        {lang["{ok}"] === undefined ? ok502 : lang["{ok}"]}
      </SCLAlertButton>
    </SCLAlert>
  );
}

const mapStateToProps = ({ store }) => ({
  ErrorAlert: store.ErrorAlert,
  history: store.history,
  currentLanguage: store.currentLanguage,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      settingErrorAlertFalse,
      pushToHistory,
      removeLastTab,
      TeamChallengeApi,
      setEmptyRegisterField,
      UserLogoutWhen501Error
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
