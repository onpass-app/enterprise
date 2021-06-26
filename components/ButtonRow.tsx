import React from 'react';
import { Div } from "react-native-magnus"
import OpenContactTracingModalButton from "./contact-tracing/OpenContactTracingModalButton"
import ScanAgainButton from "./scanning/ScanAgainButton"

const ButtonRow = ({ setShouldScan }: { setShouldScan: any }) => {
    return (
        <Div
        flexDir="row"
        justifyContent="space-between"
        px={32}
        py={64}
        mt="auto">
            <OpenContactTracingModalButton />
            <ScanAgainButton setShouldScan={setShouldScan} />
        </Div>
    )
}

export default ButtonRow