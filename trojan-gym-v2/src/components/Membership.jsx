import { motion } from 'framer-motion'

const TIERS = [
  {
    id:       'warrior',
    tier:     'Tier 01',
    name:     'WARRIOR',
    price:    49,
    featured: false,
    features: [
      'Full gym floor access',
      'Standard equipment use',
      '2 group classes per week',
      'Locker room & showers',
      'Trojan member app',
    ],
  },
  {
    id:       'elite',
    tier:     'Tier 02',
    name:     'ELITE',
    price:    89,
    featured: true,
    badge:    'Most Popular',
    features: [
      'Everything in Warrior',
      'Unlimited group classes',
      'Monthly PT session',
      'Nutrition consultation',
      'Recovery zone access',
      'Priority class booking',
    ],
  },
  {
    id:       'spartan',
    tier:     'Tier 03',
    name:     'SPARTAN',
    price:    149,
    featured: false,
    features: [
      'Everything in Elite',
      'Weekly PT sessions (×4/mo)',
      'Custom training programme',
      'Body composition tracking',
      '20% supplement discount',
      'Guest passes (×2/mo)',
      'Early access to new classes',
    ],
  },
]

function CheckIcon() {
  return (
    <svg className="tier-card__check" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="#C41E1E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Membership() {
  return (
    <section className="membership" id="membership">
      <div className="container">

        <motion.div
          className="membership__header"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Membership Plans</span>
          <h2 className="membership__title">CHOOSE YOUR PATH</h2>
          <p className="membership__sub">
            No contracts. Cancel anytime. Every plan includes full facility access.
          </p>
        </motion.div>

        <div className="membership__grid">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`tier-card${tier.featured ? ' tier-card--featured' : ''}`}
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {tier.badge && (
                <div className="tier-card__badge">{tier.badge}</div>
              )}

              <div className="tier-card__tier">{tier.tier}</div>
              <div className="tier-card__name">{tier.name}</div>

              <div className="tier-card__price-row">
                <span className="tier-card__currency">€</span>
                <span className="tier-card__amount">{tier.price}</span>
              </div>
              <div className="tier-card__period">per month</div>

              <div className="tier-card__divider" />

              <ul className="tier-card__features">
                {tier.features.map(f => (
                  <li key={f} className="tier-card__feature">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`tier-card__cta ${
                  tier.featured
                    ? 'tier-card__cta--primary'
                    : 'tier-card__cta--ghost'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
