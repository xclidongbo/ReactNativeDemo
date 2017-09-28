//
//  FirstVCManager.m
//  ReactNativeDemo
//
//  Created by lidongbo on 28/09/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "FirstVCManager.h"
#import "FirstViewController.h"
#import "AppDelegate.h"

@implementation FirstVCManager

RCT_EXPORT_MODULE()//必须写,不指定名字,就默认用OC的类名.

RCT_EXPORT_METHOD(pushViewController: (NSString *)vcString)
{
//  RCTLogInfo(@"%@",vcString);
  dispatch_async(dispatch_get_main_queue(), ^(void) {
    UINavigationController * nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
//    RCTLogInfo(@"%@",nav.viewControllers);
    FirstViewController * vc = [[FirstViewController alloc] init];
    [nav pushViewController:vc animated:YES];
  });
  
}

@end
