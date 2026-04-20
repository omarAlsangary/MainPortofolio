import { useState, useEffect, useCallback } from 'react'
import './Projects.css'

interface Project {
  number: string
  title: string
  shortDesc: string
  tags: string[]
  details: string[]
  highlights: string[]
  imgUrl: string
  link: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Gamified Event Management System',
    shortDesc: 'A full-stack event management platform with gamification features to enhance user engagement. Earned "Excellent" grade as graduation project.',
    tags: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'postgreSQL', 'Stripe', 'Clerk', 'Tailwind'],
    details: [
      'A full-stack web platform built for students, professionals, and communities to discover, host, and attend learning events — with a gamification layer that rewards every interaction.',
      'Built with Next.js, TypeScript, PostgreSQL, Stripe, Clerk, and Tailwind CSS.',
      'Features include event discovery, registration, ticketing, gamification, and user management.',
      'Earned "Excellent" grade in graduation project.',
    ],
    highlights: ['Full SDLC', 'Team Collaboration', 'Clean Code', 'Engineering Excellence'],
    imgUrl: '/gems.png',
    link: 'https://gems-mauve-iota.vercel.app/',
  },
  {
    number: '02',
    title: 'GainCalc - Fitness Management',
    shortDesc: 'A full-stack fitness and nutrition tracking application built with a monorepo architecture, featuring real-time calculations and a cloud-hosted database.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Neon'],
    details: [
      'Developed a full-stack monorepo application using the PERN stack for efficient fitness data management.',
      'Integrated Neon (PostgreSQL) for scalable cloud database storage with secure SSL connection handling.',
      'Implemented a responsive frontend with Vite, ensuring fast load times and optimized performance.',
    ],
    highlights: ['Full-Stack Development', 'Monorepo Architecture', 'Cloud Database Integration'],
    imgUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    link: 'https://gain-calc.vercel.app/',
  },
  {
    number: '03',
    title: 'hekaytna',
    shortDesc: 'Solved 1,400+ problems across LeetCode, Codeforces, and other judges, demonstrating algorithmic depth.',
    tags: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'postgreSQL', 'Stripe', 'Clerk', 'Tailwind'],
    details: [
      'hekaytna is a platform that helps you to find the best places to visit in Egypt.',
      ' It is a full-stack web platform built with Next.js, TypeScript, PostgreSQL, Stripe, Clerk, and Tailwind CSS.',
      'Features include event discovery, registration, ticketing, gamification, and user management.',
      'Earned "Excellent" grade in graduation project.',
    ],
    highlights: ['1400+ Problems', 'Data Structures', 'Problem-Solving', 'Algorithmic Thinking'],
    imgUrl: '/hekaitna.svg',
    link: "https://hekaitna-git-main-omars-projects-08e0bdf4.vercel.app/",
  },
  {
    number: '04',
    title: 'Almosalamy Group',
    shortDesc: 'Developed responsive websites and full-stack solutions at Almosallamy Group, aligning with client requirements and brand guidelines.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    details: [
      'Developed responsive websites aligning with client requirements and brand guidelines.',
      'Contributed to full-stack solutions (front-end and back-end).',
      'Ensured clean, maintainable code following best practices and industry standards.',
    ],
    highlights: ['Client Projects', 'Full-Stack', 'Brand Guidelines', 'Production Code'],
    imgUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    link: 'https://almossalmy-group.vercel.app/',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const closeModal = useCallback(() => setSelectedProject(null), [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [selectedProject, closeModal])

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="accent-line reveal" />
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">Selected work showcasing engineering excellence.</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`project-card reveal reveal-delay-${i + 1}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={`View ${project.title}`}>
                <div className="project-image-wrapper">
                  <img src={project.imgUrl} alt={project.title} className="project-image" loading="lazy" />
                  <div className="project-image-overlay">
                    <span className="project-image-view-cta">
                      View Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </span>
                  </div>
                </div>
              </a>
              <div
                className="project-card-content"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project) }}
              >
                <div className="project-card-number">Project {project.number}</div>
                <h3>{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <div className="project-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card-cta">
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay${selectedProject ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      >
        {selectedProject && (
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3>Key Contributions</h3>
              <ul>
                {selectedProject.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: '1.5rem' }}>Highlights</h3>
              <div className="project-card-tags" style={{ marginTop: '0.75rem' }}>
                {selectedProject.highlights.map(h => (
                  <span key={h} className="project-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
