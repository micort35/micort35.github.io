import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../Navbar"
import Section from "../Section"
import CardGallery from "../CardGallery"
import Footer from "../Footer"

import "./homelayout.scss"

const HomeLayout = () => {
  const images = useStaticQuery(graphql`
    query Images {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait: file(relativePath: { eq: "portrait.jpg" }) {
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
      <Navbar />
      <main className="content">
        <Section id="landing" classes="section">
          <div className="flex-center pt-20">
            <div className="intro">
              <h1 className="intro__header">Hey, I'm Michael.</h1>
              <h2 className="intro__blurb">
                Currently an{" "}
                <span className="highlight">associate systems engineer</span>{" "}
                at <span className="highlight">Northwestern Mutual</span>. A
                recent graduate in Computer Science from{" "}
                <span className="highlight">
                  Rutgers University-New Brunswick
                </span>
                .
              </h2>
            </div>
            <Img
              fluid={images.headshot.childImageSharp.fluid}
              role="presentation"
              className="headshot"
            />
          </div>
        </Section>

        <Section id="about" classes="section" name="About">
          <div className="flex-center pt-15">
            <Img
              fluid={images.portrait.childImageSharp.fluid}
              className="portrait"
              role="presentation"
              title="From Banff National Park"
            />
            <p className="bio">
              A software engineer that aims to be a polyglot in both digital
              and spoken language, I try to stay well-rounded. On most days,
              you could probably find me either gaming or playing basketball.
              Those other days, I might be reading, trying to mix in some new
              herb from my garden in my cooking, or just laying in bed watching
              a new show. I'm always looking forward to new challenges or trying
              to learn something new, so if you've got an opportunity,
              professional or not, get in touch! Also, if you're any good at
              Rocket League, I consider that an amazing opportunity, so reach out...
            </p>
          </div>
        </Section>

        <Section id="projects" classes="" name="Projects">
          <CardGallery src="projects" />
        </Section>

        <Section id="experience" classes="" name="Experience">
          <CardGallery src="experience" />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
