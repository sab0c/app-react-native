import Foundation
import UIKit

@objc(DeviceName)
class DeviceNameModule: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc
    func getDeviceName(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let deviceName = UIDevice.current.name
        resolve(deviceName)
    }
} 