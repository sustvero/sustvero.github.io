import React from 'react'
import '../css/WorkCard.css'

const WorkCard = ({
  title,
  image,
  company,
  link,
  description,
  tools,
  dates
}) => {
  return (
    <div>
      <div className="icon">
        <a href={link}><img className="company-icon" src={image} alt={company}></img></a>
        <h5>{dates}</h5>
      </div>
      <div className="text-info">
        <h4>{company} | {title} </h4>
        
        <h5>{tools}</h5>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default WorkCard