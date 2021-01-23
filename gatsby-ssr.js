import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/components/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
