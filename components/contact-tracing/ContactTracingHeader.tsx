import React from 'react'
import { Div, Text } from "react-native-magnus"
import ClearContactTracingListButton from './ClearContactTracingListButton'
import CloseContactTracingModalButton from "./CloseContactTracingModalButton"

const ContactTracingHeader = ({ setModalVisibility } : { setModalVisibility: any }) => {
    return (
        <Div
        justifyContent="space-between"
        flexDir="row"
        alignItems="center"
        pb={20}
        mt="xl">
            <Text
            fontWeight="900"
            fontSize="5xl">
                Contact Tracing
            </Text>
            <ClearContactTracingListButton />
            <CloseContactTracingModalButton setModalVisibility={setModalVisibility} />
        </Div>
    )
}

export default ContactTracingHeader