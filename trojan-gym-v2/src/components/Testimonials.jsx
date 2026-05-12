import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    text:    "I've trained in gyms across Dublin, London, and Dubai. Trojan is the only place that operates like a serious facility. The coaching standard, the equipment, the culture — nothing else comes close.",
    name:    'Conor Walsh',
    role:    'Spartan Member · 4 Years',
    initial: 'CW',
  },
  {
    text:    "I came in as a complete beginner, terrified. The Trojan team turned that fear into fuel. Eight months later I competed in my first powerlifting meet. That transformation was 100% this place.",
    name:    'Siobhán Ní Mhuirí',
    role:    'Elite Member · 8 Months',
    initial: 'SN',
  },
  {
    text:    "As a performance coach myself, I know what good looks like. Trojan's programming, their attention to recovery, their nutritional support — this is exactly how training should be done.",
    name:    'Marcus Delaney',
    role:    'Spartan Member · 2 Years',
    initial: 'MD',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What Members Say</span>
          <h2 className="testimonials__title">
            REAL RESULTS.<br />REAL PEOPLE.
          </h2>
        </motion.div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.13 }}
            >
              <div className="testimonial-card__quote" aria-hidden="true">"</div>

              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="testimonial-card__star">★</span>
                ))}
              </div>

              <p className="testimonial-card__text">"{t.text}"</p>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {t.initial}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
