import styled from "styled-components"
export const headBg = styled.header`
  position: absolute;
  width: 100%;
  height: 5rem;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.yellow};
  border-bottom: 2px solid #000;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.black};
`
