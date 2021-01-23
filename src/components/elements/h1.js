import styled from "styled-components"
export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.sub};
  font-family: ${({ theme }) => theme.font.head};
  margin-top: ${({ theme }) => theme.spacings.big};
  line-height: ${({ theme }) => theme.lineHeights.lh150};
  color: ${({ theme }) => theme.colors.red};
`
