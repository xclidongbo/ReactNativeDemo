

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';


export default class MyComponent2 extends Component {
  static defaultProps = {
    title: '这是标题',
    content: '这是内容',
  }

  onPressClick=()=>{
    console.log('子组件2的点击方法');
  }
  constructor(props){
    super(props);
    this.state = {
      name: '这是子组件向父组件传值的测试',
    };
  }

  render(){
    var props = this.props;
    return(
      <TouchableOpacity
        onPress={()=>this.onPressClick()}
      >
        <View
          style={styles.container}
        >
          <Text style={styles.titleStyle}>
            {this.props.title}
          </Text>
          <Text style={styles.contentStyle}>
            {props.content}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  titleStyle: {
    marginTop: 5,
    // backgroundColor: 'red',
  },
  contentStyle: {
    marginTop: 5,
    // backgroundColor: 'blue',
  }
});
