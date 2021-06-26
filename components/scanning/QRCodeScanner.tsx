import { BarCodeScanner } from "expo-barcode-scanner"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { StyleSheet } from "react-native"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"

const QRCodeScanner = () => {
    const [cameraPermission, setCameraPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setCameraPermission(status === "granted");
        })()
    }, [])

    return (
        <>
            {!cameraPermission
            ? <NoCameraPermissionMessage />
            : <BarCodeScanner 
            type="back"
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={StyleSheet.absoluteFillObject}
            />}
        </>
    )
}  

export default QRCodeScanner