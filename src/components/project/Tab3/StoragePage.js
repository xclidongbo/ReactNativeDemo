
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import * as RNstorage from '../../utils/Storage';

import * as Request from '../../../network/NetworkAPI';

// const RNstorage = storage;

export default class StoragePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: '',
    };
  }


  onPress=(index)=>{
    switch (index) {
    case 1:
      RNstorage.saveData('guider','张三');
      break;
    case 2:
      this.loadData();
      break;
    default:

    }
  }
  
  loadData=()=>{
    RNstorage.loadData('guider').then((ret)=>{
      console.log('看看调用了哪个: '+ret);
      this.setState({
        dataSource: ret,
      });
    },(err)=>{
      console.log(err);
    });
  }

  syncData=()=>{
    RNstorage.storage.sync = {
      user(params){
        let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
        console.log('调用了 sync: '+JSON.stringify(params));
        let num = 86;
        let token = 'cf68bb85657b932dae624ee3d188718f';
        let param = {id: num, token: token };

        Request.guiderByPost(param)
          .then((json)=>{
            console.log('responseJson: '+ JSON.stringify(json, null, 2));
            console.log(json.msg);
            if (json.msg) {
              RNstorage.saveData('user',JSON.stringify(json, null, 2));
            }
            // this.setState({
            //   dataSource: JSON.stringify(json, null, 2),
            // });
            resolve && resolve(JSON.stringify(json, null, 2));
          })
          .catch((error)=>{
            console.error(error);
            reject && reject(error);
          });

        // fetch('user/', {
        //   method: 'GET',
        //   body: 'id=' + id,
        //   ...extraFetchOptions,
        // }).then(response => {
        //   return response.json();
        // }).then(json => {
        //   console.log(json);
        //   if(json && json.user){
        //     storage.save({
        //       key: 'user',
        //       id,
        //       data: json.user
        //     });
        //
        //     if (someFlag) {
        //       // 根据syncParams中的额外参数做对应处理
        //     }
        //     // 成功则调用resolve
        //     resolve && resolve(json.user);
        //   }
        //   else{
        //     // 失败则调用reject
        //     reject && reject(new Error('data parse error'));
        //   }
        // }).catch(err => {
        //   console.warn(err);
        //   reject && reject(err);
        // });
      },

      guider(params){
        let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;
        console.log('调用了 sync: '+JSON.stringify(params));
        let num = 86;
        let token = 'cf68bb85657b932dae624ee3d188718f';
        let param = {id: num, token: token };

        Request.guiderByPost(param)
          .then((json)=>{
            console.log('responseJson: '+ JSON.stringify(json, null, 2));
            console.log(json.msg);
            if (json.msg) {
              RNstorage.saveData('user',JSON.stringify(json, null, 2));
            }
            // this.setState({
            //   dataSource: JSON.stringify(json, null, 2),
            // });
            resolve && resolve(JSON.stringify(json, null, 2));
          })
          .catch((error)=>{
            console.error(error);
            reject && reject(error);
          });

        // fetch('user/', {
        //   method: 'GET',
        //   body: 'id=' + id,
        //   ...extraFetchOptions,
        // }).then(response => {
        //   return response.json();
        // }).then(json => {
        //   console.log(json);
        //   if(json && json.user){
        //     storage.save({
        //       key: 'user',
        //       id,
        //       data: json.user
        //     });
        //
        //     if (someFlag) {
        //       // 根据syncParams中的额外参数做对应处理
        //     }
        //     // 成功则调用resolve
        //     resolve && resolve(json.user);
        //   }
        //   else{
        //     // 失败则调用reject
        //     reject && reject(new Error('data parse error'));
        //   }
        // }).catch(err => {
        //   console.warn(err);
        //   reject && reject(err);
        // });
      }
    };
  }

  componentDidMount() {
    this.syncData();
    this.loadData();
  }
  render(){
    return(
      <View style={styles.container}>

        <TouchableHighlight
          onPress={()=>this.onPress(1)}
          underlayColor='red'
          activeOpacity={0.5}
        >
          <Text style={styles.textStyle}>
            保存数据
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={()=>this.onPress(2)}
          underlayColor='red'
          activeOpacity={0.5}
        >
          <Text style={styles.textStyle}>
            读取数据
          </Text>
        </TouchableHighlight>

        <ScrollView style={styles.contentStyle}>
          <Text>
            {this.state.dataSource}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    backgroundColor: 'yellow',
    margin: 2,
  },
  contentStyle: {
    margin:10,
  }
});
