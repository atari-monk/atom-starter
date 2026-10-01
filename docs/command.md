## Commands

Commands used on this project.

### Bundle code

```sh
cd /home/atari-monk/atari-monk/project/atom-starter && \
proj files bundle \
 -o docs/code.md \
 -p src/game/create-game.ts \
 src/game/game-type.ts \
 src/game/game.ts \
 src/game/rect.ts \
 src/game/render-game.ts \
 src/game/update-game.ts \
 src/main.ts \
 src/style.css \
 ./index.html \
 ./package.json \
 ./tsconfig.json \
 ./vite.config.js
```

### Update order

```sh
cd /home/atari-monk/atari-monk/project/atom-starter && \
proj docs gen_idx_order -p ./docs
```

### Update index

```sh
cd /home/atari-monk/atari-monk/project/atom-starter && \
proj docs gen_idx -p ./docs
```
