import { useEffect, useState } from 'react'
import { ICON, PINNED } from '../data'

function formatTime(d) {
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function formatDate(d) {
  return d.toLocaleDateString([], {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  })
}

export function Taskbar({
  windows,
  activeId,
  startOpen,
  onToggleStart,
  onTaskClick,
  onOpenApp,
  onShowDesktop,
}) {
  const [now, setNow] = useState(() => new Date())
  const [orbSrc, setOrbSrc] = useState(ICON.startNormal)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setOrbSrc(startOpen ? ICON.startPressed : ICON.startNormal)
  }, [startOpen])

  const runningIds = new Set(windows.map((w) => w.id))

  return (
    <div className="taskbar">
      <button
        type="button"
        className={`start-btn${startOpen ? ' open' : ''}`}
        onClick={onToggleStart}
        onMouseEnter={() => !startOpen && setOrbSrc(ICON.startHover)}
        onMouseLeave={() =>
          setOrbSrc(startOpen ? ICON.startPressed : ICON.startNormal)
        }
        onMouseDown={() => setOrbSrc(ICON.startPressed)}
        aria-expanded={startOpen}
        aria-haspopup="menu"
        aria-label="Start"
      >
        <img src={orbSrc} alt="" draggable={false} />
      </button>

      <div className="taskbar-apps">
        {PINNED.map((pin) => {
          const running = runningIds.has(pin.app)
          const active = activeId === pin.app
          return (
            <button
              key={pin.id}
              type="button"
              className={`taskbar-btn${running ? ' running' : ''}${active ? ' active' : ''}`}
              title={pin.title}
              onClick={() => {
                if (running) onTaskClick(pin.app)
                else onOpenApp(pin.app, pin.path ? { path: pin.path } : undefined)
              }}
            >
              <img src={ICON[pin.icon]} alt="" draggable={false} />
            </button>
          )
        })}

        {windows
          .filter((w) => !PINNED.some((p) => p.app === w.id))
          .map((w) => (
            <button
              key={w.id}
              type="button"
              className={`taskbar-btn running${activeId === w.id && !w.minimized ? ' active' : ''}`}
              title={w.title}
              onClick={() => onTaskClick(w.id)}
            >
              <img src={ICON[w.icon] || ICON.folder} alt="" draggable={false} />
            </button>
          ))}
      </div>

      <div className="taskbar-tray">
        <button type="button" className="tray-icon" title="Action Center">
          <img src={ICON.actionCenter} alt="" draggable={false} />
        </button>
        <button type="button" className="tray-icon" title="Network">
          <img src={ICON.networkTray} alt="" draggable={false} />
        </button>
        <button type="button" className="tray-icon" title="Volume">
          <img src={ICON.volume} alt="" draggable={false} />
        </button>
        <div className="taskbar-clock">
          <div>{formatTime(now)}</div>
          <div className="date">{formatDate(now)}</div>
        </div>
      </div>

      <button
        type="button"
        className="show-desktop"
        title="Show desktop"
        aria-label="Show desktop"
        onClick={onShowDesktop}
      />
    </div>
  )
}
