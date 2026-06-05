# Google Page Center

Google Page Center is a Chrome Manifest V3 extension that centers Google Search result pages on wide screens.

The extension injects a small CSS file only on Google Search URLs that match:

- `http://www.google.*/search*`
- `https://www.google.*/search*`

Other pages are ignored.

## What It Does

- Centers the Google Search page body on desktop-width viewports.
- Limits the page body to a readable maximum width.
- Leaves non-Google pages untouched.
- Runs as a local unpacked Chrome extension.

## Install

1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Click **Load unpacked**.
4. Select this project directory.

## Files

- `manifest.json` defines the Chrome extension and URL matching rules.
- `content/page-center.css` contains the centering styles.
