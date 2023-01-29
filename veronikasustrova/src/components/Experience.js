import React from 'react'
import WorkCard from './WorkCard'
import WSIB from '../assets/wsib.jpg'
import Kaleidescape from '../assets/kaleidescape-logo.png'
import TribalScale from '../assets/ts-logo.png'
import '../css/Experience.css'

const Experience = () => {
  return (
    <div>
        <h2>Experience</h2>
        <div className="experience-container">
        <WorkCard company="TribalScale" title="Software Engineer" dates="Jan 2023 - Apr 2023" 
        image={TribalScale}
        tools="React.js, JavaScript, Redux, React Native"
        description="Developing new features using React.js and React Redux on Tribemoji, an internal social platform for improving intra-company engagement of 80+ employees using personalized avatars"
        />
        <WorkCard company="WSIB Innovation Lab" title="Full-Stack Developer" dates="May 2022 - Aug 2022" 
        image={WSIB}
        tools="Flutter, React.js, JavaScript"
        description="Developed 50+ screens and 20+ reusable components of a responsive workplace injury claim onboarding mobile app."
        />
        <WorkCard company="Kaleidescape" title="Software Quality Engineer" dates="Sep 2021 - Dec 2021" 
        image={Kaleidescape}
        tools="Cypress, JavaScript, Zephyr"
        description="Developed an automated testing framework to significantly improve deployment rates and the breadth of web store test suites"
        />
        </div>
    </div>
  )
}

export default Experience