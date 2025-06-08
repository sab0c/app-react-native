import Foundation
import UIKit

@objc(DeviceInfo)
class DeviceInfo: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc
    func getDeviceName(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let deviceName = UIDevice.current.name
        resolve(deviceName)
    }
    
    @objc
    func getSystemVersion(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let systemVersion = UIDevice.current.systemVersion
        resolve(systemVersion)
    }
} 