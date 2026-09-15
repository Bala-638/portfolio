import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <strong>Bala</strong>
          <span>Web Developer</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')

            return (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === sectionId ? 'active' : ''}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-accent btn-sm">
            Let's Talk
          </a>

          <button
            className="navbar-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">

              <div className="mobile-menu-label">
                Menu
              </div>

              <nav className="mobile-menu-links">
                {NAV_LINKS.map((link, index) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={isActive ? 'active' : ''}
                      onClick={closeMenu}
                    >
                      <span className="mobile-link-number">
                        0{index + 1}
                      </span>

                      <span className="mobile-link-name">
                        {link.label}
                      </span>

                      <FiArrowUpRight className="mobile-link-arrow" />
                    </a>
                  )
                })}
              </nav>

              <div className="mobile-menu-footer">
                <p>Have a project in mind?</p>

                <a
                  href="#contact"
                  className="mobile-menu-cta"
                  onClick={closeMenu}
                >
                  <span>Let's Work Together</span>
                  <FiArrowUpRight />
                </a>
              </div>

            </div>
          </div>
        )}
    </header>
  )
}