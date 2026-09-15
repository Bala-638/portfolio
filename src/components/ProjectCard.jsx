import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} />
        ) : (
          <span>Add a screenshot</span>
        )}
      </div>

      <div className="project-info">
        <h4>{project.name}</h4>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-pill" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.demoUrl}>
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.githubUrl}>
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
