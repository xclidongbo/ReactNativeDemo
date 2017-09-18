
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
  TouchableHighlight,
} from 'react-native';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';

export default class Tab2Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'demo',
      tabBarVisible: false,
    };
  }
  testMethod=(content)=>{
    // console.log('父组件方法: '+content);
    alert('父组件方法: '+content);
  }

  changeValue=()=>{
    // console.log(this.refs.children.state.name);
    alert(this.refs.children.state.name);//子组件向父组件传值
    this.refs.children.onPressClick();//子组件向父组件传方法.
  }
  render(){
    return(
      //通过这种方式,由父组件向子组件传值和传递方法
      <View style={styles.container}>
        <MyComponent
          imgName='angle-right'
          imgSize={30}
          imgTintColor='lightgray'
          content='这里是内容, 点击调用父组件的方法'
          test={this.testMethod}
        />
        <MyComponent2
          ref='children'
          title={'这是组件2的标题'}
          content={'这是组件2的内容'}
        />
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor='#dddddd'
          onPress={()=>this.changeValue()}
        >
          <Text>获取子组件2向父组件传值</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});
