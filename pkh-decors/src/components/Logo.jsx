import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#b8860b' }} />
            <stop offset="50%" style={{ stopColor: '#daa520' }} />
            <stop offset="100%" style={{ stopColor: '#ffd700' }} />
          </linearGradient>
        </defs>
        {/* Outer decorative circle */}
        <circle cx="50" cy="50" r="47" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#logoGrad)" strokeWidth="0.8" />
        
        {/* Inner background */}
        <circle cx="50" cy="50" r="40" fill="#1a1a2e" />
        
        {/* PKH Text */}
        <text x="50" y="42" textAnchor="middle" fontFamily="'Playfair Display', serif" 
              fontSize="24" fontWeight="700" fill="url(#logoGrad)" letterSpacing="3">
          PKH
        </text>
        
        {/* Decorative line */}
        <line x1="22" y1="48" x2="78" y2="48" stroke="url(#logoGrad)" strokeWidth="0.8" />
        
        {/* Decors text */}
        <text x="50" y="60" textAnchor="middle" fontFamily="'Poppins', sans-serif" 
              fontSize="9" fill="#f8f5f0" letterSpacing="4" fontWeight="300">
          DECORS
        </text>
        
        {/* Small decorative elements */}
        <text x="50" y="72" textAnchor="middle" fontFamily="'Poppins', sans-serif" 
              fontSize="5.5" fill="#8b8b8b" letterSpacing="1">
          EST. EVENTS
        </text>
        
        {/* Corner decorations */}
        <path d="M 20 20 Q 20 15, 25 15" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
        <path d="M 80 20 Q 80 15, 75 15" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
        <path d="M 20 80 Q 20 85, 25 85" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
        <path d="M 80 80 Q 80 85, 75 85" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
      </svg>
      <div className="logo-text">
        <span className="logo-name">PKH Decors</span>
        <span className="logo-tagline">Prakash Creative Decorator</span>
      </div>
    </Link>
  )
}
