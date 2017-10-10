

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
// import {postFetch} from '../../network/NetworkTools';
import {requestNetworkForGuider} from '../../network/NetworkAPI'


const {width, height}=Dimensions.get('window');

export default class Tab3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {title: 'Fetch网络请求'},
        {title: 'Margin和Padding区别'},
        {title: 'c'},
        {title: 'd'},
        {title: 'e'},
        {title: 'f'},
      ]
    };
  }
  separator=()=>{
    return <View style={styles.lineStyle}></View>;
  }

  onPressClick=(item, index)=>{
    let navigation = this.props.navigation;

    switch (index) {
    case 0:
      return navigation.navigate('FetchRequest', {name: item.title});
      //break;
    case 1:
      return navigation.navigate('MarginAndPadding', {name: item.title});
    default:
      //这里,将数组中的key值传递到下一页(Tab2Detail).
      // return navigation.navigate('FetchRequest', {name: item.title});
    }
  }

  renderItem=({item, index})=>{
    return (
      <TouchableHighlight
        onPress={()=>this.onPressClick(item, index)}
        activeOpacity={0.5}
        underlayColor='lightgray'>
        <View style={styles.itemStyle}>
          <Text style={styles.textStyle}>
            {item.title}
          </Text>
          <Icon
            name='angle-right'
            size={30}
            color='#999'
            style={styles.indicatorStyle}
          />
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
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  // componentDidMount() {
  //
  //   let num = 86;
  //   let token = 'cf68bb85657b932dae624ee3d188718f';
  //   let params = {id: num, token: token };
  //
  //   requestNetworkForGuider(params).then((json)=>{
  //     console.log('responseJson: '+ JSON.stringify(json, null, 2));
  //   })
  //     .catch((error)=>{
  //       console.error(error);
  //       // console.log('error: ' + error);
  //     });
  //
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  lineStyle: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: 'lightgrey'
  },
  textStyle: {
    marginLeft: 20,
    fontSize: 18,
  },
  indicatorStyle: {
    marginRight: 20,
  }
});
