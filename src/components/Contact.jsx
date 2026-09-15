import { useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiMessageCircle,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiX,
} from 'react-icons/fi'
import useReveal from '../hooks/useReveal'

const CONTACT_EMAIL = 'bala.sivak7@gmail.com'
const CONTACT_PHONE = '+91 63823 20259'
const WHATSAPP_LINK = 'https://wa.me/916382320259'

const LINKEDIN_URL = 'https://www.linkedin.com/in/bala-s07/'
const GITHUB_URL = 'https://github.com/Bala-638'

const WEB3FORMS_ACCESS_KEY = '58897533-7235-44f5-b131-d5fa7470aaf5'

export default function Contact() {
  const ref = useReveal()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    const formData = new FormData()

    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append(
      'subject',
      `New website enquiry from ${form.name}`
    )
    formData.append('from_name', 'Bala Portfolio')

    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('message', form.message)

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        setStatus('success')

        setForm({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">

        {/* Contact Information */}
        <div className="contact-info reveal" ref={ref}>
          <span className="section-label">Contact</span>

          <h2>Let's build something useful.</h2>

          <p>
            Have a project, an idea, or just a question? I read every
            message and usually reply within a day.
          </p>

          <ul className="contact-list">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <FiMail />
                {CONTACT_EMAIL}
              </a>
            </li>

            <li>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                <FiPhone />
                {CONTACT_PHONE}
              </a>
            </li>

            <li>
              <span>
                <FiMapPin />
                Tamil Nadu, India
              </span>
            </li>

            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
                GitHub
              </a>
            </li>
          </ul>

          <div className="contact-quick">
            <a
              href={WHATSAPP_LINK}
              className="btn btn-accent btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              <FiMessageCircle />
              WhatsApp
            </a>

            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="btn btn-secondary btn-sm"
            >
              <FiPhone />
              Call
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">
              Mobile Number
              <span className="form-optional">Optional</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <FiLoader className="spin" />
                Sending...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </button>

          <p className="form-note">
            Your message will be sent directly to my email.
          </p>
        </form>
      </div>

      {/* Success / Error Dialog */}
      {status !== 'idle' && (
        <div className="contact-dialog-overlay">
          <div
            className={`contact-dialog ${
              status === 'success'
                ? 'contact-dialog-success'
                : status === 'error'
                  ? 'contact-dialog-error'
                  : 'contact-dialog-sending'
            }`}
            role="alertdialog"
            aria-modal="true"
          >

            {status === 'sending' && (
              <>
                <div className="dialog-icon dialog-icon-loading">
                  <FiLoader className="dialog-spinner" />
                </div>

                <h3>Sending Message</h3>

                <p>
                  Please wait while your message is being sent.
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="dialog-icon dialog-icon-success">
                  <FiCheckCircle />
                </div>

                <h3>Message Sent Successfully</h3>

                <p>
                  Thanks for reaching out. I'll get back to you soon.
                </p>

                <button
                  type="button"
                  className="btn btn-primary dialog-close-btn"
                  onClick={() => setStatus('idle')}
                >
                  Done
                </button>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="dialog-icon dialog-icon-error">
                  <FiAlertCircle />
                </div>

                <h3>Message Not Sent</h3>

                <p>
                  Something went wrong. Please try again or contact me
                  directly.
                </p>

                <button
                  type="button"
                  className="btn btn-primary dialog-close-btn"
                  onClick={() => setStatus('idle')}
                >
                  Try Again
                </button>
              </>
            )}

            {status !== 'sending' && (
              <button
                type="button"
                className="dialog-close-icon"
                onClick={() => setStatus('idle')}
                aria-label="Close notification"
              >
                <FiX />
              </button>
            )}

          </div>
        </div>
      )}
    </section>
  )
}