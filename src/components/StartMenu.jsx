import { ICON, START_PROGRAMS, START_RIGHT } from '../data'

export function StartMenu({ open, onOpenApp, onShutdown }) {
  if (!open) return null

  return (
    <div className="window glass active start-menu" role="menu">
      <div className="window-body">
        <div className="start-inner">
          <div className="start-user">
            <img
              className="start-avatar"
              src={ICON.user}
              alt=""
              draggable={false}
            />
            Guest
          </div>

          <div className="start-columns">
            <div className="start-left">
              {START_PROGRAMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="start-item"
                  role="menuitem"
                  onClick={() =>
                    onOpenApp(item.app, item.path ? { path: item.path } : undefined)
                  }
                >
                  <img src={ICON[item.icon]} alt="" draggable={false} />
                  {item.label}
                </button>
              ))}

              <button type="button" className="start-all">
                <span>All Programs</span>
                <span aria-hidden="true">▸</span>
              </button>

              <div className="start-search">
                <input
                  type="search"
                  placeholder="Search programs and files"
                  aria-label="Search programs and files"
                />
                <img
                  className="start-search-icon"
                  src={ICON.search}
                  alt=""
                  draggable={false}
                />
              </div>
            </div>

            <div className="start-right">
              {START_RIGHT.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`start-item${i < 5 ? ' bold' : ''}`}
                  role="menuitem"
                  disabled={!item.app}
                  onClick={() =>
                    item.app &&
                    onOpenApp(item.app, item.path ? { path: item.path } : undefined)
                  }
                  style={!item.app ? { opacity: 0.75 } : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="start-footer">
            <button type="button" onClick={onShutdown}>
              Shut down
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
