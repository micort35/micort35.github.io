import React from "react"
import PropTypes from "prop-types"

const Section = props => (
  <section id={props.id} className={props.classes}>
    {props.name && <h1 className="section__header">{props.name}</h1>}
    {props.children}
  </section>
)

Section.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  classes: "",
  name: "",
}

export default Section
