import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Scooter from "../components/scooter"
import {
  scooterscontent,
  scooters,
  featuredInfo,
} from "../components/page.module.css"
import Header from "../components/homepageheader"
const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const featuredscooters = homePageFields.featuredVespa
  return (
    <Layout>
      <Header homePageFields={homePageFields}></Header>
      <div className={scooterscontent}>
        <div className={featuredInfo}>
          <h2>{featuredscooters.title}</h2>
          <p>{featuredscooters.description}</p>
        </div>
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
