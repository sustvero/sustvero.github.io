import React from 'react'
import Button from 'react-bootstrap/Button'


const Header = () => {
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-text">
                <h1>Hi! I'm Veronika.</h1>
                <h4>I aim to build software that makes the world a safe, accessible, and inclusive place.</h4>
                <Button variant="outline-light">Light</Button>
            </div>
            
        </div>
    </header>
  )
}

export default Header