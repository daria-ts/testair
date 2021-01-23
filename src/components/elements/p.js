import styled from "styled-components"
export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.font.base};
  line-height: ${({ theme }) => theme.lineHeights.lh150};
  color: ${({ theme }) => theme.colors.blue};
`
