import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ScooterPage = ({
  data: {
    wpScooter: { scooterFields },
  },
}) => {
  const scooterimage = getImage(scooterFields.pictures.picture1.localFile)
  const altText = scooterFields.pictures.picture1.altText
  return (
    <Layout pageTitle={scooterFields.name}>
      <div>
        <GatsbyImage image={scooterimage} alt={altText} />
        <p>{scooterFields.description}</p>
      </div>
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
        pictures {
          picture1 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
        }
      }
      colors {
        nodes {
          name
        }
      }
    }
  }
`
export default ScooterPage
