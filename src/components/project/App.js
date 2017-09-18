

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab1Detail from './Tab1Detail';
import Tab2Detail from './Tab2Detail';
import SendValue2 from './SendValue2';


var {width} = Dimensions.get('window');

const Nav1 = StackNavigator({
  Nav1: {
    screen: Tab1,
    navigationOptions: {
      headerTitle: '常用控件Demo',
    }
  },
  Tab1Detail: {
    screen: Tab1Detail,
  }

});

const Nav2 = StackNavigator({
  Nav2: {
    screen: Tab2,
    navigationOptions: {
      headerTitle: '传值方式',
      // header: null,//隐藏header
    }
  },
  Tab2Detail: {
    screen: Tab2Detail,
  },
  SendValue2: {
    screen: SendValue2,
  }
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

var IconName = (iconName, tintColor)=>{
  return <Icon name={iconName} size={30} color={tintColor}/>;
};

const MainTabs = TabNavigator({
  Tab1: {
    screen: Nav1,
    navigationOptions: {
      title: '常用控件',
      tabBarIcon: ({ tintColor, focused }) => (
        // <Image
        //   source={require('./Resource/Images/richeng.png')}
        //   style={{width: 22, height: 22, resizeMode: 'contain', tintColor: tintColor}}
        // />
        // <Icon name="angle-right" size={30} color="#900" />
        IconName('list-alt', tintColor)
      ),
    }
  },
  Tab2: {
    screen: Nav2,
    navigationOptions: {
      title: '传值',
      tabBarIcon: ({ tintColor, focused }) => (
        // <Image
        //   source={require('./Resource/Images/renwu.png')}
        //   style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        // />
        IconName('angle-right', tintColor)
      ),
    }
  },
  Tab3: {
    screen: Nav3,
    navigationOptions: {
      title: '标签3',
      tabBarIcon: ({ tintColor, focused }) => (
        // <Image
        //   source={require('./Resource/Images/quanzi.png')}
        //   style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        // />
        IconName('angle-right', tintColor)
      ),
      // tabBarVisible: false,隐藏tabBar
    }
  },
  Tab4: {
    screen: Nav4,
    navigationOptions: {
      title: '标签4',
      tabBarIcon: ({ tintColor, focused }) => (
        // <Image
        //   source={require('./Resource/Images/wode.png')}
        //   style={{width: 22, height: 22, resizeMode: 'contain',tintColor: tintColor}}
        // />
        IconName('angle-right', tintColor)
      ),
    }
  },

},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#50ca86',
    indicatorStyle: {backgroundColor: 'blue'},
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      width: width/4,
    },
    style: {
      // backgroundColor: 'blue',
    },
  },
});

export { MainTabs } ;
