import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Circle } from "react-native-svg";
import Animated, { Easing } from "react-native-reanimated";
import MyText from "../MyText/MyText";
import { useScreenDimensions } from "../../hooks/dimensions";
const { Value, timing } = Animated;

export default ({
  progress,
  width,
  strokeWidth,
  color1,
  color2,
  strokeDashoffset,
  centerText,
}) => {
  const { interpolate, multiply } = Animated;
  const size = width;
  let [_transX] = React.useState(new Value(0));
  const screenData = useScreenDimensions(2870, 1242);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const { PI } = Math;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = r * 2 * PI;
  React.useEffect(() => {
    timing(_transX, {
      toValue: strokeDashoffset,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [screenData]);
  return (
    <Svg width={size + 5} height={size + 5} style={styles.container}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#f7cd46" />
          <Stop offset="1" stopColor="#ef9837" />
        </LinearGradient>
      </Defs>
      <AnimatedCircle
        stroke={color1}
        fill="none"
        {...{
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
      <View
        style={{
          transform: [{ rotateZ: "-270deg" }],
          alignItems: "center",
          justifyContent: "center",
          height: width,
        }}
      >
        <MyText
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: color1,
          }}
        >
          {centerText}
        </MyText>
      </View>
      <AnimatedCircle
        stroke={color2}
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{
          strokeDashoffset: _transX,
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ rotateZ: "270deg" }],
  },
});
