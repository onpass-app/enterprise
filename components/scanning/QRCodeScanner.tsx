import { BarCodeScanner } from "expo-barcode-scanner"
import * as React from 'react';
import { useEffect } from "react"
import { useState } from "react"
import { StyleSheet } from "react-native"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"

const QRCodeScanner = ({ shouldScan, setShouldScan }: { shouldScan: boolean, setShouldScan: any }) => {
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
            onBarCodeScanned={!shouldScan ? undefined : ({ type, data }: { type: any, data: string }) => {
                setShouldScan(false)
                alert(`Scanned QR Code, Found type ${type} with data ${data}`)}
            }
            />}
        </>
    )
}  

export default QRCodeScanner