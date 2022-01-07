import React from "react"
import { mainFooter } from "./footer.module.css"
const Footer = ({ title }) => {
  return (
    <footer className={mainFooter}>
      <p>{title}</p>
    </footer>
  )
}
export default Footer
