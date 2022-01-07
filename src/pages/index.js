import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Scooter from "../components/scooter"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  scooters,
} from "../components/page.module.css"
const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const scooterimage = getImage(homePageFields.bannerImage.localFile)
  const featuredscooters = homePageFields.featuredVespa
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePageFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.shortDescription,
            }}
          />
        </div>
        <div>
          <GatsbyImage
            className={headerPicture}
            image={scooterimage}
            alt={homePageFields.bannerImage.altText}
          />
        </div>
      </div>
      <div>
        <h2>{featuredscooters.title}</h2>
        <p>{featuredscooters.description}</p>
        <div className={scooters}>
          {featuredscooters.scooter.map(scooter => {
            return (
              <Scooter
                slug={`scooters/${scooter.slug}`}
                scooter={scooter}
                key={scooter.id}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home-page" }) {
      homePageFields {
        title
        shortDescription
        bannerImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        featuredVespa {
          scooter {
            ... on WpScooter {
              id
              scooterFields {
                name
                pictures {
                  picture1 {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                  }
                }
                description
              }
              slug
            }
          }
          description
          title
        }
      }
    }
  }
`
export default IndexPage
