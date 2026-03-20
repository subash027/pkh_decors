import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/EventType.css'

const events = [
  {
    title: 'Wedding Decoration',
    tamil: 'திருமண அலங்காரம்',
    image: '/src/gallery/wedding_dec.jpg',
    desc: 'Transform your wedding venue into a breathtaking paradise. From traditional mandap decorations to contemporary stage setups, we create the perfect ambiance for your special day. Our wedding decoration packages include stage decoration, entrance arch, aisle decoration, table centerpieces, lighting, and floral arrangements.',
    features: ['Stage Decoration', 'Mandap Setup', 'Floral Arrangements', 'Entrance Arch', 'Aisle Decor', 'Lighting Setup'],
  },
  {
    title: 'Birthday Celebration',
    tamil: 'பிறந்தநாள் விழா',
    image: '/src/gallery/birthday_celeb.jpg',
    desc: 'Make every birthday unforgettable with our creative decoration setups. We offer themed parties for kids and adults, balloon decorations, backdrop setups, cake table arrangements, and photo booth corners. From 1st birthday to milestone celebrations, we handle it all!',
    features: ['Theme Decoration', 'Balloon Arch', 'Backdrop Setup', 'Cake Table', 'Photo Booth', 'Party Props'],
  },
  {
    title: 'Engagement Ceremony',
    tamil: 'நிச்சயதார்த்தம்',
    image: '/src/gallery/engagement_ceremony.jpg',
    desc: 'Set the perfect stage for your engagement ceremony. Our elegant decoration designs create a romantic and festive atmosphere. We specialize in ring ceremony setups, couple seating arrangements, backdrop decorations with fresh flowers, and photo-worthy corners.',
    features: ['Ring Ceremony Stage', 'Couple Seating', 'Floral Backdrop', 'Welcome Board', 'Photo Corner', 'Hanging Decor'],
  },
  {
    title: 'Baby Shower',
    tamil: 'வளைகாப்பு',
    image: '/src/gallery/baby_shower.jpg',
    desc: 'Celebrate the arrival of your little one with our beautiful baby shower (வளைகாப்பு) decorations. We blend traditional Tamil customs with modern decor elements to create a warm and joyful celebration. Options include traditional swing decoration, bangle ceremony setup, and photo zones.',
    features: ['Traditional Swing Decor', 'Bangle Ceremony Setup', 'Theme Backdrop', 'Mom-to-be Chair', 'Photo Zone', 'Gift Table'],
  },
  {
    title: 'DJ Music',
    tamil: 'டிஜே இசை',
    image: '/src/gallery/dj_music.jpg',
    desc: 'Elevate your event with our professional DJ music services. We provide state-of-the-art sound systems, dynamic lighting effects, fog machines, and an experienced DJ who knows how to keep the crowd entertained. Perfect for weddings, birthdays, and all celebration events.',
    features: ['Professional DJ', 'Sound System', 'LED Lighting', 'Fog Machine', 'Dance Floor Setup', 'Song Requests'],
  },
  {
    title: 'Buffet Stall',
    tamil: 'உணவு அரங்கம்',
    image: '/src/gallery/buffet_stall.jpg',
    desc: 'Beautiful buffet stall arrangements that make your food presentation as impressive as the taste. We design and set up elegant buffet counters, food stations, live cooking corners, and dessert tables with decorative elements that complement your event theme.',
    features: ['Buffet Counter Setup', 'Food Station Design', 'Dessert Table', 'Live Counter Decor', 'Menu Display', 'Serving Setup'],
  },
  {
    title: 'Garland Making',
    tamil: 'மாலை கட்டுதல்',
    image: '/src/gallery/garland_2.jpg',
    desc: 'Our expert garland (மாலை) makers create stunning fresh flower garlands for all occasions. From traditional jasmine (மல்லிகை) garlands to elaborate wedding garlands (திருமண மாலை), bridal garlands, and deity garlands — all handcrafted with love and fresh flowers.',
    features: ['Wedding Garlands', 'Bridal Maalai', 'Jasmine Garlands', 'Deity Garlands', 'Door Decorations', 'Custom Designs'],
  },
]

export default function EventType() {
  return (
    <div className="event-type">
      {/* Hero */}
      <section className="event-hero">
        <div className="event-hero-overlay"></div>
        <div className="container event-hero-content">
          <h1>Our <span className="gold-text">Services</span></h1>
          <p>Comprehensive event decoration services for every celebration</p>
        </div>
      </section>

      {/* Events List */}
      <section className="section">
        <div className="container">
          {events.map((event, i) => (
            <div key={i} className={`event-detail ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="event-detail-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="event-detail-badge">{event.tamil}</div>
              </div>
              <div className="event-detail-info">
                <h2>{event.title}</h2>
                <span className="event-tamil">{event.tamil}</span>
                <p>{event.desc}</p>
                <div className="event-features">
                  {event.features.map((f, j) => (
                    <span key={j} className="feature-tag">{f}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Enquire Now <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="event-cta">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>We customize our services to match your unique vision. Contact us to discuss your requirements!</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
