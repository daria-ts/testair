import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle } from "./src/themes/global-style"
export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)
