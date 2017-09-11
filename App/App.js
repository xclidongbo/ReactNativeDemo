

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
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
      headerTitle: '标签1',
    }
  },
});

const Nav2 = StackNavigator({
  Nav2: {
    screen: Tab2,
    navigationOptions: {
      headerTitle: '标签1',
      header: null,//隐藏header
    }
  },
});
const Nav3 = StackNavigator({
  Nav2: {
    screen: Tab3,
    navigationOptions: {
      headerTitle: '标签1',
    }
  },
});
const Nav4 = StackNavigator({
  Nav2: {
    screen: Tab4,
    navigationOptions: {
      headerTitle: '标签1',
    }
  },
});

const MainTabs = TabNavigator({
  Tab1: {
    screen: Nav1,
    navigationOptions: {
      title: '标签1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={{uri: 'richeng'}}
          style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        />
      ),
    }
  },
  Tab2: {
    screen: Nav2,
    navigationOptions: {
      title: '标签2',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={{uri: 'renwu'}}
          style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        />
      ),
    }
  },
  Tab3: {
    screen: Nav3,
    navigationOptions: {
      title: '标签3',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={{uri: 'quanzi'}}
          style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        />
      ),
      // tabBarVisible: false,隐藏tabBar
    }
  },
  Tab4: {
    screen: Nav4,
    navigationOptions: {
      title: '标签4',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          source={{uri: 'wode'}}
          style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        />
      ),
    }
  },

},{
  tabBarPosition: 'bottom',
  // animationEnabled: true,
  // swipeEnabled: true,
  // showIcon: true,
  tabBarOptions: {
    activeTintColor: '#50ca86',
  },
});

export { MainTabs } ;
