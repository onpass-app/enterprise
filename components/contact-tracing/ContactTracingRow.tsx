import { format } from "date-fns"
import React from "react"
import { Div, Text } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ContactTracingRow = ({
  name,
  phoneNumber,
  timestamp,
}: {
  name: string
  phoneNumber: string
  timestamp: number
}) => {
  return (
    <Div bg="black" mt="md" rounded="xl" h={76} mb={5}>
      <Div pt={10} justifyContent="space-between" flexDir="row">
        <Text
          pl={20}
          color="white"
          fontWeight="500"
          fontSize="2xl"
          textAlignVertical="top"
          lineHeight={25}
        >
          {name}
        </Text>
        <Text
          pr={20}
          color="white"
          fontWeight="200"
          fontSize="xl"
          textAlignVertical="top"
          lineHeight={25}
        >
          {phoneNumber}
        </Text>
      </Div>
      <Text
        color="white"
        pt={5}
        pl={20}
        fontWeight="200"
        fontSize="xl"
        lineHeight={25}
      >
        {format(timestamp, "MMM. Io 'at' h:mm aa")}
      </Text>
    </Div>
  )
}

export default ContactTracingRow
