import React from "react"
import ReactGA from "react-ga"

const BannerButton = props => {

  const onClick = () => {
    ReactGA.event({
      category: 'BannerButton',
      action: `click-${props.alt}`
    })
  }

  return (
    <a href={props.to || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ borderRadius: "8px", boxShadow: "2px 5px 5px black" }}
        onClick={ props.to ? onClick : null }
      />
    </a>
  )
}

export default BannerButton
