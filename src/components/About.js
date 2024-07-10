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
          <p>Hi! My name is Veronika Sustrova and I'm a senior Computer Science student at the University of Waterloo.</p>
            <p>I've had experience in various software engineering areas, including full-stack development, low-level database development, mobile development, privacy engineering, and QA.
            I’m fascinated by the creative possibilities tech offers, particularly those that create a positive social impact.
            </p>  
            <p>I'm also passionate about supporting underrepresented communities in tech! I've been involved in communities such as Waterloo Women in Computer Science (WiCS) and Tech+ UW.</p>
            <p>📍 Currently, I'm in Los Gatos, California interning on the Privacy and Data Protection team at Netflix!</p>
            
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