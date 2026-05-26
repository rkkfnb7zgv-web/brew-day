# Red Rock Schwarzbier Brew Day Checklist

A simple offline-first web app that mirrors the printed brew day checklist. Tick off taskz, add comments, see progress, export when done. Works on iPhone, Android, MacBook — anywhere a browser runs.

## Files

```
brew_app/
├── index.html      ← the app
├── app.js          ← the checklist data and logic
├── sw.js           ← service worker (offline support)
├── manifest.json   ← PWA manifest
├── icon-192.png    ← app icon for home screen
└── icon-512.png    ← higher-res icon
```

All six files need to live together. The app is fully client-side — no server, no accounts, no internet required once installed.

## How to use it

### Option 1: Quick try on your computer

1. Open `index.html` directly in a browser (double-click)
2. Most things will work, but the service worker may not (browsers restrict it for `file://` URLs)

### Option 2: Local development

```bash
cd brew_app
python3 -m http.server 8000
# then open http://localhost:8000 in any browser
```

### Option 3: Deploy to Netlify (recommended)

This is how you'll actually use it on your phone.

1. Go to https://app.netlify.com/drop
2. Drag the entire `brew_app/` folder onto the page
3. Netlify gives you a URL like `https://your-app-name.netlify.app`
4. Open that URL on your iPhone in Safari
5. Tap the Share button, then "Add to Home Screen"
6. The app now lives on your phone as an icon, opens like a native app, works offline

### Option 4: Self-host on GitHub Pages

Push the folder to a GitHub repo, enable Pages, get a URL, install on phone (same as Netlify steps).

## What it does

- **Tap a checkbox** to mark a task done. State persists across browser sessions.
- **Type in a comment field** to record actuals, notes, or readings. Saves automatically.
- **Tap stage headers** to collapse / expand individual stages.
- **Expand all / Collapse all** buttons in the toolbar for bulk control.
- **Export** opens a modal with all checked tasks and comments as plain text — copy and paste anywhere.
- **Reset** clears everything (with confirmation) for a fresh brew.

## What it doesn't do

- No accounts, no sync between devices
- No notifications or timers (use your phone's built-in timers for the mash and boil)
- No calculations or recipe scaling
- No fermentation charts (use the RAPT app for the gravity curve)
- No multiple recipes (just this one Schwarzbier)

These are all features of the longer-term brewing app. This checklist is a focused starting point.

## Data storage

All data lives in your browser's localStorage on whatever device you installed the app on. Specifically:

- iPhone: stays on your iPhone
- MacBook: stays on your MacBook (separate from iPhone)
- Won't sync between devices

Use the Export button to capture a full brew log as text when you're done.

## Iteration

If you want to change anything — add tasks, fix wording, reorder — edit `app.js` (specifically the `CHECKLIST` constant near the top). All checklist content lives in that one structure.

Built as a stepping stone toward the larger brewing app design.
