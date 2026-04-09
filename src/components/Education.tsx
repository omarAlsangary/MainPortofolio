import './Education.css'

const degrees = [
  {
    type: "Master's Degree",
    title: 'Master of Computer Science',
    institution: 'Arab Academy for Science and Technology',
    period: 'Sep 2024 – June 2027',
    description: "Currently pursuing a Master's degree to deepen expertise in advanced computer science topics, software engineering research, and system design.",
    badge: null,
  },
  {
    type: "Bachelor's Degree",
    title: 'Bachelor of Computer Science — Software Engineering',
    institution: 'Arab Academy for Science and Technology',
    period: 'Feb 2020 – Sep 2023',
    description: 'Specialized in Software Engineering with comprehensive coursework in data structures, algorithms, software design, databases, and full-stack development.',
    badge: 'Graduation Project: "Excellent" Grade',
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">Education</h2>
        <p className="section-subtitle reveal">Academic foundation in Computer Science.</p>
        <div className="education-grid">
          {degrees.map((deg, i) => (
            <div key={i} className={`education-card reveal reveal-delay-${i + 1}`}>
              <div className="education-card-degree">{deg.type}</div>
              <h3>{deg.title}</h3>
              <div className="institution">{deg.institution}</div>
              <div className="period">{deg.period}</div>
              <p>{deg.description}</p>
              {deg.badge && (
                <div className="education-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  {deg.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
