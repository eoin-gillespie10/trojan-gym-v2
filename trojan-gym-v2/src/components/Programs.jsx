import { motion } from 'framer-motion'

const PROGRAMS = [
  {
    number:   '01',
    name:     'Strength',
    category: 'Powerlifting & Olympic',
    desc:     'Progressive overload built around the competition lifts. Squat, bench, deadlift — programmed and coached to your absolute peak.',
    detail:   'All experience levels',
  },
  {
    number:   '02',
    name:     'Conditioning',
    category: 'Athletic Performance',
    desc:     'High-intensity metabolic conditioning that builds the engine behind every athlete. Endurance, power, and speed forged in one programme.',
    detail:   'Weekly sessions available',
  },
  {
    number:   '03',
    name:     'MMA',
    category: 'Combat & Fighting Arts',
    desc:     'Boxing, Muay Thai, Brazilian Jiu-Jitsu, and wrestling — coached by fighters with international competition experience.',
    detail:   'Beginner to pro',
  },
  {
    number:   '04',
    name:     'Nutrition',
    category: 'Performance Fuelling',
    desc:     'Precision nutrition planning tailored to your goals. Body composition, strength gain, or competition cutting — evidence-based protocols only.',
    detail:   'Personalised plans',
  },
]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">

        <div className="programs__header">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">What We Offer</span>
            <h2 className="programs__title">OUR PROGRAMS</h2>
          </motion.div>

          <motion.p
            className="programs__subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Four elite disciplines. One relentless standard. Train at the level your ambition demands.
          </motion.p>
        </div>

        <motion.div
          className="programs__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROGRAMS.map(prog => (
            <motion.div
              key={prog.number}
              className="program-card"
              variants={cardVariant}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="program-card__number">{prog.number}</div>

              <div>
                <div className="program-card__name">{prog.name}</div>
                <div className="program-card__category">{prog.category}</div>
              </div>

              <p className="program-card__desc">{prog.desc}</p>

              <div className="program-card__cta">
                <span className="program-card__cta-line" />
                {prog.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
