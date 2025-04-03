import {
  Dimensions,
} from "react-native";

export const {width, height} = Dimensions.get("screen");

const useScreenDimensions = (height = 2208, width = 1242) => {
  const [screenData, setScreenData] = useState(Dimensions.get("window"));
  const onChange = (result, call) => {
    setScreenData(result.window);
  };
  useEffect(() => {
    Dimensions.addEventListener("change", (e) => onChange(e, "change"));
    return () =>
      Dimensions.removeEventListener("change", (e) => onChange(e, "remove"));
  }, []);

  return {
    ...screenData,
    height: screenData.height + Constants.statusBarHeight + 10,
    isLandscape: screenData.width > screenData.height,
    constantHeightt: screenData.width > screenData.height ? width : height,
    constantWidthh: screenData.width > screenData.height ? height : width,
  };
};

export default useScreenDimensions;