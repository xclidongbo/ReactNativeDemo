

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

// import {postFetch} from '../../network/NetworkTools';
import {requestNetworkForGuider} from '../../network/NetworkAPI'

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
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  componentDidMount() {
    // let url = 'https://api.zoomdu.com/api/guide/getGuide.do?k=796451&r=1505725000.718974&sign=30944096c74b7554e27ace1bedb4e58f';
    let params = {id:'42', token:'b64f89f163fd095d554c87df5412fe8d'};
    requestNetworkForGuider(params).then((json)=>{
      console.log('json: '+ JSON.stringify(json, null, 2));
    },(error)=>{
      console.log('error: ' + error);
    });

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
