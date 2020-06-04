import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faAngellist } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import "./footer.scss"

const Footer = () => {
  const resume = useStaticQuery(graphql`
    query Resume {
      file(relativePath: { eq: "MichaelOrtiz_Resume.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <footer id="contact">
      <div className="footer__filebox bg-light-primary">
        <a
          href={resume.file.publicURL}
          target="_blank"
          rel="noreferrer"
          className="footer__filebox__wrapper"
        >
          <FontAwesomeIcon icon={faFileAlt} size="5x" color="white" />
          <p className="footer__filebox__text">Take a copy of my resume</p>
        </a>
      </div>
      <div className="footer bg-light-footer">
        <ul className="footer__contacts">
          <a href="https://github.com/micort35">
            <li className="footer__icon">
              <FontAwesomeIcon icon={faGithubAlt} size="4x" color="white" />
            </li>
          </a>
          <a href="https://linkedin.com/in/micort35">
            <li className="footer__icon">
              <FontAwesomeIcon icon={faLinkedinIn} size="4x" color="white" />
            </li>
          </a>
          <a href="https://angel.co/u/michael-ortiz-16">
            <li className="footer__icon">
              <FontAwesomeIcon icon={faAngellist} size="4x" color="white" />
            </li>
          </a>
          <a href="mailto:micort35@gmail.com?">
            <li className="footer__icon">
              <FontAwesomeIcon icon={faPaperPlane} size="4x" color="white" />
            </li>
          </a>
        </ul>
        <p className="footer__contribs">
          Thank you to{" "}
          <a href="https://konpa.github.io/devicon/" className="highlight">
            Devicon
          </a>{" "}
          for the majority of tech icons. Other icons were created by{" "}
          <a href="https://fontawesome.com/" className="highlight">
            Font Awesome
          </a>
          .<br />
          Website created by Michael Ortiz, information is up to date as of
          6/2/20. <br />
          Content here is not endorsed or associated with any mentioned
          companies.
        </p>
      </div>
    </footer>
  )
}

export default Footer
