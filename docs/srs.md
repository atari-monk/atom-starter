## Project `atom-starter` SRS

### Project

- game project template
- TypeScript
- uses `atom-engine` library
- tests simple game object with current engine library
- source code for the code generator script

### `index.html`

Minimal index

- HTML
- en
- utf-8
- favicon
- responsive
- title `Atom Starter`
- overlay with `Click to Start` text in center of the screen
- canvas
- `src/main.ts` module

### `styles.css`

Empty black page

- html, body:
  - no margins
  - no overflow
  - black background
  - 100% height
- canvas
  - not displayed initially
  - width and height 100%
- start-overlay
  - 0.8 opacity black background
  - white text
  - width and height 100%
  - top left 0, fixed position
  - centered text and items
  - pointer cursor
  - high z-index
  - flex display
  - font size 2rem
