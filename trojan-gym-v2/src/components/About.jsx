import { motion } from 'framer-motion'
import SplineScene from './SplineScene'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const item = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const FEATURES = [
  'Olympic Lifting Platforms',
  'Dedicated MMA & Combat Zone',
  'Recovery & Physiotherapy Suite',
  'Certified Expert Coaches',
  'Personalised Nutrition Programming',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">

          {/* Left — text content */}
          <motion.div
            className="about__left"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about__ghost-number" aria-hidden="true">15</div>

            <motion.span className="section-label" variants={item}>
              Our Story
            </motion.span>

            <motion.h2 className="about__title" variants={item}>
              NOT A GYM.
              <span className="about__title-red">A FORGE.</span>
            </motion.h2>

            <motion.div className="section-divider" variants={item} />

            <motion.p className="about__body" variants={item}>
              Founded in 2009, Trojan Gym was built on one belief: ordinary gyms produce
              ordinary results. We designed every square metre, every programme, and every
              coaching interaction around a single goal — producing extraordinary athletes
              and exceptional humans.
            </motion.p>

            <motion.ul className="about__features" variants={container}>
              {FEATURES.map(f => (
                <motion.li key={f} className="about__feature" variants={item}>
                  {f}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={item}>
              <a href="#programs" className="btn-primary">Explore Programs</a>
            </motion.div>
          </motion.div>

          {/* Right — interactive 3D Spline scene */}
          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__spline-wrap">
              <div className="about__visual-corner-tr" />
              <div className="about__visual-corner-bl" />
              <SplineScene scene={SPLINE_SCENE} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
