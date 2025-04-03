import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Text } from "react-native";
function MyText(props) {
  const [loaded, error] = Font.useFonts({
    Titillium_Bold: require("../../assets/TitilliumWeb-Bold.ttf"),
    Titillium: require("../../assets/TitilliumWeb-Regular.ttf"),
  });
  let [TextStyle, setTextStyle] = useState([]);

  useEffect(() => {
    let style = props.style;
    let styleArr = [];
    if (typeof style !== "object" && style) {
      for (var i = 0; i < style.length; i++) {
        if (i == style.length - 1) {
          styleArr.push(style[i]);
          styleArr.push({
            fontFamily: style[i].fontWeight ? "Titillium_Bold" : "Titillium",
            fontWeight: style[i].fontWeight ? "normal" : "normal",
          });
        } else {
          styleArr.push(style[i]);
        }
      }
      setTextStyle(styleArr);
    } else if (typeof style === "object") {
      setTextStyle([
        {
          fontFamily: style.fontWeight ? "Titillium_Bold" : "Titillium",
        },
        { ...props.style, fontWeight: style.fontWeight ? "normal" : "normal" },
      ]);
    }
  }, [props.style]);
  if (!loaded) {
    return <Text></Text>;
  }
  return (
    <Text {...props} style={TextStyle}>
      {props.children}
    </Text>
  );
}
export default MyText;
