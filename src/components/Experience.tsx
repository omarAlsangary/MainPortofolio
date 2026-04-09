import './Experience.css'

const experiences = [
  {
    title: 'Session Lead',
    company: 'Udacity',
    period: 'Jul 2025 – Present',
    description: 'Leading technical sessions and mentoring students through Udacity programs, helping learners master software development concepts and best practices.',
  },
  {
    title: 'Coding Instructor',
    company: 'Almentor outsourced to DECI',
    period: 'Nov 2024 – Jul 2025',
    description: 'Instructed students in programming fundamentals, data structures, and algorithms. Delivered engaging, structured coding sessions to help students build strong technical foundations.',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Almosallamy Group',
    period: 'Sep 2024 – Nov 2024',
    description: 'Developed responsive websites aligned with client requirements and brand guidelines. Contributed to full-stack solutions covering front-end and back-end development.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-subtitle reveal">Professional journey and career milestones.</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item reveal reveal-delay-${i + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-card">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
