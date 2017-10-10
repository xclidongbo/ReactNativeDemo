


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';


import * as Request from '../../../network/NetworkAPI';


export default class FetchRequest extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
      tabBarVisible: false,
    };
  };

  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }

  postRequest = ()=>{
    let num = 86;
    let token = 'cf68bb85657b932dae624ee3d188718f';
    let params = {id: num, token: token };

    Request.guiderByPost(params)
      .then((json)=>{
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
  getRequest = ()=>{
    let num = 86;
    let token = 'cf68bb85657b932dae624ee3d188718f';
    let params = {id: num, token: token };

    Request.guiderByGet(params)
      .then((json)=>{
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

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.backStyle}>
          <Button
            style={styles.btnStyle}
            onPress={()=>this.postRequest()}
            title='Post Request'
            color='red'
          />
          <Button
            style={styles.btnStyle}
            onPress={()=>this.getRequest()}
            title='Get Request'
            color='yellow'
          />
        </View>
        <ScrollView>
          <Text style={styles.textStyle}>
            {this.state.msg}
          </Text>
        </ScrollView>

      </View>
    );
  }

  // componentDidMount() {
  //   let num = 86;
  //   let token = 'cf68bb85657b932dae624ee3d188718f';
  //   let params = {id: num, token: token };
  //
  //   requestNetworkForGuider(params)
  //     .then((json)=>{
  //       console.log('responseJson: '+ JSON.stringify(json, null, 2));
  //       console.log(json.msg);
  //       this.setState({
  //         msg: JSON.stringify(json, null, 2),
  //       });
  //     })
  //     .catch((error)=>{
  //       console.error(error);
  //     });
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backStyle: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  btnStyle: {
    flex: 1,
    height: 40,
  },
  textStyle: {
    flex: 1,
    backgroundColor: '#999999',
  }
});
