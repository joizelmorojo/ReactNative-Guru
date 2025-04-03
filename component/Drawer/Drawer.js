import React, { useRef } from 'react';
import { Animated,} from 'react-native';


export default TransitionComponent = (props) => {
  const fadeAnim = useRef(new Animated.Value(props.fadeAnim)).current 
  const fadeAnim2 = useRef(new Animated.Value(0)).current 

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: props.width,
        duration: 500,
      }
    ).start();
    Animated.timing(
      fadeAnim2,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim2])

  return (
    <Animated.View
      style={{
        ...props.style,
        width: fadeAnim,
      }}
    >
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim2,
        }}
      >
        {props.children}
      </Animated.View>
    </Animated.View>
  );
}
