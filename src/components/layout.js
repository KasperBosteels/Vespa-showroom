/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import {
  container,
  nav,
  navLink,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav className={nav}>
          <ul className={navLink}>
            <li></li>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/scooters" className={navLinkText}>
                Scooters
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <Footer title={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
