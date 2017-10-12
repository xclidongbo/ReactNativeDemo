import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MyComponent2 from '../../common/MyComponent2'
import Icon from 'react-native-vector-icons/FontAwesome';


//无状态组件
const TestItem = ({title})=>{
  return (
    <Text style={styles.testItemStyle}>
      {title}
    </Text>
  )
}

export default class CommonSplist extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    headerLeft: (
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon
          name='backward'
          size={30}
          color='#999'
          style={styles.backBtnStyle}
        />
      </TouchableOpacity>
    )
  });
  
  constructor(props){
    super(props);
    this.state = {

    };
  }

  //拆分render
  renderItem() {
    return (
      <View style={styles.renderItemStyle}>
      </View>
    )
  }
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style = {styles.titleStyle}>
          拆分render()
        </Text>
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        <Text style = {styles.titleStyle}>
          无状态组件
        </Text>
        <TestItem
          title='无状态组件1'
        />
        <TestItem
          title='无状态组件2'
        />
        <TestItem
          title='无状态组件3'
        />
        <Text style = {styles.titleStyle}>
          创建独立的React组件
        </Text>
        <MyComponent2
          title='这是标题'
          content='这是内容'
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  titleStyle: {
    // flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'blue'
    marginHorizontal: 10,
    marginVertical: 10,
  },
  renderItemStyle: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
    marginVertical: 2,
    height: 30
  },
  testItemStyle: {
    marginHorizontal: 20,
    marginVertical: 2,
    backgroundColor: 'orange'
  },
  backBtnStyle: {
    marginLeft: 10,
  }

});
