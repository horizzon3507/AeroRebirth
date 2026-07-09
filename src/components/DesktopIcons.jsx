import { ICON } from '../data'

export function DesktopIcons({ icons, selected, onSelect, onOpen }) {
  return (
    <div className="icon-grid">
      {icons.map((icon) => (
        <button
          key={icon.id}
          type="button"
          className={`desktop-icon${selected === icon.id ? ' selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            onSelect(icon.id)
          }}
          onDoubleClick={(e) => {
            e.stopPropagation()
            const options = {}
            if (icon.path) options.path = icon.path
            if (icon.documentId) options.documentId = icon.documentId
            if (icon.imageId) options.imageId = icon.imageId
            if (icon.trackId) options.trackId = icon.trackId
            onOpen(icon.app, Object.keys(options).length ? options : undefined)
          }}
        >
          <img
            className="desktop-icon-glyph"
            src={ICON[icon.icon]}
            alt=""
            draggable={false}
          />
          <span className="desktop-icon-label">{icon.label}</span>
        </button>
      ))}
    </div>
  )
}
