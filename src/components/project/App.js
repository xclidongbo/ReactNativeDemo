

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import '../utils/Global';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab1Detail from './Tab1/Tab1Detail';
import Tab2Detail from './Tab2/Tab2Detail';
import SendValue2 from './Tab2/SendValue2';
import FetchRequest from './Tab3/FetchRequest';
import MarginAndPadding from './Tab3/MarginAndPadding';
import StoragePage from './Tab3/StoragePage';
import NativePage from './Tab3/NativePage';
import CommonSplist from './Tab3/CommonSplit';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import Login from './Login/Login';

var {width} = Dimensions.get('window');



// const Nav3Stack = StackNavigator({
//   Nav3: {
//     screen: Tab3,
//     navigationOptions: {
//       headerTitle: 'Demo',
//       // header: null
//     }
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       headerTitle: 'Login',
//       // header: null
//     }
//   }
// },{
//   mode: 'modal'
// })

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

},{
  transitionConfig: getSlideFromRightTransition
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
},{
  transitionConfig: getSlideFromRightTransition
});

const NavStack3 = StackNavigator({
  Nav3: {
    screen: Tab3,
    navigationOptions: {
      headerTitle: 'Demo',
      headerStyle: {backgroundColor:'#4ECBFC'},
      headerTitleStyle : {fontSize: 20,
          color:'white',fontWeight:'500',alignSelf:'center'}
    }
  },
  FetchRequest: {
    screen: FetchRequest,
    navigationOptions: ({navigation})=>StackOptions({navigation})
  },
  MarginAndPadding: {
    screen: MarginAndPadding,
    navigationOptions: ({navigation})=>StackOptions({navigation})
  },
  StoragePage: {
    screen: StoragePage,
    navigationOptions: ({navigation})=>StackOptions({navigation})
  },
  NativePage: {
    screen: NativePage,
    // navigationOptions: {
    //   tabBarVisible: false,
    // }
    navigationOptions: ({navigation})=>StackOptions({navigation})
  },
  CommonSplist: {
    screen: CommonSplist,
    navigationOptions: ({navigation})=>StackOptions({navigation})
  },
},{
  // headerMode: 'none'
})

const Nav3 = StackNavigator({
  Nav3: {
    screen: NavStack3,
  },
  Login: {
    screen: Login,
  }
},{
  mode: 'modal',
  // transitionConfig: getSlideFromRightTransition,
  headerMode: 'none'
});
const Nav4 = StackNavigator({
  Nav4: {
    screen: Tab4,
    navigationOptions: {
      headerTitle: '标签1',
    }
  },
},{
  transitionConfig: getSlideFromRightTransition
});

const IconName = (iconName, tintColor)=>{
  return <Icon name={iconName} size={22} color={tintColor}/>;
};

const StackOptions = ({navigation})=>{
  let {state, goBack} = navigation;

  const headerStyle = {backgroundColor:'#4ECBFC'};

  const headerTitle = state.params ? state.params.title : state.routeName;

  const headerTitleStyle = {fontSize: 20,
      color:'white',fontWeight:'500',alignSelf:'center'}//paddingTop:Android? 17: null,
  const headerBackTitle = false;

  const headerLeft = (
    <TouchableOpacity
      onPress={()=>{goBack()}}>
      <Icon
        name='arrow-left'
        size={30}
        color='#999'
        style={{marginLeft:12}}
      />
    </TouchableOpacity>);

  // let headerRight;
  // console.log('检测右button: '+ JSON.stringify(state.params));
  // if (state.params?state.params.headerRight:null){
  //   headerRight = state.params.headerRight;
  // }

  let header;
  if (state.params ? state.params.isVisible === true : null){
    header = null;
  }
  return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,header,headerLeft}
}



export const MainTabs = TabNavigator({
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
        IconName('send-o', tintColor)
      ),
    }
  },
  Tab3: {
    screen: Nav3,
    navigationOptions: {
      title: 'Demo',
      tabBarIcon: ({ tintColor, focused }) => (
        IconName('microchip', tintColor)
      ),
      // tabBarVisible: false,隐藏tabBar
    }
  },
  Tab4: {
    screen: Nav4,
    navigationOptions: {
      title: '标签4',
      tabBarIcon: ({ tintColor, focused }) => (
        IconName('user-circle-o', tintColor)
      ),
    }
  },

},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    // activeTintColor: '#50ca86',

    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      width: width/4,
    },

    indicatorStyle :{
      height:0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
      // backgroundColor: 'blue',
    }
  },
});
