import axios from "axios";
import { apiBase } from "../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

export function getUserData(email, password) {
  return (dispatch) => {
    AsyncStorage.getItem("user").then((a) => {
      dispatch(getUserDataDispatch(JSON.parse(a)));
    });
  };
}

export function signIn(user, token) {
  return (dispatch) => {
    dispatch(LoginUserAndGetUserData(user, token));
    Actions.home();
  };
}

// user data
export function getUserDataApi() {
  return (dispatch) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          console.log(a)
          return axios({
            method: "get",
            url: `${apiBase}app/general/user-info/`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                console.log(response.data, "new data");
                AsyncStorage.setItem("user", JSON.stringify(response.data));
                dispatch(LoginUserAndGetUserData(response.data, a));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function UserLogoutWhen501Error() {
  return (dispatch) => {
    AsyncStorage.setItem("authToken", "");
    dispatch(settingLogout());
    AsyncStorage.setItem("user", "").then(() => {
      Actions.signInForm();
    });
  }
}
// logout
export function logout(email, password) {
  return (dispatch) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}app/logout`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          }).then((res) => {
            AsyncStorage.setItem("authToken", "");
            dispatch(settingLogout());
            AsyncStorage.setItem("user", "").then(() => {
              Actions.signInForm();
            });
          });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

// get languages
export function getLanguage() {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${apiBase}public/language`,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 1500,
    })
      .then((response) => {
        if (
          response.data &&
          response.data !== undefined &&
          typeof response.data !== "string"
        ) {
          dispatch(translation(response.data));
        }
      })
      .catch((error) => {
        dispatch(settingLoaderFalse());
        if (error.response && error.message) {
          dispatch(settingErrorAlertTrue(error.message, error.response.status));
        }
      });
  };
}

export const SET_DEFAULT_LANGUAGE = "SET_DEFAULT_LANGUAGE"
export const defaultlanguageSet = (language) => ({
  type: SET_DEFAULT_LANGUAGE,
  payload: { language },
});
//set language name
export function setLanguage(language) {
  return (dispatch) => {
    AsyncStorage.setItem("Default_Lang", language)
    console.log(language)
    dispatch(defaultlanguageSet(language));
  };
}
export const SET_TRANSLATION_LANGUAGE = "SET_TRANSLATION_LANGUAGE";
export const languageSet = (language) => ({
  type: SET_TRANSLATION_LANGUAGE,
  payload: { language },
});

// get search friends
export function searchFriends(filter) {
  return (dispatch) => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/individualchallenge/search-friends/${filter}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(gettingFriendList(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export const SET_FRIENDS_LIST = "SET_FRIENDS_LIST";
export const gettingFriendList = (friends) => ({
  type: SET_FRIENDS_LIST,
  payload: { friends },
});

// get random challenge object
export function startRandomChallenge(filter) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}app/individualchallenge/start-random-challenge`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response, "new challenge");
              if (
                //200
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingRandomChallengeObj(response.data));
                dispatch(settingLoaderFalse());
                Actions.getReady({ param: true });
              }
            })
            .catch((error) => {
              console.log(
                error.response,
                error.message,
                "sdhdaskldkaskdaskasdjk"
              );
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                console.log(error.response, error.message);
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",
                    error.response.status
                  )
                );
              } else {
                dispatch(settingErrorAlertTrue("oop something went wrong", ""));
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

// post next round object
export function nextRound(id) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/individualchallenge/next-round/${id}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                if (response.data.questions.length) {
                  dispatch(settingRandomChallengeObj(response.data));
                  Actions.getReady({ param: true });
                } else {
                }
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",

                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export function acceptChallenge(id) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}app/individualchallenge/accept-challenge/${id}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
            data: {},
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                if (response.data.questions.length) {
                  dispatch(settingRandomChallengeObj(response.data));
                  Actions.getReady({ param: true });
                }
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",

                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export const SET_RANDOM_CHALLENGE_OBJ = "SET_RANDOM_CHALLENGE_OBJ";
export const settingRandomChallengeObj = (randomChallengeObj) => ({
  type: SET_RANDOM_CHALLENGE_OBJ,
  payload: { randomChallengeObj },
});

export function startIndivisualChallenge(id, redirect) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}app/individualchallenge/start-new-challenge/${id}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(settingRandomChallengeObj(response.data));

                if (redirect) {
                  Actions.ChallengeQuestion();
                } else {
                  Actions.getReady({ param: true });
                }
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",

                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export function challengeSuggestions(filter) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/individualchallenge/challenge-suggestions`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(settingSuggestionArray(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",
                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export const SET_CHALLANGE_SUGGESTIONS = "SET_CHALLANGE_SUGGESTIONS";
export const settingSuggestionArray = (suggestionArray) => ({
  type: SET_CHALLANGE_SUGGESTIONS,
  payload: { suggestionArray },
});

export function yourTurnOpponentTurn() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/individualchallenge/yourturns-opponentturns`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(settingYourTurnOpponentTurnObj(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export const SET_YOURTURN_OPPONENTTURN_OBJ = "SET_YOURTURN_OPPONENTTURN_OBJ";
export const settingYourTurnOpponentTurnObj = (yourTurnOpponentTurnObj) => ({
  type: SET_YOURTURN_OPPONENTTURN_OBJ,
  payload: { yourTurnOpponentTurnObj },
});

export function endRound(obj) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}app/individualchallenge/end-round`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
            data: obj,
          })
            .then((response) => {
              console.log(response.data, "aodjkaso");

              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(settingRoundObj(response.data));
                if (response.data.message === "{youwonchallenge}") {
                  Actions.VsPage();
                } else if (response.data.message === "{youlostchallenge}") {
                  Actions.VsPageLose();
                } else if (response.data.message === "{youlosetheround}") {
                  Actions.VsPageLose();
                } else if (response.data.message === "{youwontheround}") {
                  Actions.VsPage();
                } else if (response.data.message === "{waityourturn}") {
                  Actions.AfterVsPage();
                } else {
                  Actions.VsPage();
                }
              }
            })
            .catch((error) => {
              console.log(error);
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",
                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export function getLeaderBoards() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/leaderboards/`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLeaderBoards(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function individual_challenge_history() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        dispatch(settingIndividualChallengeHistory([]));
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/individualchallenge/challenge-history`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                setTimeout(() => {
                  dispatch(settingIndividualChallengeHistory(response.data));
                  dispatch(settingLoaderFalse());
                }, 300);
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              console.log(error.message);
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.messageError
                      ? error.response.data.messageError
                      : "",
                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Badges_Api() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/badges`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingBADGES(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Statistics_Api() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "get",
            url: `${apiBase}app/statistics`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingStatistics(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Change_ProfilePhoto(file, idTeam) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "post",
            url: `${apiBase}user/app/change-profile-photo`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
            data: {
              file,
              idTeam,
            },
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              } else {
                console.log(error.message);
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function TeamChallengeApi(noRedirecrt) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          console.log(a);
          return axios({
            method: "GET",
            url: `${apiBase}app/teamchallenge/`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                console.log(response.data, "runnn");
                let { challengeStatus } = response.data;
                if (challengeStatus === "NOT_TEAM_CHALLENGE_ACTIVE" &&
                  noRedirecrt !== "noRedirecrt") {
                  dispatch(pushToHistory("_previousChallenge"));
                  Actions.previousChallenge();
                }
                if (
                  challengeStatus ===
                  "NOT_TEAM_CHALLENGE_ACTIVE_WITH_NOTIFICATION" &&
                  noRedirecrt !== "noRedirecrt"
                ) {
                  dispatch(pushToHistory("_previousChallenge"));
                  Actions.previousChallenge();
                }
                if (challengeStatus === "TEAM_CHALLENGE_ACTIVE_IS_YOUR_TURN" &&
                  noRedirecrt !== "noRedirecrt") {
                  dispatch(pushToHistory("_teamChallenge"));
                  Actions.teamChallenge();
                }
                if (
                  challengeStatus === "TEAM_CHALLENGE_ACTIVE_WAIT_YOUR_TURN" &&
                  noRedirecrt !== "noRedirecrt"
                ) {
                  dispatch(pushToHistory("_nextChallenge"));
                  Actions.nextChallenge();
                }
                dispatch(setTeamChallenge(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              console.log(error.response);
              if (error.response && error.message) {
                console.log(error.message);
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data && error.response.data.messageError,
                    error.response.status
                  )
                );
              } else {
                console.log(error.message);
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export function TeamChallengeStartChallenge() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          console.log(a);
          return axios({
            method: "POST",
            url: `${apiBase}app/teamchallenge/start-round`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              dispatch(settingLoaderFalse());
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                console.log(response.data, "questionss");
                dispatch(settingRandomChallengeObj(response.data));
                Actions.GetReadyTeam({ param: true });
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              console.log(error.message);
              if (error.response) {
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data && error.response.data.message
                      ? error.response.data.message
                      : "{teamchallengeisover}",
                    "dispatch"
                  )
                );
              } else {
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export function TeamChallengeEndChallenge(obj) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then((a) => {
          return axios({
            method: "POST",
            url: `${apiBase}app/teamchallenge/end-round`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
            data: obj,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                console.log(response.data, "data");
                dispatch(settingRoundObj(response.data));
                Actions.teamProgress();
              }
            })
            .catch((error) => {
              if (error.response) {
                dispatch(settingLoaderFalse());
                dispatch(
                  settingErrorAlertTrue(
                    error.response.data.message
                      ? error.response.data.message
                      : "",
                    error.response.status
                  )
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

// get stre
export function StrengthAndWeakness() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/strengthsweaknesses`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                console.log(response.data);
                dispatch(settingLoaderFalse());
                dispatch(settingStrengthAndWeakness(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Area_Api() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/area`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "areaa")
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(settingArea(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function ChangeArea(idArea) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "put",
            url: `${apiBase}app/area/${idArea}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "areaa")
              dispatch(settingLoaderFalse());
              dispatch(getUserDataApi())
              dispatch(Area_Api())
              dispatch(challengeSuggestions())
              dispatch(getLeaderBoards())
              dispatch(Statistics_Api())
              dispatch(Badges_Api())
              dispatch(TeamChallengeApi("noRedirecrt"))
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}

export const RegisterAreaList = (comapnyName) => {

  return (dispatch) => {
    var config = {
      method: 'get',
      url: `${apiBase}public/area/${comapnyName}`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        dispatch(getAreaListDispatch(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

}
export const RegisterTeamList = (idarea) => {

  return (dispatch) => {
    var config = {
      method: 'get',
      url: `${apiBase}public/team/${idarea}`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        dispatch(getTeamListDispatch(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

}

export const RegistrationApi = (comapnyName, data) => {

  return (dispatch) => {
    var config = {
      method: 'post',
      url: `${apiBase}public/new-register/${comapnyName}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(setEmptyRegisterField(true));
          dispatch(
            settingErrorAlertTrue("{emailnewpasswordnewuser}", "successRecoverPassWord")
          );
        }
      })
      .catch(function (error) {
        if (!error.response.data.success) {
          dispatch(
            settingErrorAlertTrue(error.response.data.messageError, "newalert")
          );
        }
      });
  };

}
export const breakStrng = (a, lang) => {
  if (a && lang) {
    let str = a.toString().replace(/\s/g, "-");
    var re = /\s*(\{[a-z]+\})\s*/g;
    var splt = str.split(re).filter(Boolean);
    let arr = splt;
    let string = "";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].match("{")) {
        string += lang[arr[i]];
      } else {
        string += arr[i].toString().replace(/-/g, " ");
      }
    }

    return string;
  }
};
export function Get_advertisement() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/advertisement`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "areaa")
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(getAdvertismentDataDispatch(response.data));
              }
            })
            .catch((error) => {
              console.log(error.response , error.message);
              dispatch(settingLoaderFalse());
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Post_advertisement_action(id,action) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "post",
            url: `${apiBase}app/advertisement/${id}/${action}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "areaa")
              if (
                response.data &&
                response.data !== undefined &&
                response.data === "Ok"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(getAdvertismentDataDispatch(""));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Get_IncidentTypes() {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "get",
            url: `${apiBase}app/incidenttypes`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "areaa")
              if (
                response.data &&
                response.data !== undefined &&
                typeof response.data !== "string"
              ) {
                dispatch(settingLoaderFalse());
                dispatch(getIncidentDataDispatch(response.data));
              }
            })
            .catch((error) => {
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export function Report_IncidentTypes(idQuestion,idType) {
  return (dispatch) => {
    dispatch(settingLoaderTrue());
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        AsyncStorage.getItem("authToken").then(async (a) => {
          return await axios({
            method: "post",
            url: `${apiBase}app/incident/${idQuestion}/${idType}`,
            headers: {
              Authorization: `Bearer ${JSON.parse(a)}`,
            },
            timeout: 1500,
          })
            .then((response) => {
              console.log(response.data, "jdhsjkahd")
              if (
                response.data &&
                response.data !== undefined
              ) {
                dispatch(settingLoaderFalse());
                dispatch(
                  settingErrorAlertTrue(response.data, "ReportQuestionSuccess")
                );
              }
            })
            .catch((error) => {
              console.log(error)
              dispatch(settingLoaderFalse());
              if (error.response && error.message) {
                dispatch(
                  settingErrorAlertTrue(error.message, error.response.status)
                );
              }
            });
        });
      } else {
        dispatch(settingLoaderFalse());
      }
    });
  };
}
export const GET_ADVERTISEMENT_DATA = "GET_ADVERTISEMENT_DATA";
export const getAdvertismentDataDispatch = (AdvertismentData) => ({
  type: GET_ADVERTISEMENT_DATA,
  payload: { AdvertismentData },
});
export const GET_INCIDENT_TYPE_DATA = "GET_INCIDENT_TYPE_DATA";
export const getIncidentDataDispatch = (incidentData) => ({
  type: GET_INCIDENT_TYPE_DATA,
  payload: { incidentData },
});
export const GET_REGISTRATION_Team_LIST = "GET_REGISTRATION_Team_LIST";
export const getTeamListDispatch = (registrationTeamList) => ({
  type: GET_REGISTRATION_Team_LIST,
  payload: { registrationTeamList },
});
export const EMPTY_REGISTER_FIELD = "EMPTY_REGISTER_FIELD";
export const setEmptyRegisterField = (EmptyField) => ({
  type: EMPTY_REGISTER_FIELD,
  payload: { EmptyField },
});

export const GET_REGISTRATION_AREA_LIST = "GET_REGISTRATION_AREA_LIST";
export const getAreaListDispatch = (registrationAreaList) => ({
  type: GET_REGISTRATION_AREA_LIST,
  payload: { registrationAreaList },
});

export const GET_USER_DATA = "GET_USER_DATA";
export const getUserDataDispatch = (user) => ({
  type: GET_USER_DATA,
  payload: { user },
});

export const SET_TRANSLATION = "SET_TRANSLATION";
export const translation = (translation) => ({
  type: SET_TRANSLATION,
  payload: { translation },
});

export const USER_LOGOUT = "USER_LOGOUT";
export const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: {},
});

export const USER_LOGIN_AND_GET_USER_DATA = "USER_LOGIN_AND_GET_USER_DATA";
export const LoginUserAndGetUserData = (user, authToken) => ({
  type: USER_LOGIN_AND_GET_USER_DATA,
  payload: { user, authToken },
});

export const SET_LEADERBOARDS = "SET_LEADERBOARDS";
export const settingLeaderBoards = (leaderBoards) => ({
  type: SET_LEADERBOARDS,
  payload: { leaderBoards },
});

export const individualChallengeHistory = "individual_challenge_history";
export const settingIndividualChallengeHistory = (
  individual_challenge_history
) => ({
  type: individualChallengeHistory,
  payload: { individual_challenge_history },
});

export const SET_BADGES = "BADGES";
export const settingBADGES = (badges) => ({
  type: SET_BADGES,
  payload: { badges },
});

export const SET_STATISTICS = "SET_STATISTICS";
export const settingStatistics = (Statistics) => ({
  type: SET_STATISTICS,
  payload: { Statistics },
});

export const SET_LOADER_TRUE = "SET_LOADER_TRUE";
export const settingLoaderTrue = () => ({
  type: SET_LOADER_TRUE,
  payload: { loader: true },
});

export const SET_LOADER_FALSE = "SET_LOADER_FALSE";
export const settingLoaderFalse = () => ({
  type: SET_LOADER_FALSE,
  payload: { loader: false },
});

export const SET_DRAWER_OPENED_FALSE = "SET_DRAWER_OPENED_FALSE";
export const settingDrawerOpenedFalse = () => ({
  type: SET_DRAWER_OPENED_FALSE,
  payload: { drawerOpened: false },
});

export const SET_DRAWER_OPENED_TRUE = "SET_DRAWER_OPENED_TRUE";
export const settingDrawerOpenedTrue = () => {
  console.log(
    "action.js || trest"
  );
  return {
    type: SET_DRAWER_OPENED_TRUE,
    payload: { drawerOpened: true },
  }
};

export const settingErrorAlertTrue = (message, statusCode) => ({
  type: SET_ERROR_ALERT,
  payload: { show: true, message, statusCode },
});
export const LOGOUT = "LOGOUT";
export const settingLogout = () => ({
  type: LOGOUT,
  payload: {},
});

export const SET_ERROR_ALERT = "SET_ERROR_ALERT";
export const settingErrorAlertFalse = (message, statusCode) => ({
  type: SET_ERROR_ALERT,
  payload: { show: false, message, statusCode },
});

export const settingNetworkAlertTrue = () => ({
  type: SET_Network_ALERT,
  payload: { show: true },
});

export const SET_Network_ALERT = "SET_Network_ALERT";
export const settingNetworkAlertFalse = () => ({
  type: SET_Network_ALERT,
  payload: { show: false },
});

export const SET_ROUNDS_OBJ = "SET_ROUNDS_OBJ";
export const settingRoundObj = (roundObj) => ({
  type: SET_ROUNDS_OBJ,
  payload: { roundObj },
});

export const SET_STRENGTH_AND_WEAKNESS = "SET_STRENGTH_AND_WEAKNESS";
export const settingStrengthAndWeakness = (strengthAndWeakness) => ({
  type: SET_STRENGTH_AND_WEAKNESS,
  payload: { strengthAndWeakness: strengthAndWeakness },
});

export const SET_AREA = "SET_AREA";
export const settingArea = (area) => ({
  type: SET_AREA,
  payload: { area: area },
});
export function pushToHistory(currentTab) {
  return (dispatch) => {
    dispatch(SettingHistory(currentTab));
  };
}

export const SET_HISTORY = "SET_HISTORY";
export const SettingHistory = (currentTab) => ({
  type: SET_HISTORY,
  payload: { currentTab },
});

export function removeLastTab(currentTab) {
  return (dispatch) => {
    dispatch(removingLastTab(currentTab));
  };
}

export const REMOVE_LAST_TAB = "REMOVE_LAST_TAB";
export const removingLastTab = (currentTab) => ({
  type: REMOVE_LAST_TAB,
  payload: { currentTab },
});

export const SettingTeamChallenge = "SettingTeamChallenge";
export const setTeamChallenge = (TeamChallenge) => ({
  type: SettingTeamChallenge,
  payload: { TeamChallenge },
});
