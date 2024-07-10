import React from 'react'
import WorkCard from './WorkCard'
import WSIB from '../assets/wsib.jpg'
import Kaleidescape from '../assets/kaleidescape-logo.png'
import TribalScale from '../assets/ts-logo.png'
import Adentro from '../assets/adentro.jpg'
import Amazon from '../assets/amazon.png'
import Netflix from '../assets/netflix.jpg'
import '../css/Experience.css'

const Experience = () => {
  return (
    <div>
        <h2>Experience</h2>
        <div className="experience-container">
        <WorkCard company="Netflix" title="Software Engineer Intern" dates="Jun 2024 - Present" 
        image={Netflix}
        tools="SQL, Python"
        description="Researching and implementing privacy-enhancing technologies (PETs) within Netflix datasets, aiming to develop systems that de-identify the data of over 270 million customers worldwide."
        />
        <WorkCard company="Amazon" title="Software Development Engineer Intern" dates="Jan 2024 - May 2024" 
        image={Amazon}
        tools="Rust, Java"
        description="Extended an AWS DynamoDB storage engine diagnostic tool available to 500+ employees to provide effective troubleshooting methods for critical storage engine issues."
        />
        <WorkCard company="Adentro" title="Software Developer Co-op" dates="Sep 2023 - Dec 2023" 
        image={Adentro}
        tools="Go, Python, Scala, SQL, AWS, React.js"
        description="Integrated Adobe advertising with a microservice platform reaching 50 million consumers worldwide, allowing businesses to optimize ad campaign performance through unified customer data across various channels.
        "
        />
        <WorkCard company="TribalScale" title="Software Engineer Co-op" dates="Jan 2023 - Apr 2023" 
        image={TribalScale}
        tools="React.js, JavaScript, Redux, React Native"
        description="Developed new features for Tribemoji, an internal social platform for improving intra-company engagement of 80+ employees using personalized avatars."
        />
        <WorkCard company="WSIB Innovation Lab" title="Full-Stack Developer Co-op" dates="May 2022 - Aug 2022" 
        image={WSIB}
        tools="Flutter, React.js, JavaScript"
        description="Developed 50+ screens and 20+ reusable components of a responsive workplace injury claim onboarding mobile app."
        />
        <WorkCard company="Kaleidescape" title="Software Quality Engineer Co-op" dates="Sep 2021 - Dec 2021" 
        image={Kaleidescape}
        tools="Cypress, JavaScript, Zephyr"
        description="Developed an automated testing framework to significantly improve deployment rates and the breadth of web store test suites."
        />
        </div>
    </div>
  )
}

export default Experience