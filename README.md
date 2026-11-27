# Kairos

A cosmic pixel focus timer. Each focus block forms a star in your galaxy. It runs as a home-screen web app on iPhone, and in any browser on a computer.

## Install on your iPhone (GitHub Pages)

1. Make a new public repository on GitHub, for example `TheScholium/kairos`.
2. Upload all files in this folder to the root of the repository.
3. Go to Settings > Pages. Set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Wait about one minute. Open `https://<your-user>.github.io/kairos/` in Safari on the iPhone.
5. Tap Share > Add to Home Screen. Make sure "Open as Web App" is on.

The app then opens full-screen, works offline, and keeps its data on the phone.

## Sync your phone and your Mac

1. Open https://github.com/settings/tokens/new?scopes=gist&description=Kairos%20sync and make a classic token with only the `gist` scope. Copy it.
2. In Kairos on the first device, go to Settings > Sync, paste the token, and tap Log in. This makes a private gist named `kairos-sync` that holds your galaxy.
3. On the second device, paste the same token. Its stars merge with the synced galaxy.

After that, each device pulls when you open it and pushes about 4 seconds after a change. The newer copy wins. Use one device at a time. The token stays in the browser storage of each device. Sync works from the GitHub Pages app, not from the Claude preview.

## Update the app

Edit `index.html`, then change `V` in `sw.js` (for example to `kairos-v2`). Push. Close and open the app two times to load the new version.

## Limits

- During a focus block, if the app is hidden (closed, other tab, locked phone) for 3 minutes or more, the matter drifts off. A pause also holds for only 3 minutes.

- iOS stops web apps when the screen locks. The "Keep screen awake" setting prevents this while a timer runs.
- If the app is closed or the screen locks, the time stays correct, because the timer uses the clock time. The chime for the end of a block plays when you open the app again.
- Data is in the browser storage of each browser. Without sync, the phone app and the computer have separate galaxies. If you delete the app, its data goes too.
- Version 1 data (if any) moves into the galaxy automatically on first open.
