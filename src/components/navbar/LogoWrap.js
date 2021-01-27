import React from "react"
import LogoImg from "./LogoImg"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrap = styled.div`
  position: absolute;
  left: 1.5rem;
  width: 15.2rem;
  z-index: 100;
`

const LogoWrap = () => (
  <>
    <Wrap as={Link} to="/">
      <LogoImg />
    </Wrap>
  </>
)

export default LogoWrap
