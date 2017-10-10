
<script src="http://localhost:8081"></script>

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Tab2 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {title: '正向传值(React Navigation)',content: '我是值'},
        {title: '父子组件传值和方法', content: ''},
        {title: 'c',content: '我是值'},
        {title: 'd',content: '我是值'},
        {title: 'e',content: '我是值'},
        {title: 'f',content: '我是值'},
      ],

    };
  }
  separator=()=>{
    return <View style={styles.lineStyle}></View>;
  }
  // callbackFun = (event)=>{
  //   console.log('第一页: ' + event);
  // }

  onPressClick(item, index){

    // console.log(index);
    let navigation = this.props.navigation;

    switch (index) {
    case 1:
      return navigation.navigate('SendValue2', {name: item.content});
      // break;
    default:
      //这里,将数组中的key值传递到下一页(Tab2Detail).
      return navigation.navigate('Tab2Detail', {name: item.content});
    }
  }

  renderItem=({item,index})=>{
    return (
      <TouchableHighlight
        onPress={()=>this.onPressClick(item, index)}
        activeOpacity={0.5}
        underlayColor='lightgray'>
        <View style={styles.itemStyle}>
          <Text style={styles.textStyle}>
            {item.title}
          </Text>
          <View style={styles.backStyle}>
            <Text style={styles.contentStyle}>
              {item.content}
            </Text>
            <Icon
              name='angle-right'
              size={30}
              color='#999'
              style={styles.indicatorStyle}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  keyextractor = (item, index) => index;
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.separator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  textStyle: {
    marginLeft: 20,
    fontSize: 18,
    // backgroundColor: 'red',
  },
  backStyle:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    // backgroundColor: 'blue',
  },
  contentStyle:{
    marginRight: 10,
    // backgroundColor: 'yellow',
  },
  indicatorStyle:{

  },
  lineStyle: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: 'lightgrey'
  },
});
