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
    <div className="work-container">
      <div className="icon">
        <a href={link}><img className="company-icon" src={image} alt={company}></img></a>
        <h5>{dates}</h5>
      </div>
      <div className="text-info">
        <h3>{company} | {title} </h3>
        
        <h5>{tools}</h5>
        <div><p>{description}</p></div>
        
        
      </div>
    </div>
  )
}

export default WorkCard