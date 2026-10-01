## Publish Instructions

### Initial Publish

#### `atom-starter` project

1. Add `vite.config.js` to configure the GitHub Pages base path:

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/pages/project-name/",
});
```

2. Build the project:

```sh
pnpm build
```

3. Copy the contents of `dist` to `pages/project-name/` in the `pages` repository.

4. Copy the `sounds` directory to `pages/project-name/sounds/`.

To automate the copy step, add the following script to `package.json`:

```json
"publish": "cp -r ./dist/. ../pages/atom-starter/ && cp -r ./sounds/. ../pages/atom-starter/sounds/"
```

#### `pages` project

1. Update the order and index files using the CLI.
2. Enable GitHub Pages with the source set to the `main` branch and root (`/`).
3. Commit and push the changes.

### Normal Publish

#### `atom-starter` project

1. Build the project:

```sh
pnpm build
```

2. Publish the build:

```sh
pnpm run publish
```

#### `pages` project

1. Update the order and index files using the CLI.
2. Commit and push the changes.

### TODO

- Automate the publishing process.
