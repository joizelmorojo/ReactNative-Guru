import {
  GET_USER_DATA,
  SET_CHALLANGE_SUGGESTIONS,
  SET_FRIENDS_LIST,
  SET_LEADERBOARDS,
  SET_RANDOM_CHALLENGE_OBJ,
  SET_ROUNDS_OBJ,
  SET_TRANSLATION,
  SET_TRANSLATION_LANGUAGE,
  SET_YOURTURN_OPPONENTTURN_OBJ,
  USER_LOGIN_AND_GET_USER_DATA,
  SET_LOADER_TRUE,
  SET_LOADER_FALSE,
  individualChallengeHistory,
  SET_BADGES,
  SET_STATISTICS,
  SET_ERROR_ALERT,
  SET_Network_ALERT,
  SET_STRENGTH_AND_WEAKNESS,
  SET_HISTORY,
  REMOVE_LAST_TAB,
  LOGOUT,
  SettingTeamChallenge,
  SET_AREA,
  SET_DEFAULT_LANGUAGE,
  GET_REGISTRATION_AREA_LIST,
  GET_REGISTRATION_Team_LIST,
  EMPTY_REGISTER_FIELD,
  GET_ADVERTISEMENT_DATA,
  GET_INCIDENT_TYPE_DATA
} from "./actions";

const initialState = {
  user: {},
  defaulLanguage: "Spanish",
  loader: false,
  drawerOpened: false,
  NetworkAlert: {
    show: false,
  },
  suggestionArray: [],
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_TRUE:
      return {
        ...state,
        loader: true,
      };
    case SET_LOADER_FALSE:
      return {
        ...state,
        loader: false,
      };
    case USER_LOGIN_AND_GET_USER_DATA:
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_TRANSLATION:
      let currentLanguage = action.payload.translation.languages.find(
        (a) => a.id === state.defaulLanguage
      );
      return {
        ...state,
        translation: action.payload.translation,
        currentLanguage: currentLanguage.texts,
      };
    case SET_TRANSLATION_LANGUAGE:
      let currentLanguage2 = state.translation.languages.find(
        (a) => a.id === action.payload.language
      );
      return {
        ...state,
        defaulLanguage: action.payload.language,
        translation: action.payload.translation,
        currentLanguage: currentLanguage2.texts,
      };
    case SET_DEFAULT_LANGUAGE:
      console.log(action.payload)
      let currentLanguage3 = state.translation.languages.find(
        (a) => a.id === action.payload.language
      );
      return {
        ...state,
        defaulLanguage: action.payload.language,
        currentLanguage: currentLanguage3.texts,
      };
    case SET_FRIENDS_LIST:
      return {
        ...state,
        friendList: action.payload.friends,
      };
    case SET_RANDOM_CHALLENGE_OBJ:
      return {
        ...state,
        randomChallengeObj: action.payload.randomChallengeObj,
      };
    case SET_CHALLANGE_SUGGESTIONS:
      return {
        ...state,
        suggestionArray: action.payload.suggestionArray,
      };
    case SET_YOURTURN_OPPONENTTURN_OBJ:
      return {
        ...state,
        yourTurnOpponentTurnObj: action.payload.yourTurnOpponentTurnObj,
      };
    case SET_ROUNDS_OBJ:
      return {
        ...state,
        roundObj: action.payload.roundObj,
      };
    case SET_LEADERBOARDS:
      return {
        ...state,
        leaderBoards: action.payload.leaderBoards,
      };
    case individualChallengeHistory:
      return {
        ...state,
        individual_challenge_history:
          action.payload.individual_challenge_history,
      };
    case SET_BADGES:
      return {
        ...state,
        badges: action.payload.badges,
      };
    case SET_STATISTICS:
      return {
        ...state,
        statistics: action.payload.Statistics,
      };
    case SET_ERROR_ALERT:
      return {
        ...state,
        ErrorAlert: action.payload,
      };
    case SET_Network_ALERT:
      return {
        ...state,
        NetworkAlert: action.payload,
      };
    case SET_STRENGTH_AND_WEAKNESS:
      return {
        ...state,
        strengthAndWeakness: action.payload.strengthAndWeakness,
      };
    case SET_HISTORY:
      let arr = initialState.history;
      if (action.payload.currentTab !== arr[arr.length - 1]) {
        arr.push(action.payload.currentTab);
      }
      return {
        ...state,
        history: arr,
      };
    case REMOVE_LAST_TAB:
      let arr2 = initialState.history;
      arr2 = arr2.splice(arr2.length - 1, 1);
      return {
        ...state,
        history: arr2,
      };
    case LOGOUT:
      return {
        user: {},
        currentLanguage: state.currentLanguage,
        defaulLanguage: state.defaulLanguage,
        loader: false,
        NetworkAlert: {
          show: false,
        },
        suggestionArray: [],
        history: [],
        registrationAreaList: state.registrationAreaList,
        registrationTeamList: state.registrationTeamList
      };
    case SettingTeamChallenge:
      return {
        ...state,
        TeamChallenge: action.payload.TeamChallenge
      }
    case SET_AREA:
      return {
        ...state,
        area: action.payload.area
      }
    case GET_REGISTRATION_AREA_LIST:
      return {
        ...state,
        registrationAreaList: action.payload.registrationAreaList
      }
    case GET_REGISTRATION_Team_LIST:
      return {
        ...state,
        registrationTeamList: action.payload.registrationTeamList
      }
    case EMPTY_REGISTER_FIELD:
      return {
        ...state,
        emptyField: action.payload.EmptyField
      }
    case GET_ADVERTISEMENT_DATA:
      return {
        ...state,
        AdvertismentData: action.payload.AdvertismentData
      }
    case GET_INCIDENT_TYPE_DATA:
      return {
        ...state,
        incidentData: action.payload.incidentData
      }
    default:
      return { ...state };
  }
};
