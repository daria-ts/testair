import styled from "styled-components"
export const HeadLink = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.font.head};
  line-height: ${({ theme }) => theme.lineHeights.lh100};
  color: ${({ theme }) => theme.colors.black};
`
