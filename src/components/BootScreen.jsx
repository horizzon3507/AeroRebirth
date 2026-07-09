import { useEffect, useState } from 'react'
import { ICON } from '../data'

export function BootScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 4200)
    return () => clearTimeout(t)
  }, [])

  if (done) return null

  return (
    <div className="boot-screen" aria-hidden="true">
      <div className="boot-center">
        <img className="boot-orb" src={ICON.startNormal} alt="" draggable={false} />
        <div className="boot-dots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="boot-caption">Starting Windows</div>
      </div>
    </div>
  )
}
