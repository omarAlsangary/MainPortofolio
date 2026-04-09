import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">About</h2>

        <div className="about-metrics about-metrics-3 reveal reveal-delay-1">
          <div className="metric">
            <span className="metric-title">1500+</span>
            <span className="metric-desc">Problems Solved</span>
          </div>
          <div className="metric">
            <span className="metric-title">DSA</span>
            <span className="metric-desc">Algorithms & Data Structures</span>
          </div>
          <div className="metric">
            <span className="metric-title">Strong</span>
            <span className="metric-desc">Problem Solving</span>
          </div>
        </div>

        <h3 className="subsection-title reveal reveal-delay-2">What I Bring</h3>
        <div className="about-grid reveal reveal-delay-3">
          <div className="about-card">
            <h4>Problem Solving</h4>
            <p>Strong algorithmic and analytical depth</p>
          </div>
          <div className="about-card">
            <h4>Fast Learning</h4>
            <p>Quickly adapt to new tools and tech</p>
          </div>
          <div className="about-card">
            <h4>Code Quality</h4>
            <p>Write clean, maintainable, efficient code</p>
          </div>
          <div className="about-card">
            <h4>Full-Stack SDLC</h4>
            <p>End-to-end development and deployment</p>
          </div>
          <div className="about-card">
            <h4>CS Foundation</h4>
            <p>Core grasp of DSA, OOP, and databases</p>
          </div>
          <div className="about-card">
            <h4>Collaboration</h4>
            <p>Code reviews and effective teamwork</p>
          </div>
        </div>

        <div className="about-projects-hint reveal reveal-delay-4">
          <a href="#projects" className="hint-card" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <div className="hint-content">
              <h4>Projects</h4>
              <p>Real-world systems (see Projects section)</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
