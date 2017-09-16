
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import MyComponent from './MyComponent';

export default class Tab2Detail extends React.Component {

  testMethod=(content)=>{
    console.log('父组件方法: '+content);
  }
  render(){
    return(
      //通过这种方式,由父组件向子组件传值和传递方法
      <MyComponent
        imgName='angle-right'
        imgSize={30}
        imgTintColor='lightgray'
        content='这里是内容'
        test={this.testMethod}
      />
    );
  }
}
