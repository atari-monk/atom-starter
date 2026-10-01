## src/game/create-game.ts

```typescript
import type {
  RenderState,
  InputState,
  AudioState,
} from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { createRect } from "./rect";

export function createGameInternal(
  renderer: RenderState,
  input: InputState,
  audio: AudioState,
): GameState {
  return {
    renderer,
    input,
    audio,
    rect: createRect(960 - 50, 540 - 50, 100, 100),
  };
}
```

## src/game/game-type.ts

```typescript
import type {
  RenderState,
  InputState,
  AudioState,
} from "atari-monk-atom-engine";
import type { RectState } from "./rect";

export type GameState = {
  renderer: RenderState;
  input: InputState;
  audio: AudioState;
  rect: RectState;
};
```

## src/game/game.ts

```typescript
import {
  type AudioState,
  type InputState,
  type RenderState,
} from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { updateGameInternal } from "./update-game";
import { createGameInternal } from "./create-game";
import { renderGameInternal } from "./render-game";

export function createGame(
  renderer: RenderState,
  input: InputState,
  audio: AudioState,
): GameState {
  return createGameInternal(renderer, input, audio);
}

export function updateGame(state: GameState, dt: number) {
  updateGameInternal(state, dt);
}

export function renderGame(state: GameState, alpha: number) {
  renderGameInternal(state, alpha);
}
```

## src/game/rect.ts

```typescript
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
  color = "white",
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
    scale: 1,
  };
}

export function updateRect(rect: RectState, dt: number) {
  rect.time += dt;

  rect.scale = 1 + Math.sin(rect.time * rect.speed) * 0.9;
}

export function renderRect(rect: RectState, ctx: CanvasRenderingContext2D) {
  const w = rect.baseWidth * rect.scale;
  const h = rect.baseHeight * rect.scale;

  const dx = rect.x - (w - rect.baseWidth) / 2;
  const dy = rect.y - (h - rect.baseHeight) / 2;

  ctx.fillStyle = rect.color;
  ctx.fillRect(dx, dy, w, h);
}
```

## src/game/render-game.ts

```typescript
import { clear } from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { renderRect } from "./rect";

export function renderGameInternal(state: GameState, _alpha: number) {
  const ctx = state.renderer.ctx;
  clear(state.renderer);
  renderRect(state.rect, ctx);
}
```

## src/game/update-game.ts

```typescript
import type { GameState } from "./game-type";
import { updateRect } from "./rect";

export function updateGameInternal(state: GameState, dt: number) {
  updateRect(state.rect, dt);
}
```

## src/main.ts

```typescript
import "./style.css";
import {
  createAudioState,
  createInputState,
  createLoop,
  createRenderState,
  loadAudio,
  playMusicAfterGesture,
  startLoop,
} from "atari-monk-atom-engine";
import { createGame, updateGame, renderGame } from "./game/game";

const renderer = createRenderState("canvas");
const input = createInputState();

const audio = createAudioState();

(async () => {
  await loadAudio(audio, "bg", "./sounds/bg.mp3");
})();

const game = createGame(renderer, input, audio);

const overlay = document.getElementById("start-overlay");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

overlay?.addEventListener("click", async () => {
  overlay.style.display = "none";
  canvas.style.display = "block";

  await playMusicAfterGesture(audio, "bg", 0.5);
});

const loop = createLoop(
  (dt) => updateGame(game, dt),
  (alpha) => renderGame(game, alpha),
);

startLoop(loop);
```

## src/style.css

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

## index.html

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

## package.json

```json
{
  "name": "atom-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "publish": "cp -r ./dist/. ../pages/atom-starter/ && cp -r ./sounds ../pages/atom-starter/"
  },
  "devDependencies": {
    "typescript": "~6.0.2",
    "vite": "^8.0.12"
  },
  "packageManager": "pnpm@11.14.0+sha512.66c1ac4c7d4762d6d7dde44c7f3e5a73591ed0a0806e751d4ed32d4f004f25b2285a906b1fd8a9e3e621df3b4e2858bf88e50e0cf626bedbe977fe434a5caf85",
  "dependencies": {
    "atari-monk-atom-engine": "^0.0.2"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2023",
    "module": "esnext",
    "lib": ["ES2023", "DOM"],
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## vite.config.js

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  base: "/pages/atom-starter/",
});
```
