import React from 'react'
import "../css/ProjectCard.css"

const ProjectCard = ({
  name,
  image,
  description,
  tools,
  link
}) => {
  return (
    <div>
      <h5>{name}</h5>
      <img className="project-img" src={image} alt={name}></img>
      <h6>{tools}</h6>
      <p>{description}</p>
      <a href={link}><button>View Project</button></a>
    </div>
  )
}

export default ProjectCard