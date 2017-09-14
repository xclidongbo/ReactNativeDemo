

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';


export default class Tab2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {key: '正向传值'},
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
  onPressClick(key){
    // console.log(key);
    
  }

  renderItem=({item})=>{
    return (
      <TouchableHighlight
        onPress={()=>this.onPressClick(item.key)}
        activeOpacity={0.5}
        underlayColor='lightgray'>
        <View >
          <Text style={styles.item}>{item.key}
          </Text>
        </View>
      </TouchableHighlight>






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
