import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Scooter from "../../components/scooterspagemodule"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import {
  headerimage,
  scooterobject,
} from "../../components/headerScootersPage.module.css"
const artistPage = ({
  data: {
    allWpScooter: { edges },
    wpPage: { scootersPageFields },
  },
}) => {
  const headerImage = getImage(
    scootersPageFields.headerScooters.picture.localFile
  )
  const headerImageAlt = scootersPageFields.headerScooters.picture.altText
  return (
    <Layout pageTitle="Vespa Scooters">
      <GatsbyImage
        className={headerimage}
        image={headerImage}
        alt={headerImageAlt}
      />
      <div className={scooterobject}>
        {edges.map(item => {
          const scooter = item.node
          return (
            <Scooter key={scooter.id} slug={scooter.slug} scooter={scooter} />
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: { eq: "vespa-scooters" }) {
      scootersPageFields {
        headerScooters {
          description
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 100
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
    allWpScooter {
      edges {
        node {
          id
          scooterFields {
            name
            description
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
    }
  }
`
export default artistPage
