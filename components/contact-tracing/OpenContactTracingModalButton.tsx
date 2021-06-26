import React, { useState } from 'react';
import { Button, Icon } from "react-native-magnus"
import ContactTracingModal from './ContactTracingModal';

const OpenContactTracingModalButton = () => {
    const [modalVisibility, setModalVisibility] = useState(false)

    return (
        <>
            <Button
            bg="black"
            alignItems="center"
            rounded="md"
            onPress={() => setModalVisibility(true)}>
                <Icon 
                name="ios-person-circle-outline"
                fontFamily="Ionicons"
                fontSize={32}
                color="white"
                />
            </Button>
            <ContactTracingModal
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility} />
        </>
    )
}

export default OpenContactTracingModalButton