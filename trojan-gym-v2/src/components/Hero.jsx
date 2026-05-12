import { motion } from 'framer-motion'
import ScrollExpandMedia from './ScrollExpandMedia'

const GYM_VIDEO  = 'https://videos.pexels.com/video-files/4761418/4761418-uhd_2560_1440_24fps.mp4'
const GYM_BG     = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop'

const STATS = [
  { number: '2,400', suffix: '+', label: 'Active Members' },
  { number: '15',    suffix: '',  label: 'Years Training'  },
  { number: '4',     suffix: '',  label: 'Locations'       },
  { number: '98',    suffix: '%', label: 'Retention Rate'  },
]

export default function Hero() {
  return (
    <div id="home">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={GYM_VIDEO}
        bgImageSrc={GYM_BG}
        title="FORGE YOUR LEGEND"
        scrollToExpand="SCROLL TO ENTER"
      >
        {/* Shown after video fully expands */}
        <div style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}>

          {/* Stats bar */}
          <div style={{
            display:    'flex',
            alignItems: 'stretch',
            borderBottom: '1px solid var(--border)',
          }}>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                style={{
                  flex:          1,
                  padding:       '28px 40px',
                  borderRight:   i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '5px',
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      '2.4rem',
                  color:         'var(--white)',
                  lineHeight:    1,
                  letterSpacing: '0.02em',
                }}>
                  {stat.number}
                  <span style={{ color: 'var(--red)' }}>{stat.suffix}</span>
                </div>
                <div style={{
                  fontFamily:    'var(--font-sub)',
                  fontSize:      '0.68rem',
                  fontWeight:    700,
                  letterSpacing: '0.28em',
                  color:         'var(--white-muted)',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            style={{
              padding:    '40px',
              display:    'flex',
              gap:        '20px',
              alignItems: 'center',
              flexWrap:   'wrap',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#membership" className="btn-primary">Start Training</a>
            <a href="#programs"   className="btn-ghost">View Programs</a>
          </motion.div>

        </div>
      </ScrollExpandMedia>
    </div>
  )
}
