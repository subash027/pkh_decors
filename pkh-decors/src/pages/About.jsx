import { FaCheckCircle, FaUsers, FaAward, FaHandshake, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import '../styles/About.css'

const values = [
  { icon: <FaHeart />, title: 'Passion', desc: 'Every event is a canvas for our creativity and dedication.' },
  { icon: <FaHandshake />, title: 'Trust', desc: 'Building lasting relationships with our clients through reliability.' },
  { icon: <FaAward />, title: 'Quality', desc: 'Premium materials and attention to detail in every setup.' },
  { icon: <FaUsers />, title: 'Teamwork', desc: 'Our experienced crew works seamlessly to deliver perfection.' },
]

const highlights = [
  'Experienced in all kinds of events — Weddings, Birthdays, Engagements, Baby Showers & more',
  'Budget-friendly packages without compromising quality',
  'Services available all over Tamil Nadu and Puducherry',
  'Traditional and modern decoration styles',
  'Professional DJ Music and sound system arrangements',
  'Buffet stall setup and food decoration services',
  'Custom garland (மாலை) making for all occasions',
  'On-time delivery and setup guaranteed',
  'Dedicated event coordinator for every booking',
  'Free consultation and event planning support',
]

export default function About() {
  return (
    <div className="about">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>About <span className="gold-text">PKH Decors</span></h1>
          <p>Prakash Creative Decorator — Crafting Beautiful Memories Since Years</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="story-image">
              <img src="/src/gallery/wedding_dec.jpg" alt="Event decoration" loading="lazy" />
              <div className="story-badge">
                <span className="badge-number">500+</span>
                <span className="badge-text">Events Done</span>
              </div>
            </div>
            <div className="story-content">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <h2>Our Story</h2>
              </div>
              <p className="story-lead">
                <strong>PKH Decors (Prakash Creative Decorator)</strong> is a premium event decoration company 
                dedicated to transforming ordinary spaces into extraordinary experiences.
              </p>
              <p>
                We have extensive experience in handling all kinds of events — from grand weddings (திருமணம்) 
                to intimate birthday celebrations (பிறந்தநாள்), elegant engagements (நிச்சயதார்த்தம்), 
                traditional baby showers (வளைகாப்பு), and much more.
              </p>
              <p>
                What sets us apart is our commitment to quality at budget-friendly prices. We believe every 
                celebration deserves beautiful decorations, regardless of the budget. Our team works closely 
                with you to understand your vision and deliver beyond expectations.
              </p>
              <p>
                We proudly provide our services all across <strong>Tamil Nadu and Puducherry</strong>, 
                bringing joy and beauty to celebrations in every corner of the region.
              </p>
              <div className="story-contact">
                <a href="tel:9597634699" className="btn btn-primary">Contact Us Today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>What drives us to deliver excellence every time</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why We Stand Out</h2>
            <p>Here's what makes PKH Decors the preferred choice</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="section coverage-section">
        <div className="container">
          <div className="coverage-content">
            <div className="coverage-icon">
              <FaMapMarkerAlt />
            </div>
            <h2>Serving All Over Tamil Nadu & Puducherry</h2>
            <p>
              From Chennai to Coimbatore, Madurai to Trichy, Salem to Puducherry — 
              PKH Decors is just a call away. We travel to your location and set up 
              picture-perfect event decorations wherever you are.
            </p>
            <div className="coverage-cities">
              {['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Puducherry', 'Thanjavur'].map((city, i) => (
                <span key={i} className="city-tag">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
