import React from 'react'
import Headshot from "../assets/headshot.jpg"
import "../css/About.css"

const About = () => {
  return (
    <div className="section">
    <div className="about">
        <h2>About Me</h2>
       
        <div className="about-body">
        <div className="about-left">
          <p>My name is Veronika Sustrova and I'm a third-year Computer Science student at the University of Waterloo!</p>
            <p>Through my previous internships, projects, and hackathons, I’ve gained valuable experience in UI development and general software engineering.
            I’m fascinated by the creative possibilities tech offers, particularly how tech can be used for social good 🌱</p>  
            <p>Outside of work, my interests include piano, fitness, fashion, and the occasional game. </p>
            
        </div>
        <div className="about-right">
            <div className="img-container">
            <img src={Headshot} className="headshot" alt="Veronika's Headshot"></img>
            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default About