#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceName, NSObject)

RCT_EXTERN_METHOD(getDeviceName: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end 