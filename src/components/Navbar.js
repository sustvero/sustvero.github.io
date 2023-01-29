import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="link-wrapper ml-auto">
        
                
                    <button>
                    <Link to="about-me" smooth={true} offset={-50}>About</Link>
                    </button>
                
                    <button>
                    <Link to="my-experience" smooth={true} offset={-50}>Experience</Link>
                    </button>
                
                    <button>
                    <Link to="my-projects" smooth={true} offset={-50}>Projects</Link>
                    </button>
                
                    <button>
                    <Link to="contact-me" smooth={true} offset={-50}>Contact</Link>
                    </button>
                
            
        </div>
    </div>
  )
}

export default Navbar