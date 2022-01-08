import React from "react"
import { mainFooter } from "./footer.module.css"
const Footer = ({ title }) => {
  return (
    <footer className={mainFooter}>
      <p>{title} | All Rights Reserved</p>
    </footer>
  )
}
export default Footer
