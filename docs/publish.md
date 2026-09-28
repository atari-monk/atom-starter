## Publish Instruction

- Add `vite.config.js` to set base path for GitHub Pages

```js
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/pages/project-name/',
})
```

- Build `dist`

```sh
pnpm build
```

- Copy dist content to repo `pages/project-name/`

```sh
cp -r /source/folder/. /destination/folder/
```

- Copy `sounds` to repo `pages/project-name/sounds`

- To automate copy add script to package.json:

```json
"publish": "cp -r ./dist/. ../pages/atom-starter/ && cp -r ./sounds ../pages/atom-starter/"
```

- Add index.md with link to page

- Trun on github pages on main/root

- Commit