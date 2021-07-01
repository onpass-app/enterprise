import React from "react"
import { Div } from "react-native-magnus"
import OpenContactTracingModalButton from "./contact-tracing/OpenContactTracingModalButton"
import ScanAgainButton from "./scanning/ScanAgainButton"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ButtonRow = ({
  setShouldScan,
}: {
  setShouldScan: (value: boolean) => void
}) => {
  return (
    <Div flexDir="row" justifyContent="space-between" px={32} py={64} mt="auto">
      <OpenContactTracingModalButton />
      <ScanAgainButton setShouldScan={setShouldScan} />
    </Div>
  )
}

export default ButtonRow
