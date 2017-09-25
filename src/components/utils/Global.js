
import React, { Component } from 'react';
import {
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';

import * as Fetch from '../../network/NetworkTools';
// import {storage} from './Storage';

const {width, height} = Dimensions.get('window');


//判断是否是iOS系统
global.iOS = (Platform.OS === 'ios');

//判断是否是Android系统
global.Android = (Platform.OS === 'android');

//获取屏幕宽度
global.SCREEN_WIDTH = width;

//获取屏幕高度
global.SCREEN_HEIGHT = height;

//获取屏幕分辨率
global.PixelRatio = PixelRatio.get();

//网络请求
global.Fetch = Fetch;

//存储
// global.Storage = storage;
