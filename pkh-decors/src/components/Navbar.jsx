import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import Logo from './Logo'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Logo />
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/events" onClick={closeMenu}>Event Type</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
        </ul>

        <div className="nav-right">
          <a href="tel:9597634699" className="nav-phone">
            <FaPhone /> <span>9597634699</span>
          </a>
          <Link to="/contact" className="btn btn-primary nav-cta">Enquire Now</Link>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  )
}
