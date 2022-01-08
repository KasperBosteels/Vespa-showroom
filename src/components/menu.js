import React from "react"
import { Link } from "gatsby"
import { menubar, nav, navLinkText, listItem } from "./menu.module.css"
const Menu = ({ title }) => {
  return (
    <div className={menubar}>
      <header>{title}</header>
      <nav className={nav}>
        <ul>
          <li className={listItem}>
            <Link classname={Link} to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/scooters" className={navLinkText}>
              Scooters
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Menu
