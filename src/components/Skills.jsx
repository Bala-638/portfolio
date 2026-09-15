import useReveal from '../hooks/useReveal'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <span className="section-label">Skills</span>
          <h2>Technologies I Work With</h2>
          <p>The core tools I use to plan, build and ship websites.</p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-badges">
                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="skills-note">
          Currently focused on improving my React development, UI design and
          real-world project skills.
        </p>
      </div>
    </section>
  )
}
