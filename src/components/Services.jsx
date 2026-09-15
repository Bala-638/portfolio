import { FiGlobe, FiSmartphone, FiCode, FiUploadCloud } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'

const SERVICES = [
  {
    icon: <FiGlobe />,
    title: 'Business Websites',
    desc: 'Professional responsive websites for clinics, trainers, local businesses and personal brands.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Web Design',
    desc: 'Clean interfaces that work smoothly across mobile, tablet and desktop.',
  },
  {
    icon: <FiCode />,
    title: 'React Development',
    desc: 'Reusable and maintainable interfaces built with React.',
  },
  {
    icon: <FiUploadCloud />,
    title: 'Deployment & Setup',
    desc: 'GitHub, Vercel deployment and basic website setup.',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal" ref={ref}>
          <span className="section-label">What I Do</span>
          <h2>What I Can Build</h2>
          <p>Practical websites designed around your goals, not just templates.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
