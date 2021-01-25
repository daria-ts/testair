import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { headBg } from "../components/elements/headbg"

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.sub};
  font-family: ${({ theme }) => theme.font.head};
  margin-top: ${({ theme }) => theme.spacings.big};
  line-height: ${({ theme }) => theme.lineHeights.lh150};
  color: ${({ theme }) => theme.colors.red};
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      width: `100%`,
      padding: `1.45rem 1.0875rem`,
      background: `#fff`,
      display: "flex",
      height: `5rem`,
      borderBottom: `2px solid #000`,
      alignItems: `flex-start`,
    }}
  >
    <div style={{ justifySelf: `start`, background: `red` }}>LogoBlock</div>
    <headerLinks
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-end`,
        alignItems: `right`,
        padding: `0px`,
        width: `100%`,
        align: `right`,
      }}
    >
      <Link to="/apps">Сервисы</Link>
      <Link to="/articles">Статьи</Link>
      <Link to="/code-kitchen">CodeKitchen</Link>
      <sotial
        style={{
          align: `right`,
          width: `200px`,
          background: `red`,
        }}
      >
        buttongroup
      </sotial>
    </headerLinks>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "test",
}

export default Header
