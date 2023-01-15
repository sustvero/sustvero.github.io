import React from 'react'
import ProjectCard from './ProjectCard'

import Nourish from '../assets/nourish.png'

const Projects = () => {
  return (
    <div>
        <h2>Projects</h2>

          <div>
          <ProjectCard name="Nourish" image={Nourish} tools="React" description="A platform for finding and sharing healthy recipes."/>
          </div>

        
        

    </div>
  )
}

export default Projects