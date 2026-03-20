import { Link } from 'react-router-dom'
import { FaStar, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaArrowRight, FaQuoteLeft, FaPhone } from 'react-icons/fa'
import '../styles/Home.css'

const services = [
  { title: 'Wedding', tamil: 'திருமண அலங்காரம்', icon: '💍', image: '/src/gallery/wedding_dec_3.jpg', desc: 'Stunning wedding decorations that make your special day magical and memorable.' },
  { title: 'Birthday', tamil: 'பிறந்தநாள் விழா', icon: '🎂', image: '/src/gallery/birthday_celeb.jpg', desc: 'Creative birthday setups with themes, balloons, and personalized touches.' },
  { title: 'Engagement', tamil: 'நிச்சயதார்த்தம்', icon: '💑', image: '/src/gallery/engagement_ceremony.jpg', desc: 'Elegant engagement ceremony decorations that set the perfect tone.' },
  { title: 'Baby Shower', tamil: 'வளைகாப்பு', icon: '👶', image: '/src/gallery/baby_shower_1.jpg', desc: 'Adorable baby shower themes with traditional and modern elements.' },
  { title: 'DJ Music', tamil: 'டிஜே இசை', icon: '🎵', image: '/src/gallery/dj_music_1.jpg', desc: 'High-energy DJ setups with professional sound and lighting systems.' },
  { title: 'Buffet Stall', tamil: 'உணவு அரங்கம்', icon: '🍽️', image: '/src/gallery/buffet_stall_1.jpg', desc: 'Beautifully arranged buffet stalls with elegant food presentation.' },
]

const stats = [
  { icon: <FaCalendarAlt />, number: '500+', label: 'Events Completed' },
  { icon: <FaUsers />, number: '1000+', label: 'Happy Clients' },
  { icon: <FaStar />, number: '4.9', label: 'Average Rating' },
  { icon: <FaMapMarkerAlt />, number: '50+', label: 'Cities Covered' },
]

const testimonials = [
  { name: 'Priya & Karthik', event: 'Wedding', text: 'PKH Decors made our wedding absolutely magical! Every detail was perfect. The team was professional and creative beyond our expectations.', rating: 5 },
  { name: 'Lakshmi', event: 'Baby Shower', text: 'The வளைகாப்பு decoration was beautiful! They blended traditional elements with modern aesthetics perfectly. Highly recommended!', rating: 5 },
  { name: 'Rajesh', event: 'Birthday Party', text: 'Amazing birthday setup for my daughter. The theme decoration, balloon arrangements, and overall ambiance were outstanding!', rating: 5 },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="container hero-content">
          <span className="hero-badge">✨ Premium Event Decorators</span>
          <h1>Creating <span className="gold-text">Magical Moments</span> For Your Special Day</h1>
          <p className="hero-subtitle">
            From grand weddings to intimate celebrations, PKH Decors transforms your dreams into stunning reality. 
            Serving all across Tamil Nadu & Puducherry.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">
              Book Now <FaArrowRight />
            </Link>
            <Link to="/gallery" className="btn btn-secondary">
              View Gallery
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span>Trusted by 1000+ families across Tamil Nadu</span>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>We offer comprehensive event decoration services for every celebration</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <span className="tamil-name">{service.tamil}</span>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/events" className="btn btn-dark">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose PKH Decors?</h2>
            <p>Experience the difference with our dedicated team</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h3>Creative Designs</h3>
              <p>Unique and personalized decoration concepts tailored to your vision and theme.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Budget Friendly</h3>
              <p>Premium quality decorations at affordable prices. We work within your budget.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Experienced Team</h3>
              <p>Years of experience in handling all kinds of events with professionalism.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌍</div>
              <h3>Pan Tamil Nadu</h3>
              <p>We provide services all over Tamil Nadu and Puducherry at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Real stories from real celebrations</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                </div>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Dream Event?</h2>
            <p>Let's discuss your vision and make it a stunning reality. Call us today!</p>
            <div className="cta-btns">
              <a href="tel:9597634699" className="btn btn-primary">
                <FaPhone /> Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Send Enquiry <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
