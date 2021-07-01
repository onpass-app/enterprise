/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BarCodeScanner } from "expo-barcode-scanner"
import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { StyleSheet } from "react-native"
import { Div } from "react-native-magnus"
import { addToContactTracingList } from "../../database"
import NoCameraPermissionMessage from "./NoCameraPermissionMessage"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const QRCodeScanner = ({
  shouldScan,
  setShouldScan,
}: {
  shouldScan: boolean
  setShouldScan: (value: boolean) => void
}) => {
  const [cameraPermission, setCameraPermission] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setCameraPermission(status === "granted")
    })()
  }, [])

  return (
    <>
      {!cameraPermission ? (
        <NoCameraPermissionMessage />
      ) : (
        <BarCodeScanner
          type="back"
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{ ...StyleSheet.absoluteFillObject, justifyContent: "center" }}
          onBarCodeScanned={
            !shouldScan
              ? undefined
              : ({ data }: { data: string }) => {
                  setShouldScan(false)
                  addToContactTracingList(JSON.parse(data))
                  alert("Success! Added to contact tracing list.")
                }
          }
        >
          <Div
            alignSelf="center"
            borderWidth={10}
            borderColor="yellow500"
            borderStyle="dashed"
            w={256}
            h={256}
            rounded="md"
          />
        </BarCodeScanner>
      )}
    </>
  )
}

export default QRCodeScanner
