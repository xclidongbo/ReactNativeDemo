

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';


const Nav1 = StackNavigator({
  Nav1: {
    screen: Tab1,
    navigationOptions: {
      title: '标签1'
    }
  },
});

const Nav2 = StackNavigator({
  Nav2: {
    screen: Tab2,
    navigationOptions: {
      title: '标签2'
    }
  },
});
const Nav3 = StackNavigator({
  Nav2: {
    screen: Tab3,
    navigationOptions: {
      title: '标签3'
    }
  },
});
const Nav4 = StackNavigator({
  Nav2: {
    screen: Tab4,
    navigationOptions: {
      title: '标签4'
    }
  },
});

const MainTabs = TabNavigator({
  Tab1: {
    screen: Nav1,
  },
  Tab2: {
    screen: Nav2,
  },
  Tab3: {
    screen: Nav3,
  },
  Tab4: {
    screen: Nav4,
  },

},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export { MainTabs } ;
