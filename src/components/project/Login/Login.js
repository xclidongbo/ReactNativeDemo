import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;
    return {
      // title: params.title,
      tabBarVisible: false,
      headerLeft: (
        <Icon
          name='backward'
          size={30}
          color='#999'
          style={styles.indicatorStyle}
        />
      )
    };
  };

  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.backViewStyle}>
          <Button
            style={styles.backBtnStyle}
            title='Go back'
            onPress={()=>this.props.navigation.goBack()}
          />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {

  },
  backViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    // backgroundColor: 'blue',
    marginTop: 10,
  },
  backBtnStyle: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: 'blue'
  }
});
