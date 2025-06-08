import Foundation
import UIKit

@objc(OSVersionModule)
class OSVersionModule: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc
    func getOSVersion(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let systemVersion = UIDevice.current.systemVersion
        resolve(systemVersion)
    }
} 