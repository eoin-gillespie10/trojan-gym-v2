import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

function Loader() {
  return (
    <div style={{
      width:          '100%',
      height:         '100%',
      minHeight:      '480px',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            '16px',
      background:     'var(--black-3)',
    }}>
      <div style={{
        width:       '28px',
        height:      '28px',
        border:      '2px solid var(--border-2)',
        borderTopColor: 'var(--red)',
        borderRadius: '50%',
        animation:   'spin 0.9s linear infinite',
      }} />
      <span style={{
        fontFamily:    'var(--font-sub)',
        fontSize:      '0.68rem',
        fontWeight:    700,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color:         'var(--white-muted)',
      }}>
        Loading Scene
      </span>
    </div>
  )
}

export default function SplineScene({ scene, style }) {
  return (
    <Suspense fallback={<Loader />}>
      <Spline
        scene={scene}
        style={{
          width:  '100%',
          height: '100%',
          ...style,
        }}
      />
    </Suspense>
  )
}
