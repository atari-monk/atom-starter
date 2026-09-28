## Project `atom-starter` SRS

### Minimal `index.html`

- html
- en
- utf-8
- favicon
- responsive
- title `Atom Starter`
- overlay with `Click to Start` text in center of the screen
- canvas
- `src/main.ts` module

### Empty black page `styles.css`

- html, body:
  - no margins
  - no overflow
  - black background
  - 100% height
- canvas
  - no display initialy
  - width and height 100%
- start-overlay
  - 0.8 opacity black background
  - white text
  - width and height 100%
  - top left 0, fixed position
  - centered text and items
  - pointer cursor
  - high z index
  - flex display
  - font size 2rem
