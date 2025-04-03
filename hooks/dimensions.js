import React, { useEffect, useState } from "react";
import {
  Dimensions,
} from "react-native";
import Constants from "expo-constants";

export const {screenWidth, screenHeight} = Dimensions.get("window");

// dimentions
export const useScreenDimensions = (height = 2208, width = 1242) => {
  const [screenData, setScreenData] = useState(Dimensions.get("window"));
  const onChange = (result) => {
    setScreenData(result.window);
  };

  useEffect(() => {
    const listener = Dimensions.addEventListener("change", onChange);
    return () => {
      listener.remove();
    };
  }, []);

  return {
    ...screenData,
    height: screenData.height + Constants.statusBarHeight + 10,
    isLandscape: screenData.width > screenData.height,
    constantHeightt: screenData.width > screenData.height ? width : height,
    constantWidthh: screenData.width > screenData.height ? height : width,
  };
};