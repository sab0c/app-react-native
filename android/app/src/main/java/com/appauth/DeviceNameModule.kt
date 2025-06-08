package com.appauth

import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class DeviceNameModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DeviceName"
    }

    @ReactMethod
    fun getDeviceName(promise: Promise) {
        try {
            val deviceName = Build.MODEL
            promise.resolve(deviceName)
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
} 