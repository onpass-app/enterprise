import React from "react"
import { useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import ButtonRow from "./components/ButtonRow"
import QRCodeScanner from "./components/scanning/QRCodeScanner"

const Index = () => {
    const [shouldScan, setShouldScan] = useState(true);
    return (
        <SafeAreaView style={{ ...StyleSheet.absoluteFillObject, flex: 1, flexDirection: "column" }}>
            <QRCodeScanner shouldScan={shouldScan} setShouldScan={setShouldScan} />
            <ButtonRow setShouldScan={setShouldScan} />
        </SafeAreaView>
    )
}

export default Index