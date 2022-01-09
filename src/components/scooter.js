import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wrapper, image, scootertext, scootername } from "./scooter.module.css"
export const Scooter = ({ scooter, slug }) => {
  const scooterimage = getImage(
    scooter.scooterFields.pictures.picture1.localFile
  )
  const scooterimageAlt = scooter.scooterFields.pictures.picture1.altText
  return (
    <Link to={slug} className={wrapper}>
      <GatsbyImage
        image={scooterimage}
        alt={scooterimageAlt}
        className={image}
      />
      <div className={scootertext}>
        {scooter.scooterFields.name && (
          <h2 className={scootername}>{scooter.scooterFields.name}</h2>
        )}
      </div>
    </Link>
  )
}
export default Scooter
