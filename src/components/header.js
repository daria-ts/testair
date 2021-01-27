import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { HeadLink } from "../components/elements/head-link"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.borderWidths.regular} solid
    ${({ theme }) => theme.colors.black};
  display: grid;
  grid-template-areas:
    "LogoBlock"
    "HeaderGroup";
  grid-template-columns: 16rem 1fr;
  grid-gap: 0px;
  grid-template-rows: 4rem;
`
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const HeaderGroup = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Links = styled.div`
  height: "5rem";
`

const SotialButtons = styled.div``

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LogoBlock>LogoBlock</LogoBlock>
    <HeaderGroup>
      <Links>
        <Link to="/apps">Сервисы</Link>
        <Link to="/articles">Статьи</Link>
        <Link to="/code-kitchen">CodeKitchen</Link>
      </Links>
      <SotialButtons>buttongroup</SotialButtons>
    </HeaderGroup>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "test",
}

export default Header
