import { useEffect, useState } from 'react'

export function BootScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3200)
    return () => clearTimeout(t)
  }, [])

  if (done) return null

  return (
    <div className="boot-screen" aria-hidden="true">
      <div className="boot-logo">
        Aero <span>Rebirth</span>
      </div>
      <div className="boot-bar">
        <div className="boot-bar-fill" />
      </div>
      <div className="boot-caption">Starting Windows…</div>
    </div>
  )
}
