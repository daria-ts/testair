import React, { useState } from "react"
import NavbarLinks from "./navbar-links"
import LogoWrap from "./LogoWrap"
import styled from "styled-components"
import { IconButton } from "../components/icon"

const Navigation = styled.nav`
  height: 4.5rem;

  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const NavboxWrap = styled.div`
  display: flex;
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 0vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: right;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    opacity: 96%;
    justify-content: flex-start;
    padding-top: 5rem;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 4.6rem;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Hamburger = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 24px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <LogoWrap />
      <NavboxWrap>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks /> <IconButton />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks /> <IconButton />
          </Navbox>
        )}
      </NavboxWrap>
    </Navigation>
  )
}

export default Navbar
