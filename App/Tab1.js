

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';


const {width, height}=Dimensions.get('window');

export default class Tab1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {key: 'FlatList长列表'},
        {key: 'b'},
        {key: 'c'},
        {key: 'd'},
        {key: 'e'},
        {key: 'f'},
      ]
    };
  }
  separator=()=>{
    return <View style={styles.line}></View>;
  }
  renderItem=({item})=>{
    return (
      <View >
        <Text style={styles.item}>{item.key}
        </Text>
      </View>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  line: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: 'lightgrey'
  }
});
