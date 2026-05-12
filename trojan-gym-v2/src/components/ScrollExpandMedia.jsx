import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollExpandMedia({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showContent,    setShowContent]    = useState(false)
  const [expanded,       setExpanded]       = useState(false)
  const [touchStartY,    setTouchStartY]    = useState(0)
  const [isMobile,       setIsMobile]       = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setScrollProgress(0)
    setShowContent(false)
    setExpanded(false)
  }, [mediaType])

  useEffect(() => {
    const onWheel = (e) => {
      if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false)
        e.preventDefault()
      } else if (!expanded) {
        e.preventDefault()
        const delta = e.deltaY * 0.0009
        const next  = Math.min(Math.max(scrollProgress + delta, 0), 1)
        setScrollProgress(next)
        if (next >= 1)         { setExpanded(true); setShowContent(true) }
        else if (next < 0.75)  setShowContent(false)
      }
    }

    const onTouchStart = (e) => setTouchStartY(e.touches[0].clientY)

    const onTouchMove = (e) => {
      if (!touchStartY) return
      const y      = e.touches[0].clientY
      const deltaY = touchStartY - y
      if (expanded && deltaY < -20 && window.scrollY <= 5) {
        setExpanded(false)
        e.preventDefault()
      } else if (!expanded) {
        e.preventDefault()
        const factor = deltaY < 0 ? 0.008 : 0.005
        const next   = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1)
        setScrollProgress(next)
        if (next >= 1)        { setExpanded(true); setShowContent(true) }
        else if (next < 0.75) setShowContent(false)
        setTouchStartY(y)
      }
    }

    const onTouchEnd  = () => setTouchStartY(0)
    const onScroll    = () => { if (!expanded) window.scrollTo(0, 0) }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('scroll',     onScroll)
    window.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove',  onTouchMove,  { passive: false })
    window.addEventListener('touchend',   onTouchEnd)

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('scroll',     onScroll)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove',  onTouchMove)
      window.removeEventListener('touchend',   onTouchEnd)
    }
  }, [scrollProgress, expanded, touchStartY])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const mediaW  = 300 + scrollProgress * (isMobile ? 650  : 1250)
  const mediaH  = 400 + scrollProgress * (isMobile ? 200  : 400)
  const tx      = scrollProgress * (isMobile ? 180 : 150)
  const radius  = Math.max(0, 14 * (1 - scrollProgress))

  const firstWord   = title?.split(' ')[0] ?? ''
  const restTitle   = title?.split(' ').slice(1).join(' ') ?? ''

  return (
    <div ref={sectionRef} style={{ overflowX: 'hidden' }}>
      <section style={{
        position:      'relative',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        minHeight:     '100dvh',
      }}>
        <div style={{
          position:      'relative',
          width:         '100%',
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          minHeight:     '100dvh',
        }}>

          {/* Background image fades as media expands */}
          <motion.div
            style={{ position: 'absolute', inset: 0, zIndex: 0, height: '100%' }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt=""
              aria-hidden="true"
              style={{
                width:          '100vw',
                height:         '100vh',
                objectFit:      'cover',
                objectPosition: 'center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
          </motion.div>

          <div style={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            position:      'relative',
            zIndex:        10,
            width:         '100%',
          }}>
            <div style={{
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              width:          '100%',
              height:         '100dvh',
              position:       'relative',
            }}>

              {/* Expanding media */}
              <div style={{
                position:     'absolute',
                zIndex:       0,
                top:          '50%',
                left:         '50%',
                transform:    'translate(-50%, -50%)',
                width:        `${mediaW}px`,
                height:       `${mediaH}px`,
                maxWidth:     '95vw',
                maxHeight:    '85vh',
                boxShadow:    '0 0 120px rgba(0,0,0,0.8)',
                borderRadius: `${radius}px`,
                overflow:     'hidden',
              }}>
                {mediaType === 'video' ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay muted loop playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <motion.div
                      style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)' }}
                      animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                      src={mediaSrc}
                      alt={title || ''}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <motion.div
                      style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                )}
              </div>

              {/* Scroll hint + date — below media, fades as scroll begins */}
              <div style={{
                position:       'absolute',
                bottom:         '14%',
                left:           '50%',
                transform:      'translateX(-50%)',
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'center',
                gap:            '10px',
                zIndex:         1,
                pointerEvents:  'none',
              }}>
                {date && (
                  <p style={{
                    fontFamily:    'var(--font-sub)',
                    fontSize:      '0.72rem',
                    fontWeight:    700,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color:         'var(--white-muted)',
                    transform:     `translateX(-${tx}vw)`,
                    whiteSpace:    'nowrap',
                    opacity:       Math.max(0, 1 - scrollProgress * 4),
                  }}>
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p style={{
                    fontFamily:    'var(--font-sub)',
                    fontSize:      '0.72rem',
                    fontWeight:    700,
                    letterSpacing: '0.34em',
                    textTransform: 'uppercase',
                    color:         'var(--red)',
                    transform:     `translateX(${tx}vw)`,
                    whiteSpace:    'nowrap',
                    display:       'flex',
                    alignItems:    'center',
                    gap:           '14px',
                    opacity:       Math.max(0, 1 - scrollProgress * 4),
                  }}>
                    <span style={{ width: '24px', height: '1px', background: 'var(--red)', display: 'inline-block', flexShrink: 0 }} />
                    {scrollToExpand}
                    <span style={{ width: '24px', height: '1px', background: 'var(--red)', display: 'inline-block', flexShrink: 0 }} />
                  </p>
                )}
              </div>

              {/* Split title — slides apart as media expands */}
              <div style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            '28px',
                width:          '100%',
                position:       'relative',
                zIndex:         10,
                pointerEvents:  'none',
                flexWrap:       'wrap',
              }}>
                <h1 style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'clamp(52px, 9vw, 140px)',
                  color:         'var(--white)',
                  lineHeight:    1,
                  letterSpacing: '0.02em',
                  transform:     `translateX(-${tx}vw)`,
                  userSelect:    'none',
                  whiteSpace:    'nowrap',
                  margin:        0,
                }}>
                  {firstWord}
                </h1>
                <h1 style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'clamp(52px, 9vw, 140px)',
                  color:         'var(--red)',
                  lineHeight:    1,
                  letterSpacing: '0.02em',
                  transform:     `translateX(${tx}vw)`,
                  userSelect:    'none',
                  whiteSpace:    'nowrap',
                  margin:        0,
                }}>
                  {restTitle}
                </h1>
              </div>

            </div>

            {/* Children: fades in once video is fully expanded */}
            <motion.div
              style={{ width: '100%' }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}
