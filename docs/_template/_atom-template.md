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
[[include:/home/atari-monk/atari-monk/project/atom-starter/index.html]]
```

### 5. Add `styles.css` for an empty black page

```css
[[include:/home/atari-monk/atari-monk/project/atom-starter/src/style.css]]
```

### 6. Add `sounds` folder

Add *.mp3 and *.wav files

### 7. Add `shared` folder

Add rect object to test engine works

```py
[[include:/home/atari-monk/atari-monk/project/atom-starter/src/shared/rect.ts]]
```

### 8. Add Game object with main loop

```py
[[include:/home/atari-monk/atari-monk/project/atom-starter/src/game.ts]]
```

### 9. Add App Main Entrypoint 

```py
[[include:/home/atari-monk/atari-monk/project/atom-starter/src/main.ts]]
```

### 10. Initialize the Git repository

```sh
git init
git add .
git commit -m "feat: template for game app with atom engine"
```

### 11. Create the remote repository

Use Visual Studio buttons or create repo on GitHub page and run commands:

```sh
git branch -M main
git remote add origin https://github.com/atari-monk/atom-starter
git push -u origin main
```