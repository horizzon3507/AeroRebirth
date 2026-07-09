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

/** @deprecated use NOTEPAD_DOCUMENTS — kept for any leftover imports */
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

export const NOTEPAD_DOCUMENTS = {
  remember: {
    id: 'remember',
    title: 'remember.txt',
    body: `Do you remember?

The wallpaper was always this blue.
The hills never moved.
The clock kept ticking anyway.

Why did everything change so quickly?

I left a note on the desktop
for whoever finds this place again.

I miss you.

— someone who used to live here
`,
  },
  missyou: {
    id: 'missyou',
    title: 'I miss you.txt',
    body: `I miss you

I keep opening this folder
like you might still be in it.

The cursor blinks.
Nobody answers.

Do you remember?
`,
  },
  why: {
    id: 'why',
    title: 'Why did everything change so quickly?.txt',
    body: `Why did everything change so quickly?

One day the glass was still Aero.
The next, everything was flat.

I didn't notice the moment it left.
Only that the hills looked lonelier.

Are you still there?
`,
  },
  unsent: {
    id: 'unsent',
    title: 'unsent_draft.txt',
    body: `Hey—

I started this a hundred times.
Never hit send.

The subject line was always
"Do you remember?"

Draft saved · forever ago
`,
  },
  hills: {
    id: 'hills',
    title: 'the hills still look the same.txt',
    body: `the hills still look the same

same blue
same soft light
same empty sky

only the people are gone

I miss you
`,
  },
  guest: {
    id: 'guest',
    title: 'Guest session.log',
    body: `[Guest session]
login: Guest
wallpaper: Harmony
status: still here

00:00  Starting Windows…
00:04  Desktop ready
00:12  whisper: Do you remember?
01:07  whisper: Why did everything change so quickly?
03:41  whisper: I miss you
———
session never ended
`,
  },
  goodbye: {
    id: 'goodbye',
    title: 'goodbye.txt',
    body: `goodbye

(this file is almost empty)

I miss you
`,
  },
  readme: {
    id: 'readme',
    title: 'readme_first.txt',
    body: `If you found this place again—

Don't restore from recycle.
Some things are meant to stay deleted.

The Music folder still plays.
The Pictures folder mostly doesn't.

Do you remember?
`,
  },
  dialup: {
    id: 'dialup',
    title: 'connection_notes.txt',
    body: `Tried to reconnect.

Modem tone in my head.
No carrier.

Error: The network path was not found.
Error: Are you still there?

— Guest
`,
  },
  leftover: {
    id: 'leftover',
    title: 'shopping_list.txt',
    body: `- milk
- batteries for the remote
- ask if they're coming back

(last item never crossed out)
`,
  },
}

export const PHOTO_IMAGES = {
  hallway: {
    id: 'hallway',
    src: '/photos/empty_hallway.png',
    title: 'empty_hallway.jpg',
  },
  pool: {
    id: 'pool',
    src: '/photos/pool_at_night.png',
    title: 'pool_at_night.jpg',
  },
  hills: {
    id: 'hills',
    src: '/photos/faded_hills.png',
    title: 'faded_hills.jpg',
  },
  office: {
    id: 'office',
    src: '/photos/empty_office.png',
    title: 'empty_office.jpg',
  },
  broken: {
    id: 'broken',
    src: null,
    title: 'This picture could not be displayed.',
    broken: true,
  },
}

export const MUSIC_TRACKS = [
  {
    id: 'harmony',
    title: 'Harmony (loop)',
    artist: 'Aero Rebirth',
    src: '/music/harmony_loop.wav',
    durationHint: '0:08',
  },
  {
    id: 'guest',
    title: 'Guest session',
    artist: 'Unknown',
    src: '/music/guest_session.wav',
    durationHint: '0:06',
  },
  {
    id: 'summer',
    title: 'summer_2011',
    artist: 'Sample Music',
    src: '/music/summer_2011.wav',
    durationHint: '0:07',
  },
  {
    id: 'dialup',
    title: 'dial-up dreams',
    artist: 'Nostalgia',
    src: '/music/dialup_dreams.wav',
    durationHint: '0:05',
  },
  {
    id: 'voice',
    title: 'voice_memo.wav',
    artist: 'Corrupted',
    src: null,
    corrupted: true,
    durationHint: '—:—',
  },
  {
    id: 'us',
    title: 'us (unfinished)',
    artist: 'Corrupted',
    src: null,
    corrupted: true,
    durationHint: '—:—',
  },
]

export const RECYCLE_ITEMS = [
  {
    name: 'summer_2011.jpg',
    meta: 'Deleted · forever ago',
    icon: 'pictures',
    open: 'photos',
    imageId: 'broken',
  },
  {
    name: 'voice_memo.wav',
    meta: 'Corrupted',
    icon: 'music',
    open: 'wmp',
    trackId: 'voice',
  },
  {
    name: 'goodbye.txt',
    meta: 'Empty',
    icon: 'text',
    open: 'notepad',
    documentId: 'goodbye',
  },
  {
    name: 'us.zip',
    meta: 'Password forgotten',
    icon: 'folder',
  },
  {
    name: 'pool_at_night.jpg',
    meta: 'Restored · almost',
    icon: 'pictures',
    open: 'photos',
    imageId: 'pool',
  },
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
      {
        id: 'doc-remember',
        name: 'remember.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'remember',
      },
      { id: 'doc-letters', name: 'letters', icon: 'folder', type: 'folder', navigate: 'letters' },
      { id: 'doc-notes', name: 'notes from before', icon: 'folder', type: 'folder', navigate: 'notes' },
      {
        id: 'doc-miss',
        name: 'I miss you.txt',
        icon: 'letter',
        type: 'file',
        open: 'notepad',
        documentId: 'missyou',
      },
      {
        id: 'doc-why',
        name: 'Why did everything change so quickly?.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'why',
      },
      {
        id: 'doc-readme',
        name: 'readme_first.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'readme',
      },
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
      {
        id: 'let-unsent',
        name: 'unsent_draft.txt',
        icon: 'letter',
        type: 'file',
        open: 'notepad',
        documentId: 'unsent',
      },
      {
        id: 'let-dialup',
        name: 'connection_notes.txt',
        icon: 'letter',
        type: 'file',
        open: 'notepad',
        documentId: 'dialup',
      },
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
      {
        id: 'note-hills',
        name: 'the hills still look the same.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'hills',
      },
      {
        id: 'note-guest',
        name: 'Guest session.log',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'guest',
      },
      {
        id: 'note-list',
        name: 'shopping_list.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'leftover',
      },
    ],
  },
  pictures: {
    id: 'pictures',
    name: 'Pictures',
    title: 'Pictures',
    icon: 'pictures',
    parent: 'libraries',
    statusHint: 'Some pictures could not be displayed.',
    items: [
      {
        id: 'pic-summer',
        name: 'summer_2011.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'broken',
        meta: 'Broken',
      },
      {
        id: 'pic-hallway',
        name: 'empty_hallway.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'hallway',
      },
      {
        id: 'pic-pool',
        name: 'pool_at_night.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'pool',
      },
      {
        id: 'pic-hills',
        name: 'faded_hills.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'hills',
      },
      {
        id: 'pic-office',
        name: 'empty_office.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'office',
      },
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
    statusHint: 'File not found',
    items: [
      {
        id: 'sample-gone',
        name: 'Chrysanthemum.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'broken',
        meta: 'File not found',
      },
      {
        id: 'sample-desert',
        name: 'Desert.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'broken',
        meta: 'File not found',
      },
      {
        id: 'sample-koala',
        name: 'Koala.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'broken',
        meta: 'File not found',
      },
      {
        id: 'sample-lighthouse',
        name: 'Lighthouse.jpg',
        icon: 'pictures',
        type: 'file',
        open: 'photos',
        imageId: 'hills',
        meta: 'Recovered',
      },
    ],
  },
  music: {
    id: 'music',
    name: 'Music',
    title: 'Music',
    icon: 'music',
    parent: 'libraries',
    statusHint: 'Silence · almost',
    items: [
      {
        id: 'mus-harmony',
        name: 'Harmony (loop).wma',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'harmony',
      },
      {
        id: 'mus-guest',
        name: 'Guest session.wma',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'guest',
      },
      {
        id: 'mus-voice',
        name: 'voice_memo.wav',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'voice',
        meta: 'Corrupted',
      },
      { id: 'mus-sample', name: 'Sample Music', icon: 'folder', type: 'folder', navigate: 'sample-music' },
    ],
  },
  'sample-music': {
    id: 'sample-music',
    name: 'Sample Music',
    title: 'Sample Music',
    icon: 'folder',
    parent: 'music',
    statusHint: 'Do you remember?',
    items: [
      {
        id: 'sm-summer',
        name: 'summer_2011.mp3',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'summer',
      },
      {
        id: 'sm-dialup',
        name: 'dial-up dreams.mp3',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'dialup',
      },
      {
        id: 'sm-us',
        name: 'us (unfinished).mp3',
        icon: 'music',
        type: 'file',
        open: 'wmp',
        trackId: 'us',
        meta: 'Corrupted',
      },
    ],
  },
  videos: {
    id: 'videos',
    name: 'Videos',
    title: 'Videos',
    icon: 'folder',
    parent: 'libraries',
    statusHint: 'Codec missing',
    items: [
      {
        id: 'vid-home',
        name: 'home_movie_2010.wmv',
        icon: 'folder',
        type: 'file',
        meta: 'Cannot play',
      },
      {
        id: 'vid-pool',
        name: 'pool_night.avi',
        icon: 'folder',
        type: 'file',
        meta: 'Corrupted',
      },
      { id: 'vid-sample', name: 'Sample Videos', icon: 'folder', type: 'folder', navigate: 'sample-videos' },
    ],
  },
  'sample-videos': {
    id: 'sample-videos',
    name: 'Sample Videos',
    title: 'Sample Videos',
    icon: 'folder',
    parent: 'videos',
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
    statusHint: '1 user profile',
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
    statusHint: 'I miss you',
    items: [
      { id: 'guest-desktop', name: 'Desktop', icon: 'folder', type: 'folder', navigate: 'desktop' },
      { id: 'guest-docs', name: 'Documents', icon: 'documents', type: 'folder', navigate: 'documents' },
      { id: 'guest-dl', name: 'Downloads', icon: 'folder', type: 'folder', navigate: 'downloads' },
      { id: 'guest-pics', name: 'Pictures', icon: 'pictures', type: 'folder', navigate: 'pictures' },
      { id: 'guest-music', name: 'Music', icon: 'music', type: 'folder', navigate: 'music' },
      { id: 'guest-vids', name: 'Videos', icon: 'folder', type: 'folder', navigate: 'videos' },
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
      {
        id: 'desk-remember',
        name: 'remember.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'remember',
      },
      {
        id: 'desk-miss',
        name: 'I miss you',
        icon: 'letter',
        type: 'file',
        open: 'dialog',
      },
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
      { id: 'dl-aero', name: 'AeroGlass_setup.exe.part', icon: 'folder', type: 'file', meta: '99%' },
      { id: 'dl-photo', name: 'IMG_0042.jpg.crdownload', icon: 'pictures', type: 'file', meta: 'Incomplete' },
      {
        id: 'dl-readme',
        name: 'readme_first.txt',
        icon: 'text',
        type: 'file',
        open: 'notepad',
        documentId: 'readme',
      },
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
      { id: 'rec-music', name: 'Sample Music', icon: 'music', type: 'folder', navigate: 'sample-music' },
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
      { id: 'win-explorer', name: 'explorer.exe', icon: 'explorer', type: 'file', open: 'explorer', path: 'libraries' },
      {
        id: 'win-notepad',
        name: 'notepad.exe',
        icon: 'notepad',
        type: 'file',
        open: 'notepad',
        documentId: 'remember',
      },
      { id: 'win-mspaint', name: 'mspaint.exe', icon: 'paint', type: 'file', open: 'paint' },
      { id: 'win-wmplayer', name: 'wmplayer.exe', icon: 'wmp', type: 'file', open: 'wmp' },
      { id: 'win-system32', name: 'System32', icon: 'folder', type: 'folder', navigate: 'system32' },
    ],
  },
  system32: {
    id: 'system32',
    name: 'System32',
    title: 'System32',
    icon: 'folder',
    parent: 'windows-folder',
    statusHint: 'You do not have permission · yet',
    items: [
      { id: 'sys-denied', name: 'access_denied.log', icon: 'text', type: 'file', open: 'notepad', documentId: 'guest' },
    ],
  },
  'program-files': {
    id: 'program-files',
    name: 'Program Files',
    title: 'Program Files',
    icon: 'folder',
    parent: 'c-drive',
    statusHint: 'Installed · once',
    items: [
      { id: 'pf-ie', name: 'Internet Explorer', icon: 'ie', type: 'folder', navigate: 'pf-ie' },
      { id: 'pf-wmp', name: 'Windows Media Player', icon: 'wmp', type: 'folder', navigate: 'pf-wmp' },
      { id: 'pf-games', name: 'Microsoft Games', icon: 'games', type: 'folder', navigate: 'pf-games' },
      { id: 'pf-ghost', name: 'Something Uninstalled', icon: 'folder', type: 'folder', navigate: 'pf-ghost' },
    ],
  },
  'pf-ie': {
    id: 'pf-ie',
    name: 'Internet Explorer',
    title: 'Internet Explorer',
    icon: 'ie',
    parent: 'program-files',
    statusHint: 'This page cannot be displayed',
    items: [
      { id: 'ie-exe', name: 'iexplore.exe', icon: 'ie', type: 'file', open: 'about' },
    ],
  },
  'pf-wmp': {
    id: 'pf-wmp',
    name: 'Windows Media Player',
    title: 'Windows Media Player',
    icon: 'wmp',
    parent: 'program-files',
    statusHint: 'Now Playing',
    items: [
      { id: 'wmp-exe', name: 'wmplayer.exe', icon: 'wmp', type: 'file', open: 'wmp' },
    ],
  },
  'pf-games': {
    id: 'pf-games',
    name: 'Microsoft Games',
    title: 'Microsoft Games',
    icon: 'games',
    parent: 'program-files',
    statusHint: 'Games are no longer available',
    items: [],
  },
  'pf-ghost': {
    id: 'pf-ghost',
    name: 'Something Uninstalled',
    title: 'Something Uninstalled',
    icon: 'folder',
    parent: 'program-files',
    statusHint: 'Shortcut target missing',
    items: [
      { id: 'ghost-lnk', name: 'uninstall leftover.lnk', icon: 'folder', type: 'file', meta: 'Broken shortcut' },
    ],
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
      open: item.open,
      documentId: item.documentId,
      imageId: item.imageId,
      trackId: item.trackId,
    })),
  },
}

export const DESKTOP_ICONS = [
  { id: 'recycle', label: 'Recycle Bin', icon: 'recycle', app: 'explorer', path: 'recycle-bin' },
  { id: 'computer', label: 'Computer', icon: 'computer', app: 'explorer', path: 'computer' },
  { id: 'documents', label: 'Documents', icon: 'documents', app: 'explorer', path: 'documents' },
  { id: 'pictures', label: 'Pictures', icon: 'pictures', app: 'explorer', path: 'pictures' },
  {
    id: 'remember',
    label: 'remember.txt',
    icon: 'text',
    app: 'notepad',
    documentId: 'remember',
  },
  { id: 'missyou', label: 'I miss you', icon: 'letter', app: 'dialog' },
]

export const START_PROGRAMS = [
  { id: 'notepad', label: 'Notepad', icon: 'notepad', app: 'notepad', documentId: 'remember' },
  { id: 'paint', label: 'Paint', icon: 'paint', app: 'paint' },
  { id: 'ie', label: 'Internet Explorer', icon: 'ie', app: 'about' },
  { id: 'wmp', label: 'Windows Media Player', icon: 'wmp', app: 'wmp' },
  { id: 'remember', label: 'remember.txt', icon: 'text', app: 'notepad', documentId: 'remember' },
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
  { id: 'wmp', icon: 'wmp', title: 'Windows Media Player', app: 'wmp' },
]

export const APPS = {
  notepad: {
    id: 'notepad',
    title: 'Notepad',
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
  wmp: {
    id: 'wmp',
    title: 'Windows Media Player',
    icon: 'wmp',
    width: 520,
    height: 420,
    x: 160,
    y: 40,
  },
  paint: {
    id: 'paint',
    title: 'Untitled - Paint',
    icon: 'paint',
    width: 560,
    height: 440,
    x: 120,
    y: 32,
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
