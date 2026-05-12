import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Programs',     href: '#programs' },
  { label: 'Membership',   href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="navbar__logo">
        <span className="navbar__logo-main">TROJAN</span>
        <span className="navbar__logo-accent">GYM</span>
      </a>

      {/* Desktop links */}
      <div className="navbar__links">
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} className="navbar__link">
            {link.label}
          </a>
        ))}
        <a
          href="#membership"
          className="btn-primary"
          style={{ fontSize: '0.76rem', padding: '11px 24px' }}
        >
          Join Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membership"
              className="btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
