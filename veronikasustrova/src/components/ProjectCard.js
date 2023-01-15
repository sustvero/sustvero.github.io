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
      <h4>{name} | {tools}</h4>
      <img className="project-img" src={image} alt={name}></img>
      <p>{description}</p>
      <a href={link}><button>View Project</button></a>
    </div>
  )
}

export default ProjectCard