import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const LogoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo@2x" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 243, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
}

export default LogoImg
