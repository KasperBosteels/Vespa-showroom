import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Menu from "./menu"
import { container } from "./layout.module.css"

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
        <Menu title={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <Footer title={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
