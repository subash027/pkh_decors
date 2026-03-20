import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp, FaYoutube, FaHeart } from 'react-icons/fa'
import Logo from './Logo'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="footer-desc">
              We specialize in creating unforgettable moments for every occasion. 
              From grand weddings to intimate celebrations, PKH Decors brings your vision to life.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/919597634699" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Event Type</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>Wedding Decoration (திருமண அலங்காரம்)</li>
              <li>Birthday Celebration (பிறந்தநாள்)</li>
              <li>Engagement (நிச்சயதார்த்தம்)</li>
              <li>Baby Shower (வளைகாப்பு)</li>
              <li>DJ Music & Buffet</li>
              <li>Garland (மாலை)</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <FaPhone />
                <div>
                  <a href="tel:9597634699">9597634699</a><br/>
                  <a href="tel:6369947567">6369947567</a>
                </div>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:decorbypkh@gmail.com">decorbypkh@gmail.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>All over Tamil Nadu & Puducherry</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PKH Decors - Prakash Creative Decorator. All rights reserved.</p>
          <p className="made-with">Made with <FaHeart className="heart-icon" /> for beautiful celebrations</p>
        </div>
      </div>
    </footer>
  )
}
