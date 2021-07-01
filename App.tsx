import React from "react"
import { AppRegistry } from "react-native"
import { ThemeProvider } from "react-native-magnus"
import Index from "./Index"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent("App", () => App)

export default App
