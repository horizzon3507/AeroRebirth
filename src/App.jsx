import { useCallback, useState } from 'react'
import { APPS, DESKTOP_ICONS, EXPLORER_LOCATIONS } from './data'
import { BootScreen } from './components/BootScreen'
import { DesktopIcons } from './components/DesktopIcons'
import { WinWindow } from './components/WinWindow'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import {
  AboutApp,
  DialogApp,
  NotepadApp,
  PhotosApp,
  RecycleApp,
} from './components/Apps'
import { ExplorerApp } from './components/ExplorerApp'

let zCounter = 20

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [startOpen, setStartOpen] = useState(false)
  const [windows, setWindows] = useState([])
  const [shuttingDown, setShuttingDown] = useState(false)

  const openApp = useCallback((appId, options = {}) => {
    setStartOpen(false)
    const path = options.path
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === appId)
      if (existing) {
        zCounter += 1
        return prev.map((w) =>
          w.id === appId
            ? {
                ...w,
                minimized: false,
                zIndex: zCounter,
                active: true,
                ...(path ? { path, title: EXPLORER_LOCATIONS[path]?.title || w.title } : {}),
                navKey: path ? (w.navKey || 0) + 1 : w.navKey,
              }
            : { ...w, active: false },
        )
      }
      const def = APPS[appId]
      if (!def) return prev
      zCounter += 1
      const title =
        appId === 'explorer' && path
          ? EXPLORER_LOCATIONS[path]?.title || def.title
          : def.title
      return [
        ...prev.map((w) => ({ ...w, active: false })),
        {
          ...def,
          title,
          path: path ?? def.path,
          navKey: 0,
          minimized: false,
          zIndex: zCounter,
          active: true,
        },
      ]
    })
  }, [])

  const focusWindow = useCallback((id) => {
    setStartOpen(false)
    zCounter += 1
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, active: true, zIndex: zCounter, minimized: false }
          : { ...w, active: false },
      ),
    )
  }, [])

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: true, active: false } : w,
      ),
    )
  }, [])

  const minimizeAll = useCallback(() => {
    setStartOpen(false)
    setWindows((prev) => prev.map((w) => ({ ...w, minimized: true, active: false })))
  }, [])

  const onTaskClick = useCallback(
    (id) => {
      const win = windows.find((w) => w.id === id)
      if (!win) return
      if (win.minimized || !win.active) {
        focusWindow(id)
      } else {
        minimizeWindow(id)
      }
    },
    [windows, focusWindow, minimizeWindow],
  )

  const setExplorerTitle = useCallback((title) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === 'explorer' ? { ...w, title } : w)),
    )
  }, [])

  const renderApp = (win) => {
    switch (win.id) {
      case 'notepad':
        return <NotepadApp />
      case 'photos':
        return <PhotosApp />
      case 'explorer':
        return (
          <ExplorerApp
            key={`explorer-${win.navKey ?? 0}-${win.path}`}
            initialPath={win.path || 'libraries'}
            onOpenApp={openApp}
            onTitleChange={setExplorerTitle}
          />
        )
      case 'recycle':
        return <RecycleApp />
      case 'dialog':
        return <DialogApp onClose={() => closeWindow('dialog')} />
      case 'about':
        return <AboutApp onClose={() => closeWindow('about')} />
      default:
        return null
    }
  }

  if (shuttingDown) {
    return (
      <div className="shutdown-screen">
        <div className="shutdown-panel">
          <p style={{ fontSize: '1.15rem' }}>Logging off…</p>
          <p className="miss">I miss you</p>
          <button
            type="button"
            className="default"
            style={{ marginTop: 20 }}
            onClick={() => {
              setShuttingDown(false)
              setWindows([])
            }}
          >
            Turn on again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="desktop"
      onClick={() => {
        setSelectedIcon(null)
        setStartOpen(false)
      }}
    >
      <BootScreen />

      <DesktopIcons
        icons={DESKTOP_ICONS}
        selected={selectedIcon}
        onSelect={setSelectedIcon}
        onOpen={openApp}
      />

      <div className="window-layer">
        {windows.map((w) => (
          <WinWindow
            key={w.id}
            id={w.id}
            title={w.title}
            icon={w.icon}
            x={w.x}
            y={w.y}
            width={w.width}
            height={w.height}
            zIndex={w.zIndex}
            active={w.active}
            minimized={w.minimized}
            onFocus={focusWindow}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
          >
            {renderApp(w)}
          </WinWindow>
        ))}
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <StartMenu
          open={startOpen}
          onOpenApp={openApp}
          onShutdown={() => {
            setStartOpen(false)
            setShuttingDown(true)
          }}
        />
        <Taskbar
          windows={windows}
          activeId={windows.find((w) => w.active)?.id}
          startOpen={startOpen}
          onToggleStart={() => setStartOpen((o) => !o)}
          onTaskClick={onTaskClick}
          onOpenApp={openApp}
          onShowDesktop={minimizeAll}
        />
      </div>
    </div>
  )
}
