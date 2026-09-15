import { FiBookOpen, FiCode, FiTarget, FiArrowDownRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">

        {/* Left — Story */}
        <div className="about-intro reveal" ref={ref}>
          <span className="section-label">
            {/* <span className="section-label-dot" /> */}
            About
          </span>

          <h2>
            From learning
            <br />
            <span>to building.</span>
          </h2>

          <p className="about-intro-text">
            Turning what I learn into practical projects and useful
            experiences on the web.
          </p>

          <div className="about-direction">
            <FiArrowDownRight />
            <span>My development journey</span>
          </div>
        </div>

        {/* Right — About Content */}
        <div className="about-body">

          <div className="about-copy">
            <p>
              I'm Bala, a B.Sc Computer Science graduate and web developer
              from Tamil Nadu. I enjoy turning ideas into clean, responsive
              websites that are simple to use and built for real-world needs.
            </p>

            <p>
              My development journey started with Python Full Stack
              Development training, and I've continued building projects
              with React, Django and modern web technologies. I'm focused
              on improving through practical work and creating websites
              that are useful, reliable and professional.
            </p>
          </div>

          {/* Journey */}
          <div className="about-journey">

            <div className="journey-item">
              <div className="journey-number">01</div>

              <div className="journey-icon">
                <FiBookOpen />
              </div>

              <div className="journey-content">
                <h3>B.Sc Computer Science</h3>
                <p>
                  Built a foundation in computer science and programming.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-number">02</div>

              <div className="journey-icon">
                <FiCode />
              </div>

              <div className="journey-content">
                <h3>Python Full Stack Development</h3>
                <p>
                  Trained across frontend and backend web development.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-number">03</div>

              <div className="journey-icon">
                <FiTarget />
              </div>

              <div className="journey-content">
                <h3>Building Practical Projects</h3>
                <p>
                  Turning skills into responsive websites and real-world
                  project experiences.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}