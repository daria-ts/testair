import React from "react"
import LogoImg from "./LogoImg"
import styled from "styled-components"

const Wrap = styled.div`
  position: absolute;
  left: 1.5rem;
  width: 15.2rem;
`

const LogoWrap = () => (
  <>
    <Wrap>
      <LogoImg />
    </Wrap>
  </>
)

export default LogoWrap
