import React, { useState } from "react"
import NavbarLinks from "./navbar-links"
import LogoWrap from "./LogoWrap"
import styled from "styled-components"

const Navigation = styled.nav`
  display: grid;
  grid-template-areas:
    "Logo"
    "HeaderGroup";
  grid-template-columns: 16rem 1fr;
  grid-gap: 0px;
  grid-template-rows: 104px;
`
const Toggle = styled.div``
const Navbox = styled.div``
const Hamburger = styled.div``

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <LogoWrap />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
