

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class Tab1 extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'richeng'}}
        />
        <Text>Tab1</Text>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 22,
    height: 22,
  }
});
