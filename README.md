# Pickle 3D Printing - a 3D print gallery website

A simple one-page catalog for showing off (and selling) 3D prints. No accounts, no build
tools, no cost. The whole site is plain HTML, CSS, and JavaScript.

## See it right now

Double-click `index.html`. It opens in any browser and works offline.

## What's inside

| File | What it does |
| --- | --- |
| `index.html` | The page structure (hero, gallery, about, footer) |
| `styles.css` | All the styling. The colors are four variables at the top |
| `data.js` | Your list of prints. This is the file you edit most |
| `script.js` | Builds the gallery and the click-to-zoom lightbox |
| `prints/lineup.jpg` | The product lineup photo, shown whole |
| `colors/palette.jpg` | The filament palette photo, shown whole |

## Add a print (the only step)

Open `data.js` and copy one of the blocks:

```js
{
  title: "Articulated dragon",
  detail: "PLA, 0.2mm layers, about 6 hours",
  price: "$15",
},
```

Save, refresh the browser. Done. Remove a block to remove a print.

The page shows the original photos whole: `prints/lineup.jpg` is the product
lineup shot and `colors/palette.jpg` is the filament palette. Replace either
file (same name) to update the page - no cropping needed.

## Make it yours

- Site name: edit `Pickle 3D Printing` in `index.html` (appears twice: the
  `<title>` tag and the header logo) and the hero text below it.
- Colors: change the four variables at the top of `styles.css`.
- Colors: the "Pick your color" section shows the palette photo plus the
  COLORS list in `data.js`.
- Ordering: the site can't take payments itself (free hosting can't run a
  checkout). Orders go to pickle3Dprinting@gmail.com - the email lives in
  one place, ORDER_EMAIL at the top of `data.js`, and fills in everywhere.

## Put it on the internet for free

### Option 1: GitHub Pages (recommended)

Free forever, no card, and the site gets an address like
`yourname.github.io/print-lab`. Good first step into how real sites ship.

1. Create a free account at https://github.com
2. Make a new repository (the "+" menu, "New repository"), name it anything,
   e.g. `print-lab`
3. On the repository page, click "uploading an existing file" and drag in ALL
   the files from this folder (index.html, styles.css, data.js, script.js,
   and the prints folder)
4. Go to Settings > Pages, set Source to "Deploy from a branch", pick the
   `main` branch, Save
5. Wait a minute, then visit `https://YOUR-USERNAME.github.io/print-lab/`

To update the site later, upload the changed files the same way.

### Option 2: Netlify Drop (fastest, no code at all)

1. Create a free account at https://netlify.com
2. Go to https://app.netlify.com/drop and drag this whole folder onto the page
3. You get a live address instantly, e.g. `random-name-123.netlify.app`

Free tier is plenty for a gallery. You can rename the site or attach a custom
domain later.

### Custom domain (optional, the only thing that costs money)

A domain like `theprintlab.com` costs about $10-12/year from Namecheap or
Cloudflare. Both GitHub Pages and Netlify let you point a domain at the site
for free. Totally optional - the free addresses work fine.

## A note on photos

Phone photos work great. For the cleanest look, shoot prints in daylight near
a window with a plain background. Photos are shown whole, exactly as taken - the site never
crops them.
