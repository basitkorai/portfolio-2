import React, { useState } from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#">
              <img src={Logo} width="50px" height="50px" alt="" />
            </a>
          </div>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded)
            }}
            id="nav-toggle"
            className={`hamburger hamburger--slider nav-toggle ${
              isExpanded ? 'is-active' : null
            } `}
            type="button"
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label="Menu"
            aria-controls="nav-list"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner text-white"></span>
            </span>
          </button>
        </div>
        <nav className="nav-primary" aria-label="Primary">
          {/* links */}
          <ul
            className={`nav-list ${isExpanded ? 'nav-list--expanded' : null}`}
            id="nav-list"
          >
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
