


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


import {requestNetworkForGuider} from '../../../network/NetworkAPI';


export default class FetchRequest extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name,
      tabBarVisible: false,
    };
  };

  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }
  render(){
    return(
      <View>
        <Text>{this.state.msg}</Text>
      </View>
    );
  }

  componentDidMount() {
    let num = 86;
    let token = 'cf68bb85657b932dae624ee3d188718f';
    let params = {id: num, token: token };

    requestNetworkForGuider(params).then((json)=>{
      console.log('responseJson: '+ JSON.stringify(json, null, 2));
      console.log(json.msg);
      this.setState({
        msg: JSON.stringify(json, null, 2),
      });
    })
      .catch((error)=>{
        console.error(error);
      });

  }
}
