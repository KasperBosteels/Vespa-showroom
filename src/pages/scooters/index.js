import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Scooter from "../../components/scooterspagemodule"
import {
  scooterobject,
  container,
} from "../../components/headerScootersPage.module.css"
const artistPage = ({
  data: {
    allWpScooter: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Vespa Scooters">
      <div className={container}>
        <div className={scooterobject}>
          {edges.map(item => {
            const scooter = item.node
            return (
              <Scooter key={scooter.id} slug={scooter.slug} scooter={scooter} />
            )
          })}
        </div>
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
