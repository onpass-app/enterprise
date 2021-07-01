import * as React from "react"
import { Button, Icon } from "react-native-magnus"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ScanAgainButton = ({
  setShouldScan,
}: {
  setShouldScan: (value: boolean) => void
}) => {
  return (
    <Button
      bg="black"
      alignItems="center"
      rounded="md"
      onPress={() => setShouldScan(true)}
    >
      <Icon
        name="ios-qr-code-outline"
        fontFamily="Ionicons"
        fontSize={32}
        color="white"
      />
    </Button>
  )
}

export default ScanAgainButton
