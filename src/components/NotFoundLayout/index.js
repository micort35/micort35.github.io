import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Section from "../Section"
import "./notfoundlayout.scss"

const NotFoundLayout = () => {
  const image = useStaticQuery(graphql`
    query NotFoundImage {
      error: file(relativePath: { eq: "obi-wan_error.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="bg-light-surface smooth-scroll">
      <Section id="error" classes="section">
        <div className="error__container">
          <h1 className="error__header">
            Uh oh, seems you've arrived a page that doesn't exist.
          </h1>
          <div className="flex-center">
            <Img
              fluid={image.error.childImageSharp.fluid}
              alt="Impossible, perhaps the archives are incomplete."
              role="presentational"
              className="error__img"
            />
            <div className="error__link bg-light-primary">
              <Link to="/">Let's get you back on the right track.</Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default NotFoundLayout
