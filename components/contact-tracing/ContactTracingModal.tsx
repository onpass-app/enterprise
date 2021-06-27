import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Modal } from "react-native-magnus"
import { clearContactTracingList } from "../../database"
import ContactTracingHeader from "./ContactTracingHeader"
import ContactTracingList from "./ContactTracingList"

const ContactTracingModal = ({ modalVisibility, setModalVisibility }: { modalVisibility: boolean, setModalVisibility: any }) => {
    return (
        <Modal
        isVisible={modalVisibility}
        pl={20}
        pr={20}>
            <ContactTracingHeader setModalVisibility={setModalVisibility} />
            <ContactTracingList />
        </Modal>
    )
}

export default ContactTracingModal