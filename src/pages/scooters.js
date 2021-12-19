import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const artistPage = ({
  data: {
    allWpScooter: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Vespa Scooters">
      {edges.map(item => {
        const scooter = item.node.scooterFields
        return (
          <div>
            <p key={item.node.id}>{scooter.name}</p>
            <p>{scooter.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
    allWpScooter {
      edges {
        node {
          id
          scooterFields {
            name
            description
          }
        }
      }
    }
  }
`
export default artistPage
