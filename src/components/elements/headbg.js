import styled from "styled-components"
export const headBg = styled.header`
  margin: "0 auto";
  /* width: "100%"; */
  padding: "0rem";
  background: ${({ theme }) => theme.colors.white};
  display: "grid";
  grid-gap: "1rem";
  grid-template-columns: "12rem 1fr";
  height: "5rem";
  border-bottom: ${({ theme }) => theme.borderWidths.regular} solid
    ${({ theme }) => theme.colors.black};
  align-items: "flex-start";
  z-index: ${({ theme }) => theme.zIndices.maxtop};
`
