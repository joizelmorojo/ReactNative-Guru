import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon, Input, Item } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity as TouchableOpacity1,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useScreenDimensions } from "../../hooks/dimensions";
import { withPreventDoubleClick } from "../../component/MyButton/MyButton";
import {
  removeLastTab,
  searchFriends,
  startIndivisualChallenge,
} from "../../redux/actions";
import { SearchPageStyles } from "./SearchPageStyles";
const TouchableOpacity = withPreventDoubleClick(TouchableOpacity1);
function SearchPage(props) {
  const screenData = useScreenDimensions();

  function getPercentWidth(val) {
    return (val / widthh) * 100;
  }

  function getPercentHeight(val) {
    return (val / heightt) * 100;
  }
  const [heightt, setHeightt] = useState(screenData.constantHeightt);
  const [widthh, setWidthh] = useState(screenData.constantWidthh);
  const [windowWidth, setwindowWidth] = useState(screenData.width);
  const [windowHeight, setwindowHeight] = useState(screenData.height);
  const [buttonDisable, setbuttonDisable] = useState(false);

  useEffect(() => {
    setHeightt(screenData.constantHeightt);
    setWidthh(screenData.constantWidthh);
    setwindowWidth(screenData.width);
    setwindowHeight(screenData.height);
  }, [screenData]);

  const styles = SearchPageStyles();

  const [click, setClick] = useState(false);
  const [filter, setFilter] = useState("");
  const [Time, setTime] = useState(0);
  const clickTrue = (ev) => {
    ev.preventDefault();
    setClick(true);
  };

  const gettingValue = (ev) => {
    setFilter(ev);
  };
  useEffect(() => {
    if (Time === 3000) {
      setTimeout(() => {
        setTime(0);
      }, Time);
    }
    if (Time === 0) {
      console.log("run");
      props.searchFriends(filter);
    }
  }, [Time]);
  useEffect(() => {
    if (buttonDisable) {
      if (props.history.length) {
        Actions[
          props.history[props.history.length > 1 ? props.history.length - 2 : 0]
        ]();
        console.log(
          props.history[props.history.length > 1 ? props.history.length - 2 : 0]
        );
        props.removeLastTab();
      } else {
        Actions.home();
      }
    }
  }, [buttonDisable]);
  let lang = props.currentLanguage ? props.currentLanguage[0] : "";
  return (
    <ScrollView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          onPress={() => {
            AsyncStorage.getItem("s_c_r_e_e_n").then((a) => {
              if (a === "home") {
                console.log(a, "hjdgshgh");
                Actions.home();
              }
              if (a === "team") {
                console.log(a, "team");
                Actions.teamChallenge();
              }
              if (a === "badge") {
                console.log(a, "bbbbb");
                Actions.challenge();
              }
              if (a === "stats") {
                console.log(a, "cccc");
                Actions.thirdPage();
              }
              if (a === "ranks") {
                console.log(a, "hjdgshgh");
                Actions.lastTab();
              }
            });
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("../../allpngandsvg/back.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.heading}>{lang[`{searchforopponents}`]}</Text>
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              styles.inputMain,
              { backgroundColor: filter.length ? "white" : "transparent" },
            ]}
          >
            <Item
              style={[
                styles.input,
                { color: filter.length ? "#2195f3" : "white" },
              ]}
              rounded
            >
              <Icon
                style={
                  filter.length ? { color: "#2195f3" } : { color: "white" }
                }
                type="FontAwesome"
                name="search"
              />
              <Input
                value={filter}
                onChangeText={(ev) => {
                  if (Time === 0) {
                    setTime(3000);
                  }
                  gettingValue(ev);
                }}
                onFocus={(ev) => clickTrue(ev)}
                placeholderTextColor="#ffffff7a"
                style={
                  ([styles.inputt],
                  { color: filter.length ? "#2195f3" : "white" })
                }
                placeholder={lang[`{challengefriends}`]}
              />
            </Item>
            {props.friendList &&
              props.friendList.map((a, i) => {
                return i < 10 && filter.length ? (
                  <>
                    <View style={styles.flexDiv} key={i}>
                      <Image
                        style={[
                          styles.searchImage,
                          { display: !filter.length ? "none" : "flex" },
                        ]}
                        source={{ uri: a.user.imageurl }}
                      />
                      {a.userAvailableToPlay ? (
                        <Text
                          style={[
                            styles.searchText,
                            {
                              display: !filter.length ? "none" : "flex",
                              width: "50%",
                            },
                          ]}
                        >
                          {a.user.shortName}
                        </Text>
                      ) : (
                        <Text
                          style={[
                            styles.searchText,
                            { display: !filter.length ? "none" : "flex" },
                          ]}
                        >
                          <Text>{a.user.shortName}</Text>
                          {"\n"}
                          <Text style={styles.searchText2}>
                            {lang[`{thereisactivechallengenow}`]}
                          </Text>
                        </Text>
                      )}
                      {a.userAvailableToPlay && click ? (
                        <TouchableOpacity
                          onPress={() =>
                            props.startIndivisualChallenge(a.user.iduser)
                          }
                          style={{
                            ...styles.challengeButt,
                            opacity: a.userAvailableToPlay ? 1 : 0,
                            zIndex: a.userAvailableToPlay ? 1 : -1,
                          }}
                        >
                          <Text style={styles.challengeButtText}>
                            {lang[`{challenge}`]}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View
                          style={{
                            ...styles.challengeButt,
                            opacity: a.userAvailableToPlay ? 1 : 0,
                            zIndex: a.userAvailableToPlay ? 1 : -1,
                          }}
                        >
                          <Text style={styles.challengeButtText}>
                            {lang[`{challenge}`]}
                          </Text>
                        </View>
                      )}
                    </View>
                    {click && (
                      <Image
                        source={require("../../allpngandsvg/seperater.png")}
                        style={{ width: "100%", resizeMode: "contain" }}
                      />
                    )}
                  </>
                ) : null;
              })}
          </View>
        </View>
        <Image
          style={[styles.bgImage, { display: filter.length ? "none" : "flex" }]}
          source={require("../../allpngandsvg/robotWithSearch.png")}
        />
      </View>
    </ScrollView>
  );
}

const mapStateToProps = ({ store }) => ({
  user: store.user,
  defaulLanguage: store.defaulLanguage,
  currentLanguage: store.currentLanguage,
  friendList: store.friendList,
  history: store.history,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchFriends,
      startIndivisualChallenge,
      removeLastTab,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
