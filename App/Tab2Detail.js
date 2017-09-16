
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';



export default class Tab2Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name,
      tabBarVisible: false,
      // headerRight: (
      //   <View>
      //     <Button
      //       title={params.name}
      //     />
      //   </View>
      // )
    };
  };

  render(){
    const { params } = this.props.navigation.state;
    return(
      <Text style={{padding: 10,flex: 1}}>
        {'传值: ' + params.name}
      </Text>
    );
  }
}
