

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


export default class Tab3 extends Component {

  onPressClick(){
    console.log(333);
  }

  render(){
    return(
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor='#dddddd'
        onPress={()=>this.onPressClick()}>
        <View >
          <Text>
            1111111
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
