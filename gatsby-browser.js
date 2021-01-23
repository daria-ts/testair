import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/global-style"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
