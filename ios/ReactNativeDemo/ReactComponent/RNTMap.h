//
//  RNTMap.h
//  ReactNativeDemo
//
//  Created by lidongbo on 27/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>


@interface RNTMap : MKMapView

@property(nonatomic,copy)RCTBubblingEventBlock onChange;

@end
