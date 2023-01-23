import React from 'react'

export default function Header() {
  return (
    
    <header>
    <nav className="navbar">
        <div classNameName="brand-title">Navigation Bar</div>
        <a href="/" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <div className="navbar-links">
            <ul>
                <li className="item"><a href="/home">Home</a></li>
                <li className="item"><a href="/about">About</a></li>
                <li className="item"><a href="/services">Services</a></li>
                <li className="item"><a href="/contact us">Contact Us</a></li>
            </ul>
        </div>
    </nav>
</header>
    
  )
}
