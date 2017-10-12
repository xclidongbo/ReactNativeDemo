
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
  ScrollView
} from 'react-native';

export default class MarginAndPadding extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
      tabBarVisible: false,
    };
  };


  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>
          margin是外边距, padding是内边距,称为'留白'.通常两者展现的效果相同.
        </Text>
        <View style={styles.viewStyle1}>
          <Text style={styles.textStyle1}>
            发现问题了么？如果你把原先的firstChild给删除掉了，新来的元素根本就没有定义上边距或者上补白，那么他就会自然顶在头部，不是理想的效果。
          </Text>
          <Text style={styles.textStyle1}>
            发现问题了么？如果你把原先的firstChild给删除掉了，新来的元素根本就没有定义上边距或者上补白，那么他就会自然顶在头部，不是理想的效果。
          </Text>
        </View>
        <View style={styles.viewStyle2}>
          <Text style={styles.textStyle2}>
            发现问题了么？如果你把原先的firstChild给删除掉了，新来的元素根本就没有定义上边距或者上补白，那么他就会自然顶在头部，不是理想的效果。
          </Text>
          <Text style={styles.textStyle2}>
            发现问题了么？如果你把原先的firstChild给删除掉了，新来的元素根本就没有定义上边距或者上补白，那么他就会自然顶在头部，不是理想的效果。
          </Text>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewStyle1: {
    backgroundColor: 'red',

    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  viewStyle2: {
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    marginTop: 5,
  },
  textStyle1: {
    margin: 20,
  },
  textStyle2: {
    padding: 20,
  },

});
