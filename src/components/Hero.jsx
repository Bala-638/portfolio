import { FiCode, FiSmartphone, FiMapPin } from 'react-icons/fi'
import profileImage from "../assets/images/profile-2.png"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-label">
            <span className="dot" />
            Web Developer
          </span>

          <h1>
            Hi, I'm <span className="accent">Bala</span>.<br />
            I build modern websites for businesses.
          </h1>

          <p className="hero-desc">
            I'm a web developer focused on creating clean, responsive and
            user-friendly websites for businesses, personal brands and
            real-world projects.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="hero-meta">
            <FiMapPin />
            Based in Tamil Nadu, India
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-wrap">
            <div className="hero-blob" aria-hidden="true" />
            <div className="hero-portrait">
              <img
                src={profileImage}
                alt="Portrait of Bala, web developer"
              />
            </div>

            <div className="hero-float hero-float-1">
              <FiCode /> React
            </div>
            <div className="hero-float hero-float-2">
              <FiSmartphone /> Responsive Design
            </div>
            <div className="hero-float hero-float-3">
              <FiCode /> Web Development
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
