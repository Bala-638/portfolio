import { FiMessageCircle, FiMail } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="section">
      <div className="container">
        <div className="cta-section reveal" ref={ref}>
          <h2>Have a project in mind?</h2>

          <p>
            Whether you need a business website, portfolio or a modern
            redesign, let's discuss what you need.
          </p>

          <div className="cta-actions">
            <a
              href="https://wa.me/916382320259"
              className="btn btn-accent"
              target="_blank"
              rel="noreferrer"
            >
              <FiMessageCircle />
              WhatsApp Me
            </a>

            <a
              href="mailto:bala.sivak7@gmail.com"
              className="btn btn-secondary"
            >
              <FiMail />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}