import { useState } from 'react'
import { motion } from 'framer-motion'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const INFO = [
  {
    label:  'Address',
    values: ['12 Guild Street, IFSC', 'Dublin 1, Ireland'],
  },
  {
    label:  'Opening Hours',
    values: ['Mon – Fri: 05:30 – 23:00', 'Saturday: 07:00 – 21:00', 'Sunday: 08:00 – 18:00'],
  },
  {
    label:  'Contact',
    values: ['+353 1 456 7890', 'info@trojangym.ie'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name:    '',
    email:   '',
    subject: '',
    message: '',
  })

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">

          {/* Info side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="section-label" variants={item}>
              Get In Touch
            </motion.span>

            <motion.h2 className="contact__title" variants={item}>
              COME TRAIN<br />WITH US
            </motion.h2>

            <motion.p className="contact__sub" variants={item}>
              Whether you're ready to start or just have questions — we're here.
              Drop us a message and we'll get back to you within 24 hours.
            </motion.p>

            <motion.div className="contact__info" variants={stagger}>
              {INFO.map(block => (
                <motion.div
                  key={block.label}
                  className="contact__info-block"
                  variants={item}
                >
                  <div className="contact__info-label">{block.label}</div>
                  {block.values.map(v => (
                    <div key={v} className="contact__info-value">{v}</div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form side */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Membership enquiry..."
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell us about your goals..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
