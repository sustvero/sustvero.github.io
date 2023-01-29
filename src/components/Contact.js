import React from 'react'
import "../css/Contact.css"
import LinkedIn from "../assets/lk-icon.png"
import GitHub from "../assets/gh-icon.png"
import Facebook from "../assets/fb-icon.png"


const Contact = () => {
  return (
    <div>
        <h2>Contact Me</h2>
        <p>Send me an email at <a href="mailto:vsustrov@uwaterloo.ca">vsustrov@uwaterloo.ca</a>.</p>
        <p>Let's keep in touch!</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sustvero/"><img className="icon-img" src={LinkedIn} alt="linkedin"></img></a>
          <a href="https://github.com/sustvero"><img className="icon-img" src={GitHub} alt="github"></img></a>
          <a href="https://www.facebook.com/veronika.sustrova.969/"><img className="icon-img" src={Facebook} alt="facebook"></img></a>
        </div>
    </div>
  )
}

export default Contact