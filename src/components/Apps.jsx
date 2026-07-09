import { useEffect, useRef, useState } from 'react'
import {
  ICON,
  MUSIC_TRACKS,
  NOTEPAD_DOCUMENTS,
  PHOTO_IMAGES,
  RECYCLE_ITEMS,
} from '../data'

export function NotepadApp({ documentId = 'remember' }) {
  const doc = NOTEPAD_DOCUMENTS[documentId] || NOTEPAD_DOCUMENTS.remember

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
        key={doc.id}
        className="notepad-textarea"
        defaultValue={doc.body}
        spellCheck={false}
        aria-label={`${doc.title} contents`}
      />
      <div className="status-bar-strip">
        <span>Ln 1, Col 1</span>
        <span>Windows (CRLF) · UTF-8</span>
      </div>
    </div>
  )
}

export function PhotosApp({ imageId = 'broken' }) {
  const image = PHOTO_IMAGES[imageId] || PHOTO_IMAGES.broken
  const broken = image.broken || !image.src

  return (
    <div className="photo-viewer">
      <div className="photo-frame">
        {broken ? (
          <p className="photo-caption">
            This picture could not be displayed.
            <br />
            <br />
            Why did everything change so quickly?
          </p>
        ) : (
          <img
            className="photo-image"
            src={image.src}
            alt={image.title}
            draggable={false}
          />
        )}
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

function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export function MediaPlayerApp({ trackId = 'harmony' }) {
  const initial =
    MUSIC_TRACKS.find((t) => t.id === trackId)?.id || MUSIC_TRACKS[0].id
  const [currentId, setCurrentId] = useState(initial)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState('')
  const audioRef = useRef(null)

  const track = MUSIC_TRACKS.find((t) => t.id === currentId) || MUSIC_TRACKS[0]

  useEffect(() => {
    setCurrentId(initial)
  }, [initial])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    setProgress(0)
    setDuration(0)
    setError('')
    setPlaying(false)

    if (track.corrupted || !track.src) {
      audio.removeAttribute('src')
      audio.load()
      setError('Windows Media Player cannot play the file. The file appears to be corrupted.')
      return
    }

    audio.src = track.src
    audio.load()
    const playPromise = audio.play()
    if (playPromise?.then) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => {
          setPlaying(false)
          setError('Unable to start playback.')
        })
    }
  }, [track])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const onTime = () => setProgress(audio.currentTime || 0)
    const onMeta = () => setDuration(audio.duration || 0)
    const onEnded = () => setPlaying(false)
    const onErr = () => {
      setPlaying(false)
      setError('This file could not be played.')
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onErr)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onErr)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || track.corrupted || !track.src) {
      setError('Windows Media Player cannot play the file. The file appears to be corrupted.')
      return
    }
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setError('Unable to start playback.'))
    }
  }

  const onSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const next = Number(e.target.value)
    audio.currentTime = next
    setProgress(next)
  }

  const pct = duration ? (progress / duration) * 100 : 0

  return (
    <div className="wmp-body">
      <audio ref={audioRef} preload="metadata" />
      <div className="wmp-menu" aria-hidden="true">
        <span>File</span>
        <span>View</span>
        <span>Play</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      <div className="wmp-stage">
        <div className="wmp-viz" aria-hidden="true">
          <div className={`wmp-orb${playing ? ' playing' : ''}`} />
          <div className="wmp-eq">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="wmp-bar"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  height: playing ? undefined : '18%',
                }}
              />
            ))}
          </div>
        </div>
        <div className="wmp-now">
          <div className="wmp-now-title">{track.title}</div>
          <div className="wmp-now-artist">{track.artist}</div>
          {error ? <div className="wmp-error">{error}</div> : null}
        </div>
      </div>

      <div className="wmp-transport">
        <button type="button" className="wmp-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '❚❚' : '▶'}
        </button>
        <button
          type="button"
          className="wmp-btn"
          onClick={() => {
            const audio = audioRef.current
            if (audio) {
              audio.pause()
              audio.currentTime = 0
            }
            setPlaying(false)
            setProgress(0)
          }}
          aria-label="Stop"
        >
          ■
        </button>
        <div className="wmp-progress-wrap">
          <input
            type="range"
            className="wmp-progress"
            min={0}
            max={duration || 1}
            step={0.01}
            value={progress}
            onChange={onSeek}
            disabled={!duration || track.corrupted}
            aria-label="Seek"
            style={{ '--pct': `${pct}%` }}
          />
          <div className="wmp-time">
            <span>{formatTime(progress)}</span>
            <span>{duration ? formatTime(duration) : track.durationHint}</span>
          </div>
        </div>
      </div>

      <div className="wmp-playlist" role="list" aria-label="Playlist">
        {MUSIC_TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="listitem"
            className={`wmp-track${t.id === currentId ? ' active' : ''}${t.corrupted ? ' corrupted' : ''}`}
            onClick={() => setCurrentId(t.id)}
          >
            <img src={ICON.music} alt="" draggable={false} />
            <span className="wmp-track-title">{t.title}</span>
            <span className="wmp-track-meta">{t.corrupted ? 'Corrupted' : t.artist}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const PAINT_COLORS = [
  '#000000',
  '#ffffff',
  '#7f7f7f',
  '#c3c3c3',
  '#880015',
  '#ed1c24',
  '#ff7f27',
  '#fff200',
  '#22b14c',
  '#00a2e8',
  '#3f48cc',
  '#a349a4',
  '#b97a57',
  '#ffaec9',
]

export function PaintApp({ imageSrc }) {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const [color, setColor] = useState('#000000')
  const [brush, setBrush] = useState(3)
  const colorRef = useRef(color)
  const brushRef = useRef(brush)

  useEffect(() => {
    colorRef.current = color
  }, [color])
  useEffect(() => {
    brushRef.current = brush
  }, [brush])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (imageSrc) {
      const img = new Image()
      img.onload = () => {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height, 1)
        const w = img.width * scale
        const h = img.height * scale
        ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h)
      }
      img.src = imageSrc
    }
  }, [imageSrc])

  const pos = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const startDraw = (e) => {
    drawing.current = true
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = pos(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = colorRef.current
    ctx.lineWidth = brushRef.current
    ctx.lineTo(x + 0.01, y + 0.01)
    ctx.stroke()
  }

  const moveDraw = (e) => {
    if (!drawing.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = pos(e)
    ctx.strokeStyle = colorRef.current
    ctx.lineWidth = brushRef.current
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const endDraw = () => {
    drawing.current = false
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="paint-body">
      <div className="paint-menu" aria-hidden="true">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Image</span>
        <span>Colors</span>
        <span>Help</span>
      </div>
      <div className="paint-toolbar">
        <div className="paint-tools">
          <button
            type="button"
            className={`paint-tool${brush === 2 ? ' active' : ''}`}
            onClick={() => setBrush(2)}
            title="Pencil"
          >
            ✎
          </button>
          <button
            type="button"
            className={`paint-tool${brush === 6 ? ' active' : ''}`}
            onClick={() => setBrush(6)}
            title="Brush"
          >
            ●
          </button>
          <button
            type="button"
            className={`paint-tool${brush === 14 ? ' active' : ''}`}
            onClick={() => setBrush(14)}
            title="Airbrush"
          >
            ◉
          </button>
          <button type="button" className="paint-tool" onClick={clearCanvas} title="Clear">
            Clear
          </button>
        </div>
        <div className="paint-colors" role="listbox" aria-label="Colors">
          {PAINT_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              className={`paint-swatch${color === c ? ' active' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
              aria-label={c}
              title={c}
            />
          ))}
        </div>
        <div className="paint-current" style={{ background: color }} title="Current color" />
      </div>
      <div className="paint-workspace">
        <canvas
          ref={canvasRef}
          className="paint-canvas"
          width={480}
          height={300}
          onMouseDown={startDraw}
          onMouseMove={moveDraw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />
      </div>
      <div className="status-bar-strip">
        <span>For Help, click Help Topics on the Help Menu.</span>
        <span>{brush}px · Guest</span>
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
