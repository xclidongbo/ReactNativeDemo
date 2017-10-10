

//MapView.js
//M
import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

var RNTMap = requireNativeComponent('RNTMap', MapView,
// {
//   nativeOnly: {onChange: true},
// }
);

export default class MapView extends Component {
  static propTypes = {
    /**
     * 这个属性被设置为true, 并且地图上绑定一个有效可视区域情况下, 可捏合操作改变偏转角度.
     * @type {BOOL}
     */
    pitchEnabled: PropTypes.bool,
    showsScale: PropTypes.bool,
    
    center: React.PropTypes.shape({
      /**
       * 地图中心点的坐标,
       * @type {[type]}
       */
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired,
    }),
    onChange: React.PropTypes.func,
  }

  _onChange = (event: Event) => {
    if (!this.props.onChange) return;
    // console.log(event.nativeEvent);
    this.props.onChange(event);
  }
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <RNTMap {...this.props} onChange={(event)=>this._onChange(event)}/>
    );
  }
}
