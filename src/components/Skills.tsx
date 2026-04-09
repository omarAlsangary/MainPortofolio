import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['C/C++', 'JavaScript', 'Python', 'Java'],
  },
  {
    title: 'Technologies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Firebase', 'MySQL', 'Git'],
  },
  {
    title: 'Fundamentals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    skills: ['Data Structures & Algorithms', 'Databases', 'Object-Oriented Design', 'OOP'],
  },
  {
    title: 'Soft Skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    skills: ['Communication', 'Problem-Solving', 'Analytical Thinking', 'Teamwork', 'Work Under Pressure'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">Skills & Technologies</h2>
        <p className="section-subtitle reveal">Tools and expertise I bring to every project.</p>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className={`skill-category reveal reveal-delay-${i + 1}`}>
              <div className="skill-category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
