import { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/Gallery.css'

const galleryImages = [
  { src: '/src/gallery/wedding_dec.jpg', category: 'wedding', title: 'Grand Wedding Stage' },
  { src: '/src/gallery/wedding_dec_2.jpg', category: 'wedding', title: 'Floral Wedding Arch' },
  { src: '/src/gallery/engagement_ceremony_1.jpg', category: 'engagement', title: 'Engagement Ceremony' },
  { src: '/src/gallery/birthday_celeb_1.jpg', category: 'birthday', title: 'Birthday Balloon Setup' },
  { src: '/src/gallery/birthday_celeb.jpg', category: 'birthday', title: 'Theme Birthday Party' },
  { src: '/src/gallery/baby_shower_1.jpg', category: 'babyshower', title: 'Baby Shower Decor' },
  { src: '/src/gallery/dj_music.jpg', category: 'dj', title: 'DJ Music Setup' },
  { src: '/src/gallery/buffet_stall.jpg', category: 'buffet', title: 'Buffet Stall Arrangement' },
  { src: '/src/gallery/garland_1.jpg', category: 'garland', title: 'Garland - மாலை' },
  { src: '/src/gallery/engagement_ceremony.jpg', category: 'wedding', title: 'Wedding Reception' },
  { src: '/src/gallery/engagement_ceremony_2.jpg', category: 'wedding', title: 'Outdoor Wedding Decor' },
  { src: '/src/gallery/dj_music_1.jpg', category: 'dj', title: 'Party Lights & DJ' },
  { src: '/src/gallery/buffet_stall_1.jpg', category: 'buffet', title: 'Elegant Food Display' },
  { src: '/src/gallery/engagement_ceremony_3.jpg', category: 'engagement', title: 'Ring Ceremony Setup' },
  { src: '/src/gallery/birthday_celeb_2.jpg', category: 'birthday', title: 'Kids Birthday Theme' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'birthday', label: 'Birthday' },
  { key: 'engagement', label: 'Engagement' },
  { key: 'babyshower', label: 'Baby Shower' },
  { key: 'dj', label: 'DJ Music' },
  { key: 'buffet', label: 'Buffet' },
  { key: 'garland', label: 'Garland' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  
  const navigate = (dir) => {
    if (lightbox === null) return
    const newIndex = lightbox + dir
    if (newIndex >= 0 && newIndex < filtered.length) {
      setLightbox(newIndex)
    }
  }

  return (
    <div className="gallery">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container gallery-hero-content">
          <h1>Our <span className="gold-text">Gallery</span></h1>
          <p>A glimpse of our beautiful event decorations</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-title">{img.title}</span>
                  <span className="gallery-item-cat">{img.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No images in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close"><FaTimes /></button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous"><FaChevronLeft /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src.replace('w=600&h=400', 'w=1200&h=800')} alt={filtered[lightbox].title} />
            <p className="lightbox-caption">{filtered[lightbox].title}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next"><FaChevronRight /></button>
        </div>
      )}
    </div>
  )
}
