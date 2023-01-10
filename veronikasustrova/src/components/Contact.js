import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2>Contact Me</h2>
        <p>Send me an email at <a href="mailto:vsustrov@uwaterloo.ca">vsustrov@uwaterloo.ca</a>.</p>
        <p>Let's keep in touch!</p>
        <div className="socials">
          <button>Linkedin</button>
          <button>GitHub</button>
          <button>Facebook</button>
        </div>
    </div>
  )
}

export default Contact