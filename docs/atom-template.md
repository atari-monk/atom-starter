## Atom Engine Starter Application

This repository serves as a reusable starting template for game projects using TypeScript and atom engine library.

### 1. Copy project [vite-vanilla-template](https://github.com/atari-monk/vite-vanilla-template)

### 2. Change names

* Change `package.json` name to `atom-starter`
* Add `favicon.png` of atom engine

### 3. Install `atari-monk-atom-engine`

```sh
pnpm add atari-monk-atom-engine
```

### 4. Add a minimal `index.html`

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Atom Starter</title>
</head>

<div id="start-overlay">
  Click to Start
</div>
<canvas id="canvas"></canvas>

<body>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>
```

### 5. Add `styles.css` for an empty black page

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

### 6. Add `sounds` folder

Add *.mp3 and *.wav files

### 7. Add `shared` folder

Add rect object to test engine works

```py
export type RectState = {
    x: number;
    y: number;
    width: number;
    height: number;
    baseWidth: number;
    baseHeight: number;
    color: string;
    time: number;
    speed: number;
    scale: number;
};

export function createRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color = "white"
): RectState {
    return {
        x,
        y,
        width,
        height,
        baseWidth: width,
        baseHeight: height,
        color,
        time: 0,
        speed: 3,
        scale: 1
    };
}

export function updateRect(rect: RectState, dt: number) {
    rect.time += dt;

    rect.scale = 1 + Math.sin(rect.time * rect.speed) * 0.9;
}

export function renderRect(
    rect: RectState,
    ctx: CanvasRenderingContext2D
) {
    const w = rect.baseWidth * rect.scale;
    const h = rect.baseHeight * rect.scale;

    const dx = rect.x - (w - rect.baseWidth) / 2;
    const dy = rect.y - (h - rect.baseHeight) / 2;

    ctx.fillStyle = rect.color;
    ctx.fillRect(dx, dy, w, h);
}
```

### 8. Add Game object with main loop

```py
import type { Renderer, Input, Audio } from "atari-monk-atom-engine";
import { createRect, renderRect, updateRect, type RectState } from "./shared/rect";

export type GameState = {
    renderer: Renderer;
    input: Input;
    audio: Audio;
    rect: RectState;
};

export function createGame(
    renderer: Renderer,
    input: Input,
    audio: Audio
): GameState {
    return {
        renderer,
        input,
        audio,
        rect: createRect(960 - 50, 540 - 50, 100, 100),
    };
}

export function updateGame(
    state: GameState,
    dt: number
) {
    updateRect(state.rect, dt);
}

export function renderGame(
    state: GameState,
    _alpha: number
) {
    const ctx = state.renderer.ctx

    state.renderer.clear();

    renderRect(
        state.rect,
        ctx
    );
}
```

### 9. Add App Main Entrypoint 

```py
import './style.css'
import {
    Renderer,
    Input,
    Audio,
    GameLoop
} from "atari-monk-atom-engine";
import { createGame, updateGame, renderGame } from "./game";

const renderer = new Renderer("canvas");
const input = new Input();

const audio = new Audio();

(async () => {
    await audio.load("bg", "./sounds/twinkle.wav");
})();

const game = createGame(renderer, input, audio);

const overlay = document.getElementById("start-overlay");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

overlay?.addEventListener("click", async () => {
    overlay.style.display = "none";
    canvas.style.display = "block";

    await audio.playMusicAfterGesture("bg", 0.5);
});

const loop = new GameLoop(
    (dt) => updateGame(game, dt),
    (alpha) => renderGame(game, alpha)
);

loop.start();
```

### 10. Initialize the Git repository

```sh
git init
git add .
git commit -m "feat: initialize Vite vanilla application"
```

### 11. Create the remote repository

Create repo on GitHub page and run commands:

```sh
git branch -M main
git remote add origin https://github.com/atari-monk/vite-vanilla-template
git push -u origin main
```