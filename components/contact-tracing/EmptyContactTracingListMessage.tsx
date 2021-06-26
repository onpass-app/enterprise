import React from "react"
import { Div, Icon, Text } from "react-native-magnus"

const EmptyContactTracingListMessage = () => {
    return (
        <Div
        justifyContent="center"
        alignItems="center"
        pt={30}>
            <Icon fontFamily="Ionicons"
            name="ios-file-tray-outline"
            fontSize={72}
            color="gray500" />
            <Text
            fontWeight="500"
            pt={20}
            fontSize={24}>Nothing here yet!</Text>
        </Div>
    )
}

export default EmptyContactTracingListMessage