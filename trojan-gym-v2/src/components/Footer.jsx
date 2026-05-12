import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',        href: '#about'        },
  { label: 'Programs',     href: '#programs'     },
  { label: 'Membership',   href: '#membership'   },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact'      },
]

const PROGRAMS = [
  { label: 'Strength & Conditioning', href: '#programs' },
  { label: 'MMA & Combat',            href: '#programs' },
  { label: 'Nutrition Coaching',      href: '#programs' },
  { label: 'Personal Training',       href: '#programs' },
  { label: 'Group Classes',           href: '#programs' },
]

const HOURS = [
  { day: 'Mon – Fri',  time: '05:30 – 23:00' },
  { day: 'Saturday',   time: '07:00 – 21:00' },
  { day: 'Sunday',     time: '08:00 – 18:00' },
]

const SOCIALS = ['IG', 'FB', 'TW', 'YT']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">
          {/* Brand */}
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="footer__logo">
              <span className="footer__logo-main">TROJAN</span>
              <span className="footer__logo-accent">GYM</span>
            </a>
            <p className="footer__tagline">
              Dublin's most serious training facility. Built for those who demand more than average.
            </p>
            <div className="footer__socials">
              {SOCIALS.map(s => (
                <a key={s} href="#" className="footer__social" aria-label={s}>
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div>
            <div className="footer__col-heading">Navigation</div>
            <nav className="footer__nav">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div>
            <div className="footer__col-heading">Programs</div>
            <nav className="footer__nav">
              {PROGRAMS.map(p => (
                <a key={p.label} href={p.href} className="footer__nav-link">
                  {p.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <div className="footer__col-heading">Opening Hours</div>
            {HOURS.map(h => (
              <div key={h.day} className="footer__hours-row">
                <div className="footer__hours-day">{h.day}</div>
                <div className="footer__hours-time">{h.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} Trojan Gym. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Use</a>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
