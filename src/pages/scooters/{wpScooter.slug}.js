import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
const ScooterPage = ({
  data: {
    wpScooter: { scooterFields },
  },
}) => {
  return (
    <Layout pageTitle={scooterFields.name}>
      <p>{scooterFields.description}</p>
      <div>
        <h3>specificaties</h3>
        <p>cylinder inhoud: {scooterFields.cc}</p>
        <p>motor cyclussen: {scooterFields.enginestroke}</p>
        <p>wiel breedte: {scooterFields.wheelswidth}</p>
        <p>tank inhoud: {scooterFields.fuelcapacity}</p>
        <p>Km/L: {scooterFields.kmperliter}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpScooter(id: { eq: $id }) {
      scooterFields {
        cc
        description
        enginestroke
        fuelcapacity
        kmperliter
        name
        wheelswidth
      }
    }
  }
`
export default ScooterPage
