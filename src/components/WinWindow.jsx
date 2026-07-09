import { useEffect, useRef, useState } from 'react'
import { ICON } from '../data'

export function WinWindow({
  id,
  title,
  icon,
  x,
  y,
  width,
  height,
  zIndex,
  active,
  minimized,
  glass = true,
  onFocus,
  onClose,
  onMinimize,
  children,
}) {
  const [pos, setPos] = useState({ x, y })
  const drag = useRef(null)

  useEffect(() => {
    setPos({ x, y })
  }, [x, y])

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return
      const { ox, oy, sx, sy } = drag.current
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      setPos({
        x: Math.max(0, sx + clientX - ox),
        y: Math.max(0, sy + clientY - oy),
      })
    }
    const onUp = () => {
      drag.current = null
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const startDrag = (e) => {
    if (e.target.closest('button')) return
    onFocus(id)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    drag.current = { ox: clientX, oy: clientY, sx: pos.x, sy: pos.y }
  }

  const classes = [
    'window',
    glass ? 'glass' : '',
    active ? 'active' : '',
    minimized ? 'minimized' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={{
        left: pos.x,
        top: pos.y,
        width,
        zIndex,
      }}
      onMouseDown={() => onFocus(id)}
    >
      <div
        className="title-bar"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className="title-bar-text">
          {icon && (
            <img
              className="window-title-icon"
              src={ICON[icon]}
              alt=""
              draggable={false}
            />
          )}
          {title}
        </div>
        <div className="title-bar-controls">
          <button
            type="button"
            aria-label="Minimize"
            onClick={() => onMinimize(id)}
          />
          <button type="button" aria-label="Maximize" disabled />
          <button type="button" aria-label="Close" onClick={() => onClose(id)} />
        </div>
      </div>
      <div className="window-body" style={{ height: height - 30, minHeight: height - 30 }}>
        {children}
      </div>
    </div>
  )
}
