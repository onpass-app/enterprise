import React from "react"
import { Modal } from "react-native-magnus"
import ContactTracingHeader from "./ContactTracingHeader"

const ContactTracingModal = ({ modalVisibility, setModalVisibility }: { modalVisibility: boolean, setModalVisibility: any }) => {
    return (
        <Modal
        isVisible={modalVisibility}
        pl={20}
        pr={20}>
            <ContactTracingHeader setModalVisibility={setModalVisibility} />
        </Modal>
    )
}

export default ContactTracingModal