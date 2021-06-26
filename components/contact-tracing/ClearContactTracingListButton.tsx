import React from 'react'
import { Button, Icon } from "react-native-magnus"
import { clearContactTracingList } from '../../database'

const ClearContactTracingListButton = () => {
    return (
        <Button
        bg="red500"
        alignItems="center"
        rounded="circle"
        onPress={() => clearContactTracingList()}>
            <Icon 
            name="ios-trash-outline"
            fontFamily="Ionicons"
            fontSize={24}
            color="white" />
        </Button>
    )
}

export default ClearContactTracingListButton