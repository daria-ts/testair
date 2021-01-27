import React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <Link to="/apps">Сервисы</Link>
      <Link to="/articles">Статьи</Link>
      <Link to="/code-kitchen">CodeKitchen</Link>
    </>
  )
}

export default NavbarLinks
