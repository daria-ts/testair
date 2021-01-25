import React from "react"
import { Img } from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  display: inline;
`

const Wrapper = styled.figure`
  border-radius: ${({ theme }) => theme.radii.circle};
  border: ${({ theme }) => theme.borderWidths.regular};
  filter: drop-shadow (${({ theme }) => theme.shadows.shad100});
`

export const Circle = props => (
  <Wrapper>
    <StyledImg {...props} />
  </Wrapper>
)
