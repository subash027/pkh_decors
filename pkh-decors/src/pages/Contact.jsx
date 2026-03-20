import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa'
import '../styles/Contact.css'

const eventTypes = [
  'Wedding Decoration (திருமண அலங்காரம்)',
  'Birthday Celebration (பிறந்தநாள்)',
  'Engagement (நிச்சயதார்த்தம்)',
  'Baby Shower (வளைகாப்பு)',
  'DJ Music (டிஜே இசை)',
  'Buffet Stall (உணவு அரங்கம்)',
  'Garland Making (மாலை)',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', location: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', location: '', budget: '', message: '' })
  }

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container contact-hero-content">
          <h1>Contact <span className="gold-text">Us</span></h1>
          <p>Let's create something beautiful together</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <a href="tel:9597634699" className="contact-card">
              <div className="contact-card-icon"><FaPhone /></div>
              <h3>Call Us</h3>
              <p>9597634699</p>
              <p>6369947567</p>
            </a>
            <a href="https://wa.me/919597634699" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon whatsapp"><FaWhatsapp /></div>
              <h3>WhatsApp</h3>
              <p>9597634699</p>
              <p>Quick Response</p>
            </a>
            <a href="mailto:decorbypkh@gmail.com" className="contact-card">
              <div className="contact-card-icon"><FaEnvelope /></div>
              <h3>Email Us</h3>
              <p>decorbypkh@gmail.com</p>
              <p>We reply within 24hrs</p>
            </a>
            <div className="contact-card">
              <div className="contact-card-icon"><FaMapMarkerAlt /></div>
              <h3>Service Area</h3>
              <p>All over Tamil Nadu</p>
              <p>& Puducherry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-info">
              <h2>Send Us an Enquiry</h2>
              <p>
                Fill in the form below and we'll get back to you soon with a customized quote 
                for your event. We'll work within your budget to create the perfect celebration!
              </p>
              <div className="form-info-items">
                <div className="form-info-item">
                  <FaClock />
                  <div>
                    <strong>Working Hours</strong>
                    <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <div className="form-info-item">
                  <FaPhone />
                  <div>
                    <strong>Phone</strong>
                    <span>9597634699 / 6369947567</span>
                  </div>
                </div>
                <div className="form-info-item">
                  <FaEnvelope />
                  <div>
                    <strong>Email</strong>
                    <span>decorbypkh@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="form-success">
                  ✅ Thank you! Your enquiry has been submitted. We'll contact you soon!
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required>
                    <option value="">Select Event Type</option>
                    {eventTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date</label>
                  <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Event Location</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="City / Venue name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Approximate Budget</label>
                <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select Budget Range</option>
                  <option value="Under ₹10,000">Under ₹10,000</option>
                  <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message / Requirements</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your event requirements, theme preferences, etc." rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <FaPaperPlane /> Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
