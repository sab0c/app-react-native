#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceInfo, NSObject)

RCT_EXTERN_METHOD(getDeviceName: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getSystemVersion: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end 