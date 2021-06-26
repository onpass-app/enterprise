import React from 'react'
import { Div, Text } from "react-native-magnus"
import CloseContactTracingModalButton from "./CloseContactTracingModalButton"

const ContactTracingHeader = ({ setModalVisibility } : { setModalVisibility: any }) => {
    return (
        <Div
        justifyContent="space-between"
        flexDir="row"
        alignItems="center"
        pb={10}
        mt="xl">
            <Text
            fontWeight="900"
            fontSize="5xl">
                Contact Tracing
            </Text>
            <CloseContactTracingModalButton setModalVisibility={setModalVisibility} />
        </Div>
    )
}

export default ContactTracingHeader