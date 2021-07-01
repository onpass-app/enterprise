import React from "react"
import { Modal } from "react-native-magnus"
import ContactTracingHeader from "./ContactTracingHeader"
import ContactTracingList from "./ContactTracingList"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ContactTracingModal = ({
  modalVisibility,
  setModalVisibility,
}: {
  modalVisibility: boolean
  setModalVisibility: (value: boolean) => void
}) => {
  return (
    <Modal isVisible={modalVisibility} pl={20} pr={20}>
      <ContactTracingHeader setModalVisibility={setModalVisibility} />
      <ContactTracingList />
    </Modal>
  )
}

export default ContactTracingModal
