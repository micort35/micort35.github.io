import React from "react"
import PropTypes from "prop-types"

const SVG = props => {
  const svgSet = require.context("../../media/graphics", true, /\.svg$/)

  const svgs = svgSet.keys().reduce((svgs, path) => {
    let svg_name = path.substr(2, path.indexOf(".", 2) - 2)
    svgs[svg_name] = svgSet(path)
    return svgs
  }, {})

  return (
    <img
      src={svgs[props.name]}
      alt={props.alt}
      title={props.title}
      className={props.classes}
    ></img>
  )
}

SVG.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
}

SVG.defaultProps = {
  alt: "presentational",
  title: "",
  classes: "",
}

export default SVG
