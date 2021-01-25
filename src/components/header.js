import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { headBg } from "../components/elements/headbg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      width: `100%`,
      padding: `0rem`,
      background: `#fff`,
      display: "flex",
      height: `5rem`,
      borderBottom: `2px solid #000`,
      alignItems: `flex-start`,
      zIndex: `100`,
    }}
  >
    <div
      className="LogoBlock"
      style={{ justifySelf: `start`, background: `red` }}
    >
      LogoBlock
    </div>
    <nav
      className="headerGroup"
      style={{
        display: `flex`,
        justifyContent: `flex-end`,
        alignItems: `right`,
        padding: `1.65rem 0rem`,
        width: `100%`,
        align: `right`,
      }}
    >
      <div
        className="Links"
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(3, auto)`,
          gap: `2rem`,
          padding: `0rem 2rem`,
        }}
      >
        <Link to="/apps">Сервисы</Link>
        <Link to="/articles">Статьи</Link>
        <Link to="/code-kitchen">CodeKitchen</Link>
      </div>
      <div
        className="sotialButtons"
        style={{
          align: `right`,
          width: `200px`,
          background: `red`,
        }}
      >
        buttongroup
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "test",
}

export default Header
