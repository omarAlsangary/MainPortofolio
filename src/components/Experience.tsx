import './Experience.css'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Almosallamy Group', 
    period: 'Dec 2024 – Oct 2025',
    description: [
      'Developed and customized scalable frontend features using React, TypeScript, and CSS, aligning implementations with client requirements and business goals.',
      'Optimized application performance and responsiveness by reducing unnecessary re-renders and improving component efficiency.',
      'Maintained production systems, resolving critical bugs and ensuring stability across browsers and devices.',
      'Collaborated directly with clients and cross-functional teams to deliver iterative UI/UX improvements under tight deadlines.',
      'Improved code quality by implementing reusable components and enhancing frontend architecture.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Almosallamy Group',
    period: 'Sep 2024 – Nov 2024',
    description: [
      'Built responsive, cross-browser user interfaces using HTML, CSS, and JavaScript following modern UI/UX practices.',
      'Refactored legacy frontend code to improve maintainability, readability, and scalability.',
      'Integrated RESTful APIs in collaboration with backend developers, ensuring smooth data flow.',
      'Gained hands-on experience with real-world development workflows and team collaboration.',
    ],
  },
  {
    title: 'Session Lead (Part-time)',
    company: 'Udacity (Outsourced to DECI)',
    period: 'Jul 2025 – Mar 2026',
    description: [
      'Led advanced technical sessions for the Full Stack Web Development Nanodegree, simplifying complex engineering concepts.',
      'Conducted in-depth code reviews, providing actionable feedback on architecture, performance, and best practices.',
      'Mentored students on debugging, RESTful API integration, and database design.',
      'Achieved 80%+ student graduation rate, recognized for delivering strong learning outcomes.',
      'Tracked student progress and provided personalized guidance to improve engagement and completion.',
    ],
  },
  {
    title: 'Coding Instructor (Part-time)',
    company: 'Almentor (Outsourced to DECI)',
    period: 'Nov 2024 – Jul 2025',
    description: [
      'Delivered structured programming sessions covering Python, problem-solving, and algorithmic thinking.',
      'Guided students through full project lifecycles from requirements to implementation and delivery.',
      'Facilitated workshops to help students break down complex coding challenges.',
      'Provided continuous mentorship, improving student confidence and technical skills.',
    ],
  },
];

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
