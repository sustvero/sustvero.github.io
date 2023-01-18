import React, { useState } from 'react'
import "../css/ProjectCard.css"

const ProjectCard = ({
  name,
  image,
  description,
  tools,
  link
}) => {
  // whether button should be displayed or not
  const [style, setStyle] = useState({display: 'none'})


  return (
    <div className="card-container">
      <h4>{name} | {tools}</h4>
      <div className="img-container" 
        onMouseOver={() => setStyle({display: 'flex'})}
        onMouseLeave={() => setStyle({display: 'none'})}>
        <button className="view-btn" style={style}><a href={link}>View Project</a> </button>
      <img className="project-img" src={image} alt={name}>
      </img>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard