import './Approach.css'

const approaches = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    text: <><strong>Full SDLC experience</strong> — from requirements and design through implementation, testing, debugging, deployment, and documentation.</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: <><strong>Strong collaborator</strong> — participates in code reviews, team discussions, and delivers full-stack solutions end-to-end.</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    text: <><strong>Solid CS foundation</strong> — data structures, algorithms, object-oriented programming, databases, and software design principles.</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    text: <><strong>Proven problem-solver</strong> — 1,400+ competitive programming problems and real client projects demonstrate analytical depth and engineering rigor.</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    text: <><strong>Quick learner</strong> — applies new tools, standards, and best practices (MERN, Git, cloud services) to deliver high-quality solutions fast.</>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    text: <><strong>Excellent communicator</strong> — mentoring experience, teamwork skills, and the ability to deliver results under pressure.</>,
  },
]

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">My Approach</h2>
        <p className="section-subtitle reveal">How I think about software engineering.</p>
        <div className="approach-content">
          <p className="approach-intro reveal">
            I am committed to writing clean, maintainable, and efficient code that is easy to understand, test, and scale. Every project I take on is an opportunity to deliver engineering excellence — combining strong fundamentals with modern tools and a relentless focus on quality.
          </p>
          <div className="approach-list">
            {approaches.map((item, i) => (
              <div key={i} className={`approach-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="approach-item-icon">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
