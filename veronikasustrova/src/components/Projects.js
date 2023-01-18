import React from 'react'
import ProjectCard from './ProjectCard'

import Nourish from '../assets/nourish.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/Projects.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <ProjectCard 
    name="Nourish" 
    image={Nourish} 
    tools="React" 
    description="A platform for finding and sharing healthy recipes."/>,
  <img src="path-to-img" onDragStart={handleDragStart} alt="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} alt="presentation" />,
];

const Projects = () => {
  return (
    <div>
        <h2>Projects</h2>

          <div className="carousel-container">
            <AliceCarousel infinite items={items} />
          </div>

        
        

    </div>
  )
}

export default Projects