import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
} from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-eyebrow">
              Web Developer
            </span>

            <h2>
              Let's build something
              <span> useful.</span>
            </h2>

            <p>
              Building modern, responsive websites for businesses
              and individuals.
            </p>

            <a
              href="#contact"
              className="footer-cta"
            >
              Start a conversation
              <FiArrowUpRight />
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-navigation">

            <div className="footer-col">
              <h4>Explore</h4>

              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>

              <ul>
                <li>
                  <a
                    href="https://github.com/Bala-638"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/bala-s07/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a href="mailto:bala.sivak7@gmail.com">
                    <FiMail />
                    Email
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/916382320259"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMessageCircle />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom">

          <span>
            © {year} Bala. All rights reserved.
          </span>

          <span>
            Tamil Nadu, India
          </span>

          <a href="#home" className="footer-back-top">
            Back to top
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </footer>
  )
}