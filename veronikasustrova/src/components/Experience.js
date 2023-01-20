import React from 'react'
import WorkCard from './WorkCard'
import WSIB from '../assets/wsib.jpg'
import WSIBLab from '../info/workExperience'

const Experience = () => {
  return (
    <div>
        <h2>Experience</h2>
        <WorkCard company="WSIB Innovation Lab" title="Full-Stack Developer" dates="May 2022 - Aug 2022" 
        image={WSIB}
        tools="Flutter, React, Node.js, MongoDB"
        description="Developed and demoed a cross-platform mobile application POC using Flutter, Node.js, and MongoDB, aiming to enable WSIB's client base of 5 million to request compensation for workplace injuries through a dynamic mobile intake form
        Configured an uploading feature using React.js for the Lab's Hiring Helper application, allowing admin users to upload co-op resume packages while specifying which university and role they are from
        Conducted and reviewed 7 technical interviews for incoming developers, and organized 12 Lab-wide Inclusion Discussions to facilitate interactive conversations regarding current social issues.
        "/>
    </div>
  )
}

export default Experience