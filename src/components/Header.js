import React from 'react'
import "../css/Header.css"
import PixelHeart from "../assets/pixel-heart.png"

const Header = () => {
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-text">
                <img src={PixelHeart}></img>
                <h1>Hi! I'm Veronika.</h1>
                <h4>I aim to build software that makes the world an accessible and inclusive place.</h4>
                <a href="https://www.linkedin.com/in/sustvero/"><button className="connect-btn">Let's Connect</button></a>
            </div>
            
        </div>
    </header>
  )
}

export default Header