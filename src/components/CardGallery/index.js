import React from "react"
import PropTypes from "prop-types"

import Card from "./Card"
import "./cardgallery.scss"

import projects from "../../content/projects.yaml"
import jobs from "../../content/experience.yaml"

const genKey = () => Math.random().toString(36).substr(2, 9)

const CardGallery = props => (
  <div className="gallery pt-10">
    {props.src === "projects"
      ? projects.projects.map((data, index) => {
          return (
            <Card
              key={genKey()}
              header={data.project.header}
              icon={data.project.icon}
              ico_bg={data.project.ico_bg}
              stack={data.project.stack}
              title={data.project.title}
              desc={data.project.description}
              links={data.project.links}
              wip={data.project.wip}
            />
          )
        })
      : jobs.jobs.map((data, index) => {
          return (
            <Card
              key={genKey()}
              header={data.job.header}
              icon={data.job.icon}
              ico_bg={data.job.ico_bg}
              stack={data.job.stack}
              title={data.job.title}
              position={data.job.position}
              desc={data.job.description}
              loc={data.job.loc}
              period={data.job.period}
            />
          )
        })}
  </div>
)

CardGallery.propTypes = {
  src: PropTypes.string.isRequired,
}

export default CardGallery
