import React, { useState } from 'react';
import { Button, Icon, Modal } from "react-native-magnus"

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
            <Modal isVisible={modalVisibility}>

            </Modal>
        </>
    )
}

export default OpenContactTracingModalButton