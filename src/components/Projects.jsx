import { otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="other-work" className="section">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <span className="section-label">More Projects</span>
          <h2>Other Projects</h2>
          <p>Earlier builds that helped me practice frontend and backend fundamentals.</p>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
