import React from 'react'
import ProjectCard from './ProjectCard'

import Nourish from '../assets/nourish.png'
import Whatoodo from '../assets/whatoodo-img.png'
import Goodday from '../assets/goodday-img.png'
import Penumbria from '../assets/penumbria.png'
import ArrowLeft from '../assets/arrow-left.png'
import ArrowRight from '../assets/arrow-right.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/Projects.css'


const items = [
  <ProjectCard 
    name="Whatoodo?"
    image={Whatoodo}
    tools="Kotlin, JavaFX, MySQL, SpringBoot"
    description="Never miss a deadline again."
    link="https://www.youtube.com/watch?v=6tTm47t61os"
  />,
  <ProjectCard 
    name="Nourish" 
    image={Nourish} 
    tools="React" 
    description="A platform for finding and sharing healthy recipes."/>,
  <ProjectCard
    name="GoodDay"
    image={Goodday}
    tools="HTML, CSS, JavaScript"
    description="A Chrome extension that supports mental health while working from home."
    link="https://devpost.com/software/goodday"/>,
  
  <ProjectCard
    name="The Tale of Penumbria"
    image={Penumbria}
    tools="Python"
    description="A platformer PyGame in which the player must pass three platform levels while avoiding spikes and fireballs. My first ever project!"
    link="https://github.com/sustvero/tale-of-penumbria"/>,

];

const Projects = () => {
  return (
    <div>
        <h2>Projects</h2>

          <div className="carousel-container">
            <AliceCarousel 
            infinite 
            items={items} 
            autoPlay={true}
            autoPlayInterval={3000} 
            renderPrevButton={() => {
              return <img src={ArrowLeft} alt="prev" className="arrow arrow-prev"></img>}
            }
            renderNextButton={() => {
              return <img src={ArrowRight} alt="next" className="arrow arrow-next"></img>}
            } />
          </div>

    </div>
  )
}

export default Projects