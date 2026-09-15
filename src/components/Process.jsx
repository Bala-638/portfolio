import useReveal from '../hooks/useReveal'

const STEPS = [
  {
    num: '01',
    title: 'Understand',
    desc: 'Understand the business, goals and requirements.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Plan the pages, content and structure.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Create a clean visual direction and responsive layout.',
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Build the website using modern web technologies.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Test, deploy and make the website live.',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="section process-section">
      <div className="container">

        <div className="section-head process-head reveal" ref={ref}>
          <span className="section-label">
            <span className="section-label-dot" />
            Process
          </span>

          <h2>How I Work</h2>

          <p>
            A simple, practical process from the first idea to a live website.
          </p>
        </div>

        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-step" key={step.num}>

              <div className="process-marker">
                <span>{step.num}</span>
              </div>

              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}