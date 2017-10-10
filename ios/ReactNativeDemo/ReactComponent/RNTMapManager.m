//
//  RNTMapManager.m
//  ReactNativeDemo
//
//  Created by lidongbo on 27/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import "RNTMap.h"
#import <React/RCTConvert+CoreLocation.h>


@interface RNTMapManager ()<MKMapViewDelegate>


@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

//调用原生属性 属性名必须保持一致.
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showsScale, BOOL)//名字要和原生属性的名字一致.
RCT_EXPORT_VIEW_PROPERTY(showsCompass, BOOL)//显示指南针
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

- (UIView *)view {
  RNTMap * mapView = [[RNTMap alloc] init];
  mapView.pitchEnabled = NO;
  mapView.showsTraffic = YES;
  mapView.showsUserLocation = YES;
  mapView.delegate = self;
  return mapView;
}



// 添加自定义属性
RCT_CUSTOM_VIEW_PROPERTY(center, CLLocationCoordinate2D, RNTMap)
{
  [view setCenterCoordinate:json?[RCTConvert CLLocationCoordinate2D: json]: defaultView.centerCoordinate animated:YES];
}

- (void)mapView:(MKMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  RNTMap * map = (RNTMap *)mapView;
  if (map.onChange) {
    MKCoordinateRegion region = map.region;
    RCTLogInfo(@"中心: %f, %f",region.center.latitude, region.center.longitude);
    map.onChange(@{
                   @"latitude": @(region.center.latitude),
                   @"longitude": @(region.center.longitude),
                   });
  }
}

@end
