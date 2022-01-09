import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wrapper, content, Title, Picture } from "./homepageheader.module.css"
export const Header = ({ homePageFields }) => {
  const scooterImageAlt = homePageFields.bannerImage.altText
  const scooterimage = getImage(homePageFields.bannerImage.localFile)
  return (
    <div className={wrapper}>
      <div className={content}>
        <h1 className={Title}>{scooterImageAlt}</h1>
        <div>
          <p>{homePageFields.shortDescription}</p>
        </div>
      </div>
      <div>
        <GatsbyImage
          className={Picture}
          image={scooterimage}
          alt={homePageFields.bannerImage.altText}
        />
      </div>
    </div>
  )
}
export default Header
