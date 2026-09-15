import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { featuredProjects } from '../data/projects'
import useReveal from '../hooks/useReveal'

export default function FeaturedProjects() {
  const ref = useReveal()

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <span className="section-label">Selected Work</span>
          <h2>Featured Work</h2>
          <p>Selected projects that show how I approach real-world website development.</p>
        </div>

        <div className="featured-list">
          {featuredProjects.map((project) => (
            <article className="featured-card" key={project.id}>
              <div className="featured-media">
                {project.image ? (
                  <img src={project.image} alt={`${project.name} screenshot`} />
                ) : (
                  <span>Add a screenshot of {project.name}</span>
                )}
              </div>

              <div className="featured-body">
                <span className="featured-badge">{project.badge}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="featured-tech">
                  {project.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="featured-actions">
                  <a href={project.demoUrl} className="btn btn-primary btn-sm">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary btn-sm">
                    <FiGithub /> GitHub
                  </a>
                </div>

                <p className="featured-note">{project.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
