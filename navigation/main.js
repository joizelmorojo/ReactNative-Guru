import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {isAndroid} from '../utils/platform';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {settingDrawerOpenedFalse, settingDrawerOpenedTrue} from '../modules/actions';
import {width, height} from '../utils/dimention';
import SideMenu from '../component/Drawer/Drawer';
import {bindActionCreators} from 'redux';
import MainScenes from './stacks';

const unitW = width / 183;
const unitH = height / 392;

export const MainNavigator = (props) => {
 
  return <SafeAreaView style={styles.background}>
    <SideMenu/>
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

export default MainNavigator;