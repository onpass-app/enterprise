import React from "react"
import { SafeAreaView } from "react-native"
import QRCodeScanner from "./components/scanning/QRCodeScanner"

const Index = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <QRCodeScanner />
        </SafeAreaView>
    )
}

export default Index