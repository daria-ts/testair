import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar/navbar"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.borderWidths.regular} solid
    ${({ theme }) => theme.colors.black};
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Navbar />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "test",
}

export default Header
