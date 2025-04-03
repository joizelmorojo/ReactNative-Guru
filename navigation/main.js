import React, {useEffect, useState} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import {isAndroid} from '../utils/platforms';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {settingDrawerOpenedFalse, settingDrawerOpenedTrue} from '../redux/actions';
import {width, height} from '../hooks/dimensions';
import SideMenu from './drawer';
import {bindActionCreators} from 'redux';
import MainScenes from './stacks';

const unitW = width / 183;
const unitH = height / 392;

export const MainNavigator = (props) => {
  const [left] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(1));
  const dispatch = useDispatch()
  const drawerOpened = useSelector((state) => state.reducer.drawerOpened)

  console.log(
    "MainNavigator || drawerOpened", drawerOpened
  )
  useEffect(() => {
    if (drawerOpened === true) {
      Animated.timing(new Animated.Value(0), {
        toValue: -120 * unitW,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(new Animated.Value(1), {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [drawerOpened, left, scale]);

  const closeDrawer = () => {
    settingDrawerOpenedFalse();
  };

  const openDrawer = () => {
    console.log("main.js || openDrawer", drawerOpened);
    dispatch(settingDrawerOpenedTrue());
  }

  const handleDrawer = () => {
    if (drawerOpened == true) {
      dispatch(settingDrawerOpenedFalse());
    } else {
      dispatch(settingDrawerOpenedTrue());
    }
  };

  return <SafeAreaView style={styles.background}>
    <SideMenu/>
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          borderRadius: 0,
          overflow: 'hidden',
          left: left,
          transform: [
            {
              scale: scale,
            },
          ],
        },
      ]}
    >
      <MainScenes />
    </Animated.View>
  </SafeAreaView> 
}

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  background: {
    flex: 1,
    width: '100%'
  },
})

const mapStateToProps = (state) => ({
  drawerOpened: state.drawerOpened,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      settingDrawerOpenedFalse,
      settingDrawerOpenedTrue
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);