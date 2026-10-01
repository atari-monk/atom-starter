## Project `atom-starter` log

Lightweight project history / overview.

### 1. Copy template

Copy project `vite-vanilla`.

It's a Vite template with TypeScript where unnecessary template boilerplate code was removed.

**Warning:**
The template was created for a specific version of Vite.
It may need updates for newer versions.

### 2. Change names

- Change `package.json` name to `atom-starter`
- Add `favicon.png` of Atom Engine

### 3. Install `atari-monk-atom-engine`

```sh
pnpm add atari-monk-atom-engine
```

### 4. Add a minimal `index.html`

### 5. Add `styles.css` for an empty black page

### 6. Add `sounds` folder

### 7. Add `rect.ts` object to test that the engine works

### 8. Add `game.ts` orchestrator with main loop

### 9. Add `main.ts`, application entrypoint

### 10. Separate game lifecycle into modules

```txt
src
├── game
│   ├── create-game.ts
│   ├── game.ts
│   ├── game-type.ts
│   ├── rect.ts
│   ├── render-game.ts
│   └── update-game.ts
├── main.ts
└── style.css
```

### 11. Initialize the Git repository

```sh
git init
git add .
git commit -m "feat: template for game app with atom engine"
```

### 12. Create the remote repository

Create the repository on GitHub and connect the local repository:

```sh
git branch -M main
git remote add origin https://github.com/atari-monk/atom-starter
git push -u origin main
```
