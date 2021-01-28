import React from "react"
import Icon from "./Icon"
import styled from "styled-components"

const Wrap = styled.div`
  position: absolute;
  left: 1.5rem;
  width: 15.2rem;
  z-index: 100;
`

const IconButton = () => (
  <>
    <Wrap as={Link} to="/">
      <Icon icon="warning" />
    </Wrap>
  </>
)

export default IconButton
