import headshot from '../assets/myphoto3.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities in the UAE
          </div>
          <h1 className="hero-title">
            Omar Khaled<br />
            <span className="highlight">Elsangary</span>
          </h1>
          <p className="hero-subtitle">
            Building clean, scalable, and maintainable software solutions. Passionate about writing efficient code, solving complex problems, and delivering high-quality technology projects in the UAE.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              View Projects
            </a>
            <a
              href="/omarAlsangary.pdf"
              download
              className="btn btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper reveal">
          <svg className="hero-image-ring-svg" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="#0088FF" />
              </linearGradient>
            </defs>
            <circle
              cx="50" cy="50" r="49"
              fill="none"
              stroke="url(#ring-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength="100"
              className="hero-image-ring-circle"
            />
          </svg>
          <img src={headshot} alt="Omar Khaled Elsangary" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
