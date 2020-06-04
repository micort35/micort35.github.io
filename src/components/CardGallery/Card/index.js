import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import SVG from "../../SVG"
import "./card.scss"

const Card = props => (
  <div className="card">
    <div className="card__poster" style={{ backgroundColor: props.ico_bg }}>
      {props.icon ? (
        <SVG name={props.title + "-ico"} classes="card__poster__img" />
      ) : (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          size="7x"
          title="No icon created yet"
        />
      )}
    </div>
    <div className="card__icons">
      <ul>
        {props.stack.map((data, index) => {
          return (
            <li>
              <SVG
                name={data}
                alt={"Built with " + data}
                title={"Built with " + data}
                classes="card__icon"
              />
            </li>
          )
        })}
      </ul>
    </div>
    <div className="card__content">
      <div>
        {props.header ? (
          <SVG name={props.title} classes="card__header" />
        ) : (
          <h4 className="card__header card__header--text">{props.title}</h4>
        )}
        {props.position && (
          <h5 className="card__subheader">{props.position}</h5>
        )}
      </div>
      <div className="card__desc">
        <p>{props.desc}</p>
      </div>
      {props.links && (
        <div className="card__links">
          {props.links.site && (
            <a href={props.links.site}>
              <div className="card__link card__link--accent bg-light-accent">
                <p className="card__link__text">View live</p>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </div>
            </a>
          )}
          <a href={props.links.src}>
            <div className="card__link">
              <p className="card__link__text">View source</p>
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
          </a>
        </div>
      )}
    </div>
  </div>
)

Card.propTypes = {
  header: PropTypes.bool.isRequired,
  icon: PropTypes.bool.isRequired,
  ico_bg: PropTypes.string,
  stack: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  links: PropTypes.object,
  wip: PropTypes.bool,
  position: PropTypes.string,
  loc: PropTypes.string,
  period: PropTypes.string,
}

Card.defaultProps = {
  ico_bg: "#DC3545",
  links: null,
  wip: true,
  position: "",
  loc: "",
  period: "",
}

export default Card
