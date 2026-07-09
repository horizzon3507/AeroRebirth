import { ICON, NOTEPAD_TEXT, RECYCLE_ITEMS } from '../data'

export function NotepadApp() {
  return (
    <div className="notepad-body">
      <div className="notepad-menu" aria-hidden="true">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>
      <textarea
        className="notepad-textarea"
        defaultValue={NOTEPAD_TEXT}
        spellCheck={false}
        aria-label="remember.txt contents"
      />
      <div className="status-bar-strip">
        <span>Ln 1, Col 1</span>
        <span>Windows (CRLF) · UTF-8</span>
      </div>
    </div>
  )
}

export function PhotosApp() {
  return (
    <div className="photo-viewer">
      <div className="photo-frame">
        <p className="photo-caption">
          This picture could not be displayed.
          <br />
          <br />
          Why did everything change so quickly?
        </p>
      </div>
      <div className="photo-toolbar">
        <button type="button">Previous</button>
        <button type="button" className="default">
          Zoom
        </button>
        <button type="button">Next</button>
      </div>
    </div>
  )
}

export function RecycleApp() {
  return (
    <>
      <div className="recycle-list">
        {RECYCLE_ITEMS.map((item) => (
          <div key={item.name} className="recycle-item">
            <img src={ICON[item.icon]} alt="" draggable={false} />
            <div>
              <div>{item.name}</div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>{item.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="status-bar-strip">
        <span>{RECYCLE_ITEMS.length} items</span>
        <span>I miss you</span>
      </div>
    </>
  )
}

export function DialogApp({ onClose }) {
  return (
    <div className="has-space">
      <div className="dialog-message">
        <img className="dialog-icon" src={ICON.info} alt="" draggable={false} />
        <div className="dialog-text">
          <p>
            <strong>Do you remember?</strong>
          </p>
          <p>Why did everything change so quickly?</p>
          <p style={{ fontStyle: 'italic', color: '#444' }}>I miss you.</p>
        </div>
      </div>
      <section className="dialog-actions">
        <button type="button" className="default" onClick={onClose}>
          OK
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </section>
    </div>
  )
}

export function AboutApp({ onClose }) {
  return (
    <div className="has-space about-body">
      <h2>
        <img src={ICON.computer} alt="" draggable={false} />
        Aero Rebirth
      </h2>
      <p>A liminal Windows 7 simulator.</p>
      <p className="muted">
        Built with 7.css — Harmony wallpaper, real shell icons, Aero glass.
      </p>
      <p className="muted">Version 7.0 · Guest session · Do you remember?</p>
      <section className="dialog-actions">
        <button type="button" className="default" onClick={onClose}>
          OK
        </button>
      </section>
    </div>
  )
}
