import styled from "styled-components"
export const Circle = styled.figure`
  border-radius: ${({ theme }) => theme.radii.circle};
  border: ${({ theme }) => theme.borderWidths.regular};
  border-color: ${({ theme }) => theme.colors.black};
  filter: drop-shadow (${({ theme }) => theme.shadows.shad100});
`
