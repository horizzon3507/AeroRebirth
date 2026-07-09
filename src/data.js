export const ICON = {
  computer: '/icons/ui/computer.png',
  recycle: '/icons/ui/recycle-full.png',
  recycleEmpty: '/icons/ui/recycle-empty.png',
  documents: '/icons/ui/documents.png',
  pictures: '/icons/ui/pictures.png',
  music: '/icons/ui/music.png',
  folder: '/icons/ui/folder.png',
  notepad: '/icons/ui/notepad.png',
  paint: '/icons/ui/paint.png',
  ie: '/icons/ui/ie.png',
  explorer: '/icons/ui/explorer.png',
  wmp: '/icons/ui/wmp.png',
  text: '/icons/ui/text-file.png',
  letter: '/icons/ui/letter.png',
  user: '/icons/ui/user.png',
  controlPanel: '/icons/ui/control-panel.png',
  devices: '/icons/ui/devices.png',
  help: '/icons/ui/help.png',
  games: '/icons/ui/games.png',
  library: '/icons/ui/library.png',
  network: '/icons/ui/network.png',
  networkTray: '/icons/ui/network-tray.png',
  volume: '/icons/ui/volume.png',
  actionCenter: '/icons/ui/action-center.png',
  defaultPrograms: '/icons/ui/default-programs.png',
  search: '/icons/ui/search.png',
  info: '/icons/ui/info.png',
  startNormal: '/icons/ui/start-orb-normal.png',
  startHover: '/icons/ui/start-orb-hover.png',
  startPressed: '/icons/ui/start-orb-pressed.png',
}

export const WHISPERS = [
  { text: 'Do you remember?', x: '10%', y: '18%', delay: 0 },
  { text: 'Why did everything change so quickly?', x: '42%', y: '36%', delay: 12 },
  { text: 'I miss you', x: '22%', y: '62%', delay: 24, dark: true },
  { text: 'The hills still look the same.', x: '55%', y: '20%', delay: 36 },
  { text: 'Are you still there?', x: '14%', y: '74%', delay: 48 },
  { text: 'Do you remember?', x: '58%', y: '58%', delay: 60 },
]

export const NOTEPAD_TEXT = `Do you remember?

The wallpaper was always this blue.
The hills never moved.
The clock kept ticking anyway.

Why did everything change so quickly?

I left a note on the desktop
for whoever finds this place again.

I miss you.

— someone who used to live here
`

export const RECYCLE_ITEMS = [
  { name: 'summer_2011.jpg', meta: 'Deleted · forever ago', icon: 'pictures' },
  { name: 'voice_memo.wav', meta: 'Corrupted', icon: 'music' },
  { name: 'goodbye.txt', meta: 'Empty', icon: 'text' },
  { name: 'us.zip', meta: 'Password forgotten', icon: 'folder' },
]

/** Liminal Win7-style shell locations for Windows Explorer */
export const EXPLORER_LOCATIONS = {
  libraries: {
    id: 'libraries',
    name: 'Libraries',
    title: 'Libraries',
    icon: 'library',
    parent: null,
    statusHint: '4 libraries',
    items: [
      { id: 'lib-docs', name: 'Documents', icon: 'documents', type: 'folder', navigate: 'documents' },
      { id: 'lib-music', name: 'Music', icon: 'music', type: 'folder', navigate: 'music' },
      { id: 'lib-pics', name: 'Pictures', icon: 'pictures', type: 'folder', navigate: 'pictures' },
      { id: 'lib-vids', name: 'Videos', icon: 'folder', type: 'folder', navigate: 'videos' },
    ],
  },
  documents: {
    id: 'documents',
    name: 'Documents',
    title: 'Documents',
    icon: 'documents',
    parent: 'libraries',
    statusHint: 'Do you remember?',
    items: [
      { id: 'doc-remember', name: 'remember.txt', icon: 'text', type: 'file', open: 'notepad' },
      { id: 'doc-letters', name: 'letters', icon: 'folder', type: 'folder', navigate: 'letters' },
      { id: 'doc-notes', name: 'notes from before', icon: 'folder', type: 'folder', navigate: 'notes' },
      { id: 'doc-miss', name: 'I miss you.txt', icon: 'letter', type: 'file', open: 'notepad' },
      { id: 'doc-why', name: 'Why did everything change so quickly?.txt', icon: 'text', type: 'file', open: 'notepad' },
    ],
  },
  letters: {
    id: 'letters',
    name: 'letters',
    title: 'letters',
    icon: 'folder',
    parent: 'documents',
    statusHint: 'Unsent',
    items: [
      { id: 'let-unsent', name: 'unsent_draft.txt', icon: 'letter', type: 'file', open: 'notepad' },
      { id: 'let-empty', name: 'empty envelope', icon: 'folder', type: 'folder', navigate: 'empty-envelope' },
    ],
  },
  'empty-envelope': {
    id: 'empty-envelope',
    name: 'empty envelope',
    title: 'empty envelope',
    icon: 'folder',
    parent: 'letters',
    statusHint: 'This folder is empty.',
    items: [],
  },
  notes: {
    id: 'notes',
    name: 'notes from before',
    title: 'notes from before',
    icon: 'folder',
    parent: 'documents',
    statusHint: 'Are you still there?',
    items: [
      { id: 'note-hills', name: 'the hills still look the same.txt', icon: 'text', type: 'file', open: 'notepad' },
      { id: 'note-guest', name: 'Guest session.log', icon: 'text', type: 'file', open: 'notepad' },
    ],
  },
  pictures: {
    id: 'pictures',
    name: 'Pictures',
    title: 'Pictures',
    icon: 'pictures',
    parent: 'libraries',
    statusHint: 'This picture could not be displayed.',
    items: [
      { id: 'pic-summer', name: 'summer_2011.jpg', icon: 'pictures', type: 'file', open: 'photos', meta: 'Broken' },
      { id: 'pic-hallway', name: 'empty_hallway.jpg', icon: 'pictures', type: 'file', open: 'photos', meta: 'Missing' },
      { id: 'pic-pool', name: 'pool_at_night.jpg', icon: 'pictures', type: 'file', open: 'photos', meta: 'Corrupted' },
      { id: 'pic-liminal', name: 'Do you remember?', icon: 'folder', type: 'folder', navigate: 'pic-remember' },
      { id: 'pic-sample', name: 'Sample Pictures', icon: 'folder', type: 'folder', navigate: 'sample-pictures' },
    ],
  },
  'pic-remember': {
    id: 'pic-remember',
    name: 'Do you remember?',
    title: 'Do you remember?',
    icon: 'folder',
    parent: 'pictures',
    statusHint: 'Nothing here anymore.',
    items: [],
  },
  'sample-pictures': {
    id: 'sample-pictures',
    name: 'Sample Pictures',
    title: 'Sample Pictures',
    icon: 'folder',
    parent: 'pictures',
    statusHint: '0 items',
    items: [
      { id: 'sample-gone', name: 'Chrysanthemum.jpg', icon: 'pictures', type: 'file', open: 'photos', meta: 'File not found' },
      { id: 'sample-desert', name: 'Desert.jpg', icon: 'pictures', type: 'file', open: 'photos', meta: 'File not found' },
    ],
  },
  music: {
    id: 'music',
    name: 'Music',
    title: 'Music',
    icon: 'music',
    parent: 'libraries',
    statusHint: 'Silence',
    items: [
      { id: 'mus-voice', name: 'voice_memo.wav', icon: 'music', type: 'file', meta: 'Corrupted' },
      { id: 'mus-sample', name: 'Sample Music', icon: 'folder', type: 'folder', navigate: 'sample-music' },
    ],
  },
  'sample-music': {
    id: 'sample-music',
    name: 'Sample Music',
    title: 'Sample Music',
    icon: 'folder',
    parent: 'music',
    statusHint: 'This folder is empty.',
    items: [],
  },
  videos: {
    id: 'videos',
    name: 'Videos',
    title: 'Videos',
    icon: 'folder',
    parent: 'libraries',
    statusHint: 'This folder is empty.',
    items: [],
  },
  computer: {
    id: 'computer',
    name: 'Computer',
    title: 'Computer',
    icon: 'computer',
    parent: null,
    statusHint: '1 hard disk drive',
    items: [
      { id: 'comp-c', name: 'Local Disk (C:)', icon: 'computer', type: 'folder', navigate: 'c-drive', meta: 'System' },
      { id: 'comp-net', name: 'Network', icon: 'network', type: 'folder', navigate: 'network' },
    ],
  },
  'c-drive': {
    id: 'c-drive',
    name: 'Local Disk (C:)',
    title: 'Local Disk (C:)',
    icon: 'computer',
    parent: 'computer',
    statusHint: 'Guest · Aero Rebirth',
    items: [
      { id: 'c-users', name: 'Users', icon: 'folder', type: 'folder', navigate: 'users' },
      { id: 'c-windows', name: 'Windows', icon: 'folder', type: 'folder', navigate: 'windows-folder' },
      { id: 'c-program', name: 'Program Files', icon: 'folder', type: 'folder', navigate: 'program-files' },
    ],
  },
  users: {
    id: 'users',
    name: 'Users',
    title: 'Users',
    icon: 'folder',
    parent: 'c-drive',
    items: [
      { id: 'user-guest', name: 'Guest', icon: 'user', type: 'folder', navigate: 'guest' },
    ],
  },
  guest: {
    id: 'guest',
    name: 'Guest',
    title: 'Guest',
    icon: 'user',
    parent: 'users',
    items: [
      { id: 'guest-desktop', name: 'Desktop', icon: 'folder', type: 'folder', navigate: 'desktop' },
      { id: 'guest-docs', name: 'Documents', icon: 'documents', type: 'folder', navigate: 'documents' },
      { id: 'guest-dl', name: 'Downloads', icon: 'folder', type: 'folder', navigate: 'downloads' },
      { id: 'guest-pics', name: 'Pictures', icon: 'pictures', type: 'folder', navigate: 'pictures' },
      { id: 'guest-music', name: 'Music', icon: 'music', type: 'folder', navigate: 'music' },
    ],
  },
  desktop: {
    id: 'desktop',
    name: 'Desktop',
    title: 'Desktop',
    icon: 'folder',
    parent: 'guest',
    statusHint: 'Shortcuts to elsewhere',
    items: [
      { id: 'desk-recycle', name: 'Recycle Bin', icon: 'recycle', type: 'folder', navigate: 'recycle-bin' },
      { id: 'desk-computer', name: 'Computer', icon: 'computer', type: 'folder', navigate: 'computer' },
      { id: 'desk-docs', name: 'Documents', icon: 'documents', type: 'folder', navigate: 'documents' },
      { id: 'desk-pics', name: 'Pictures', icon: 'pictures', type: 'folder', navigate: 'pictures' },
      { id: 'desk-remember', name: 'remember.txt', icon: 'text', type: 'file', open: 'notepad' },
    ],
  },
  downloads: {
    id: 'downloads',
    name: 'Downloads',
    title: 'Downloads',
    icon: 'folder',
    parent: 'guest',
    statusHint: 'Nothing finished downloading.',
    items: [
      { id: 'dl-partial', name: 'something.partial', icon: 'folder', type: 'file', meta: 'Interrupted' },
    ],
  },
  recent: {
    id: 'recent',
    name: 'Recent Places',
    title: 'Recent Places',
    icon: 'folder',
    parent: null,
    statusHint: 'Places you used to open',
    items: [
      { id: 'rec-docs', name: 'Documents', icon: 'documents', type: 'folder', navigate: 'documents' },
      { id: 'rec-pics', name: 'Pictures', icon: 'pictures', type: 'folder', navigate: 'pictures' },
      { id: 'rec-letters', name: 'letters', icon: 'folder', type: 'folder', navigate: 'letters' },
    ],
  },
  'windows-folder': {
    id: 'windows-folder',
    name: 'Windows',
    title: 'Windows',
    icon: 'folder',
    parent: 'c-drive',
    statusHint: 'Access denied · almost',
    items: [
      { id: 'win-explorer', name: 'explorer.exe', icon: 'explorer', type: 'file' },
      { id: 'win-notepad', name: 'notepad.exe', icon: 'notepad', type: 'file', open: 'notepad' },
    ],
  },
  'program-files': {
    id: 'program-files',
    name: 'Program Files',
    title: 'Program Files',
    icon: 'folder',
    parent: 'c-drive',
    statusHint: 'This folder is empty.',
    items: [],
  },
  network: {
    id: 'network',
    name: 'Network',
    title: 'Network',
    icon: 'network',
    parent: 'computer',
    statusHint: 'No other computers found.',
    items: [],
  },
  'recycle-bin': {
    id: 'recycle-bin',
    name: 'Recycle Bin',
    title: 'Recycle Bin',
    icon: 'recycle',
    parent: 'desktop',
    statusHint: 'I miss you',
    items: RECYCLE_ITEMS.map((item, i) => ({
      id: `rb-${i}`,
      name: item.name,
      icon: item.icon,
      type: 'file',
      meta: item.meta,
      open: item.icon === 'pictures' ? 'photos' : item.icon === 'text' ? 'notepad' : undefined,
    })),
  },
}

export const DESKTOP_ICONS = [
  { id: 'recycle', label: 'Recycle Bin', icon: 'recycle', app: 'explorer', path: 'recycle-bin' },
  { id: 'computer', label: 'Computer', icon: 'computer', app: 'explorer', path: 'computer' },
  { id: 'documents', label: 'Documents', icon: 'documents', app: 'explorer', path: 'documents' },
  { id: 'pictures', label: 'Pictures', icon: 'pictures', app: 'explorer', path: 'pictures' },
  { id: 'remember', label: 'remember.txt', icon: 'text', app: 'notepad' },
  { id: 'missyou', label: 'I miss you', icon: 'letter', app: 'dialog' },
]

export const START_PROGRAMS = [
  { id: 'notepad', label: 'Notepad', icon: 'notepad', app: 'notepad' },
  { id: 'paint', label: 'Paint', icon: 'paint', app: 'photos' },
  { id: 'ie', label: 'Internet Explorer', icon: 'ie', app: 'about' },
  { id: 'wmp', label: 'Windows Media Player', icon: 'wmp', app: 'photos' },
  { id: 'remember', label: 'remember.txt', icon: 'text', app: 'notepad' },
  { id: 'dialog', label: 'Do you remember?', icon: 'letter', app: 'dialog' },
  { id: 'recycle', label: 'Recycle Bin', icon: 'recycle', app: 'explorer', path: 'recycle-bin' },
  { id: 'about', label: 'About Aero Rebirth', icon: 'info', app: 'about' },
]

export const START_RIGHT = [
  { id: 'documents', label: 'Documents', app: 'explorer', path: 'documents' },
  { id: 'pictures', label: 'Pictures', app: 'explorer', path: 'pictures' },
  { id: 'music', label: 'Music', app: 'explorer', path: 'music' },
  { id: 'games', label: 'Games', app: null },
  { id: 'computer', label: 'Computer', app: 'explorer', path: 'computer' },
  { id: 'control', label: 'Control Panel', app: null },
  { id: 'devices', label: 'Devices and Printers', app: null },
  { id: 'defaults', label: 'Default Programs', app: null },
  { id: 'help', label: 'Help and Support', app: 'dialog' },
]

export const PINNED = [
  { id: 'ie', icon: 'ie', title: 'Internet Explorer', app: 'about' },
  { id: 'explorer', icon: 'explorer', title: 'Windows Explorer', app: 'explorer', path: 'libraries' },
  { id: 'wmp', icon: 'wmp', title: 'Windows Media Player', app: 'photos' },
]

export const APPS = {
  notepad: {
    id: 'notepad',
    title: 'remember.txt - Notepad',
    icon: 'notepad',
    width: 440,
    height: 360,
    x: 140,
    y: 48,
  },
  photos: {
    id: 'photos',
    title: 'Windows Photo Viewer',
    icon: 'pictures',
    width: 460,
    height: 380,
    x: 220,
    y: 36,
  },
  explorer: {
    id: 'explorer',
    title: 'Libraries',
    icon: 'explorer',
    width: 720,
    height: 480,
    x: 90,
    y: 28,
    path: 'libraries',
  },
  recycle: {
    id: 'recycle',
    title: 'Recycle Bin',
    icon: 'recycle',
    width: 400,
    height: 300,
    x: 180,
    y: 80,
  },
  dialog: {
    id: 'dialog',
    title: 'Aero Rebirth',
    icon: 'info',
    width: 380,
    height: 210,
    x: 260,
    y: 130,
  },
  about: {
    id: 'about',
    title: 'About Aero Rebirth',
    icon: 'info',
    width: 420,
    height: 280,
    x: 200,
    y: 70,
  },
}
