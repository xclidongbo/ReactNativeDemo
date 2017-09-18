

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

import Icon from 'react-native-vector-icons/FontAwesome';


export default class MyComponent extends Component {
  static defaultProps = {
    imgName: '',
    imgSize: 30,
    imgTintColor: 'lightgray',
    content: '这是内容',
  }

  onPressClick=()=>{
    this.props.test('这是子组件向父组件传递的入参');
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
          <Icon
            name={props.imgName}
            size={props.imgSize}
            color={props.imgTintColor}
            style={styles.imageStyle}
          />
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginHorizontal: 5,
  },
  imageStyle: {
    marginLeft: 5,
    // backgroundColor: 'red',
  },
  contentStyle: {
    marginLeft: 5,
    // backgroundColor: 'blue',
  }
});
