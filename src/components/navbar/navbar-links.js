import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.font.head};
  letter-spacing: ${({ theme }) => theme.letterSpacings.whide};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  padding: 1.73rem 0;
  justify-self: right;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: ${({ theme }) => theme.colors.red};
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: ${({ theme }) => theme.colors.red};
    ::after {
    
      padding: 2px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 124px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    z-index: 6;

    :hover {
    ::after {
      padding: 1px 84px;
      width: 10px;
    }


  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/apps">Сервисы</NavItem>
      <NavItem to="/articles">Статьи</NavItem>
      <NavItem to="/code-kitchen">CodeKitchen</NavItem>
    </>
  )
}

export default NavbarLinks
