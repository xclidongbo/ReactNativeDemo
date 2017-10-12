
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NativeModules,
  NativeEventEmitter,
  TouchableHighlight,
  requireNativeComponent,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';


import MapView from '../../common/MapView';



class CustomButton extends Component {
  render(){
    return(
      <TouchableHighlight
        style={[styles.btnStyle, {backgroundColor: this.props.backgroundColor}]}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}



export default class NativePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    tabBarVisible: false,
    headerRight: (
      <View>
        <Button
          title='跳转原生VC'
          onPress={()=>{
            // console.log(1111);
            //调用原生的跳转方法.
            var FirstVCManager = NativeModules.FirstVCManager;
            FirstVCManager.pushViewController('FirstVCManager');
          }}
        />
      </View>
    )
  });
  // {
  //   const { params } = navigation.state;
  //   // console.log('调用111111');
  //
  //   return {
  //     title: params.title,
  //     tabBarVisible: false,
  //
  //     // headerTitle:navigation.state.params?navigation.state.params.title:null,
  //   };
  // };


  constructor(props){
    super(props);
    this.state = {
      events: '',//内容
    };
  }



  //Promises 调用原生方法.
  async  updateEvents(customView){
    try {
      var events = await customView.findEventsPromises();
      // console.log(events);
      this.setState({events:events});
    } catch (e) {
      console.error(e);
    }
  }
  postNotification(){
    this.EventReminder.postNotificationEvent('事件传递');
  }

  //用户点击地图的事件
  onRegionChange=(event: Event)=>{
    // Do stuff with event.region.latitude, etc.
    console.log(event.nativeEvent);
    this.setState({events: JSON.stringify(event.nativeEvent)});
  }

  render(){
    //给原生native 传递方法.
    var customView = NativeModules.CustomView;
    var date = new Date();


    //导出常量 初始化一次,即便在运行期间调整返回的值, 也不会影响JS环境下的结果.
    console.log(customView.firstDayOfTheWeek);

    return(
      <View style={styles.container}>
        <CustomButton
          text="调用原生的方法: addEvent:location:"
          backgroundColor= "#EEEEEE"
          onPress={()=>customView.addEvent('姓名','定位')}
        />
        <CustomButton
          text="调用原生方法: addEvent:location:date:"
          backgroundColor= "#DDDDDD"
          onPress={()=>customView.addCustomEvent('姓名2', '定位', date.getTime())}
        />
        <CustomButton
          text="callback回调: findEvents:"
          backgroundColor="#CCCCCC"
          onPress={()=>customView.findEvents((error, events)=>{
            if (error) {
              console.error(error);
            } else {
              // this.setState({events: events});
              // console.log('原生的回调: '+events);
              this.setState({'events': events});
            }
          })}
        />
        <CustomButton
          text="调用原生Promises: findEventsPromises"
          backgroundColor="#BBBBBB"
          onPress={()=>this.updateEvents(customView)}
        />
        <CustomButton
          text="调用原生通知: "
          backgroundColor='#AAAAAA'
          onPress={()=>this.postNotification()}
        />
        <Text style={styles.eventsStyle}>
          获取原生内容: {this.state.events}
        </Text>
        <MapView
          style={styles.mapStyle}
          showsScale={true}
          center={{ latitude: 39.909520, longitude: 116.336170 }}
          onChange ={(event)=>this.onRegionChange(event)}
        />
      </View>
    );
  }

  componentWillMount() {
    //通知
    this.EventReminder = NativeModules.EventReminder;
    const nativeEventEmitter = new NativeEventEmitter(this.EventReminder);

    //导出常量
    const eventReminderConst = this.EventReminder.EventReminderConst;
    console.log(eventReminderConst);
    this.subscription = nativeEventEmitter.addListener(eventReminderConst, (reminder)=>console.log(reminder));
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
}



const styles = StyleSheet.create({
  container: {

  },
  btnStyle: {
    padding: 8,
  },
  eventsStyle: {
    padding: 8,
  },
  mapStyle: {
    width: SCREEN_WIDTH,
    height: 200,
  }
});
