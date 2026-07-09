import { useCallback, useEffect, useMemo, useState } from 'react'
import { EXPLORER_LOCATIONS, ICON } from '../data'

const NAV_SECTIONS = [
  {
    id: 'favorites',
    label: 'Favorites',
    items: [
      { id: 'desktop', label: 'Desktop', icon: 'folder' },
      { id: 'downloads', label: 'Downloads', icon: 'folder' },
      { id: 'recent', label: 'Recent Places', icon: 'folder' },
    ],
  },
  {
    id: 'libraries',
    label: 'Libraries',
    root: 'libraries',
    items: [
      { id: 'documents', label: 'Documents', icon: 'documents' },
      { id: 'music', label: 'Music', icon: 'music' },
      { id: 'pictures', label: 'Pictures', icon: 'pictures' },
      { id: 'videos', label: 'Videos', icon: 'folder' },
    ],
  },
  {
    id: 'computer',
    label: 'Computer',
    root: 'computer',
    items: [{ id: 'c-drive', label: 'Local Disk (C:)', icon: 'computer' }],
  },
]

function crumbLabel(id) {
  return EXPLORER_LOCATIONS[id]?.name ?? id
}

export function ExplorerApp({ initialPath = 'libraries', onOpenApp, onTitleChange }) {
  const [path, setPath] = useState(initialPath)
  const [history, setHistory] = useState([initialPath])
  const [histIndex, setHistIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [viewMode, setViewMode] = useState('large')

  useEffect(() => {
    if (initialPath && initialPath !== path) {
      setPath(initialPath)
      setHistory((h) => {
        const next = h.slice(0, histIndex + 1)
        next.push(initialPath)
        return next
      })
      setHistIndex((i) => i + 1)
      setSelected(null)
    }
    // Only react to external initialPath changes (desktop/taskbar open)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPath])

  const location = EXPLORER_LOCATIONS[path] ?? EXPLORER_LOCATIONS.libraries

  useEffect(() => {
    onTitleChange?.(location.title || location.name)
  }, [location, onTitleChange])

  const navigateTo = useCallback(
    (id) => {
      if (!id || !EXPLORER_LOCATIONS[id] || id === path) return
      setHistory((h) => {
        const next = h.slice(0, histIndex + 1)
        next.push(id)
        return next
      })
      setHistIndex((i) => i + 1)
      setPath(id)
      setSelected(null)
    },
    [path, histIndex],
  )

  const goBack = () => {
    if (histIndex <= 0) return
    const next = histIndex - 1
    setHistIndex(next)
    setPath(history[next])
    setSelected(null)
  }

  const goForward = () => {
    if (histIndex >= history.length - 1) return
    const next = histIndex + 1
    setHistIndex(next)
    setPath(history[next])
    setSelected(null)
  }

  const goUp = () => {
    if (location.parent) navigateTo(location.parent)
  }

  const openItem = (item) => {
    if (item.type === 'folder' && item.navigate) {
      navigateTo(item.navigate)
      return
    }
    if (item.open === 'notepad') {
      onOpenApp?.('notepad')
      return
    }
    if (item.open === 'photos') {
      onOpenApp?.('photos')
    }
  }

  const crumbs = useMemo(() => {
    const chain = []
    let cur = path
    const guard = new Set()
    while (cur && EXPLORER_LOCATIONS[cur] && !guard.has(cur)) {
      guard.add(cur)
      chain.unshift(cur)
      cur = EXPLORER_LOCATIONS[cur].parent
    }
    return chain
  }, [path])

  const items = location.items ?? []
  const canBack = histIndex > 0
  const canForward = histIndex < history.length - 1
  const canUp = Boolean(location.parent)

  return (
    <div className="explorer">
      <div className="explorer-nav-row">
        <div className="explorer-history">
          <button
            type="button"
            className="explorer-hist-btn"
            disabled={!canBack}
            onClick={goBack}
            title="Back"
            aria-label="Back"
          >
            ◀
          </button>
          <button
            type="button"
            className="explorer-hist-btn"
            disabled={!canForward}
            onClick={goForward}
            title="Forward"
            aria-label="Forward"
          >
            ▶
          </button>
          <button
            type="button"
            className="explorer-hist-btn explorer-up"
            disabled={!canUp}
            onClick={goUp}
            title="Up"
            aria-label="Up one level"
          >
            ▲
          </button>
        </div>

        <div className="explorer-address" role="navigation" aria-label="Address bar">
          {crumbs.map((id, i) => (
            <span key={id} className="explorer-crumb">
              {i > 0 && <span className="explorer-crumb-sep" aria-hidden="true">▸</span>}
              <button
                type="button"
                className={`explorer-crumb-btn${id === path ? ' current' : ''}`}
                onClick={() => navigateTo(id)}
              >
                {i === 0 && (
                  <img
                    src={ICON[EXPLORER_LOCATIONS[id]?.icon] || ICON.folder}
                    alt=""
                    draggable={false}
                  />
                )}
                {crumbLabel(id)}
              </button>
            </span>
          ))}
        </div>

        <div className="explorer-search">
          <input
            type="search"
            placeholder={`Search ${location.name}`}
            aria-label={`Search ${location.name}`}
          />
        </div>
      </div>

      <div className="explorer-toolbar">
        <button type="button" className="explorer-tb-btn">
          Organize ▾
        </button>
        <span className="explorer-tb-sep" />
        <button type="button" className="explorer-tb-btn">
          Open
        </button>
        <button type="button" className="explorer-tb-btn">
          Burn
        </button>
        <button type="button" className="explorer-tb-btn">
          New folder
        </button>
        <div className="explorer-toolbar-spacer" />
        <button
          type="button"
          className="explorer-tb-btn explorer-views"
          onClick={() =>
            setViewMode((m) => (m === 'large' ? 'list' : 'large'))
          }
          title="Change your view"
        >
          Views ▾
        </button>
      </div>

      <div className="explorer-main">
        <aside className="explorer-navpane" aria-label="Navigation pane">
          {NAV_SECTIONS.map((section) => (
            <div key={section.id} className="explorer-nav-section">
              <button
                type="button"
                className={`explorer-nav-header${
                  section.root && path === section.root ? ' active' : ''
                }`}
                onClick={() => section.root && navigateTo(section.root)}
              >
                {section.label}
              </button>
              <ul className="explorer-nav-list">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`explorer-nav-item${
                        path === item.id ? ' active' : ''
                      }`}
                      onClick={() => navigateTo(item.id)}
                    >
                      <img
                        src={ICON[item.icon] || ICON.folder}
                        alt=""
                        draggable={false}
                      />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <div
          className={`explorer-content explorer-view-${viewMode}`}
          onClick={() => setSelected(null)}
          role="list"
          aria-label={location.name}
        >
          {items.length === 0 ? (
            <div className="explorer-empty">This folder is empty.</div>
          ) : (
            items.map((item) => (
              <button
                key={item.id}
                type="button"
                role="listitem"
                className={`explorer-item${selected === item.id ? ' selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected(item.id)
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation()
                  openItem(item)
                }}
              >
                <img
                  src={ICON[item.icon] || ICON.folder}
                  alt=""
                  draggable={false}
                />
                <span className="explorer-item-name">{item.name}</span>
                {item.meta && viewMode === 'list' && (
                  <span className="explorer-item-meta">{item.meta}</span>
                )}
              </button>
            ))
          )}
        </div>
      </div>

      <div className="explorer-statusbar">
        <span>
          {items.length} item{items.length === 1 ? '' : 's'}
          {selected
            ? ` · ${items.find((i) => i.id === selected)?.name ?? ''}`
            : ''}
        </span>
        <span className="explorer-status-hint">
          {location.statusHint || ''}
        </span>
      </div>
    </div>
  )
}
