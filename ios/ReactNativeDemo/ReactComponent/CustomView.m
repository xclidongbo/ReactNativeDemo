//
//  CustomView.m
//  ReactNativeDemo
//
//  Created by lidongbo on 25/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CustomView.h"

@implementation CustomView

RCT_EXPORT_MODULE();



RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"原生方法接收到的值: %@, %@",name, location);
}

// 如果参数名相同, 采用这个宏,来设置js参数名
RCT_REMAP_METHOD(addCustomEvent,addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  RCTLogInfo(@"时间是: %@", date);
}



//回调函数, 处于试验阶段,
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray * events = @[@"a", @"b", @"b", @"d"];
  callback(@[[NSNull null], events]);//RCTResponseSenderBlock只能接受一个参数-回调函数的参数数组,第一个参数是错误对象.
}


//Promises
RCT_REMAP_METHOD(findEventsPromises,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray * events = @[@"a", @"b", @"b", @"e"];
  NSError * error = nil;
  if (events) {
    resolve(events);
  } else {
    reject(@"11", @"错误", error);
  }
}

//导出常量.
- (NSDictionary<NSString *,id> *)constantsToExport {
  return @{ @"firstDayOfTheWeek": @"Monday"};
}
@end
