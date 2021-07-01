import React from "react"
import { Div, Text } from "react-native-magnus"
import ClearContactTracingListButton from "./ClearContactTracingListButton"
import CloseContactTracingModalButton from "./CloseContactTracingModalButton"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ContactTracingHeader = ({
  setModalVisibility,
}: {
  setModalVisibility: (value: boolean) => void
}) => {
  return (
    <Div
      justifyContent="space-between"
      flexDir="row"
      alignItems="center"
      pb={20}
      mt="xl"
    >
      <Text fontWeight="900" fontSize="5xl">
        Contact Tracing
      </Text>
      <ClearContactTracingListButton />
      <CloseContactTracingModalButton setModalVisibility={setModalVisibility} />
    </Div>
  )
}

export default ContactTracingHeader
