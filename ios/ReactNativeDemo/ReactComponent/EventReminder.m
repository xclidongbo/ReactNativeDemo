//
//  EventReminder.m
//  ReactNativeDemo
//
//  Created by lidongbo on 26/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "EventReminder.h"

NSString * const kEventEmitterManagerEvent = @"EventReminder";

@implementation EventReminder

RCT_EXPORT_MODULE();


- (NSDictionary<NSString *,id> *)constantsToExport{
  return @{@"EventReminderConst": kEventEmitterManagerEvent};
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[kEventEmitterManagerEvent];
}


//等 RN 组件 监听事件后, 再发送事件通知.
RCT_EXPORT_METHOD(postNotificationEvent: (NSString *)name)
{
  RCTLogInfo(@"postNotificationEvent: %@", name);
  [self sendEventWithName:kEventEmitterManagerEvent body:name];
}

//- (void)calendarEventReminderReceived:(NSNotification *)notification
//{
//  NSString *eventName = notification.userInfo[@"name"];
//  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
//}

@end
