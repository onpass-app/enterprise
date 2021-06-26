import * as React from 'react';
import { Button, Icon } from "react-native-magnus"

const ScanAgainButton = ({ setShouldScan }: { setShouldScan: any }) => {
    return (
        <Button
        bg="black"
        alignItems="center"
        rounded="md"
        onPress={() => setShouldScan(true)}>
            <Icon 
            name="ios-qr-code-outline"
            fontFamily="Ionicons"
            fontSize={32}
            color="white"
            />
        </Button>
    )
}

export default ScanAgainButton