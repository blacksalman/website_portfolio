import React from 'react'
import './Card.css'
const Card = ({emoji, heading, details, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}>
        <img src={emoji} alt="Heart image" />
        <span>{heading}</span>
        <span>{details}</span>
        <div className="c-button">LEARN MORE</div>
    </div>
  )
}

export default Card