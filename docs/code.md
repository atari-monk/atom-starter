## Project `atom-starter` code

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atom Starter</title>
  </head>

  <div id="start-overlay">Click to Start</div>
  <canvas id="canvas"></canvas>

  <body>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### `styles.css`

```css
html,
body {
  margin: 0;
  overflow: hidden;
  background: black;
  height: 100%;
}

canvas {
  display: none;
  width: 100%;
  height: 100%;
}

#start-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 9999;
}
```
