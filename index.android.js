/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import  { MainTabs } from './src/components/project/App';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

AppRegistry.registerComponent('ReactNativeDemo', () => MainTabs);
