import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colorOrb,
  imagecontainer,
  image,
  specificationstable,
  colorsTable,
} from "../../components/scooterSpecification.module.css"
const ScooterPage = ({
  data: {
    wpScooter: { scooterFields },
    wpScooter: { colors },
  },
}) => {
  const scooterimage = getImage(scooterFields.pictures.picture1.localFile)
  const altText = scooterFields.pictures.picture1.altText
  return (
    <Layout pageTitle={scooterFields.name}>
      <div classname={imagecontainer}>
        <GatsbyImage className={image} image={scooterimage} alt={altText} />
        <p>{scooterFields.description}</p>
      </div>
      <div classname="tables">
        <table classname={specificationstable}>
          <tr>
            <th>Specifications</th>
            <th> </th>
          </tr>
          <tr>
            <td>CC(cubic capacity)</td>
            <td>{scooterFields.cc}</td>
          </tr>
          <tr>
            <td>engine stroke</td>
            <td>{scooterFields.enginestroke}</td>
          </tr>
          <tr>
            <td>wheel width</td>
            <td>{scooterFields.wheelswidth}</td>
          </tr>
          <tr>
            <td>fuel capacity</td>
            <td>{scooterFields.fuelcapacity}L</td>
          </tr>
          <tr>
            <td>Km/L</td>
            <td>{scooterFields.kmperliter}</td>
          </tr>
        </table>
        <table className={colorsTable}>
          <tr>
            <th>Available colors:</th>
            {colors.nodes.map(color => {
              const scooterAvailableColor = color.name
              return (
                <td
                  classname={colorOrb}
                  style={{ color: `${scooterAvailableColor}` }}
                >
                  ⬤
                </td>
              )
            })}
          </tr>
        </table>
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
