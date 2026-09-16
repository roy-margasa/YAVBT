# 🔌 Plugins

This folder is where I put the Vue plugins used by the app. The purpose is to keep `main.ts` clean, so it can focus on creating and mounting the app instead of becoming a long list of plugin configurations.

## 📂 Structure

```
src/plugins/
├── index.ts                 # Finds and registers the plugins automatically
├── README.md                # This file
├── _shared/                 # Shared helpers for plugins
│   └── routeMeta.ts         # Shared route title state
├── 1.router/
│   ├── index.ts             # Main router setup
│   └── guards.ts            # Router guards
├── 2.pinia/
│   └── index.ts
└── others/                  # Plugins that do not need a numbered folder
      ├── unhead.ts
      └── vue-query.ts
```

The number at the beginning of a folder helps show the order in which the
plugins are registered. Hopefully this saves me from wondering why a plugin is
not working because another plugin was registered first.

## ❓ How Does It Work?

`index.ts` uses Vite's `import.meta.glob` to find the plugin files. It looks
for:

- `index.ts` or `index.js` inside a numbered plugin folder
- `.ts` or `.js` files directly inside the `others/` folder

The files are sorted by their path and registered automatically. Each plugin needs to export a default function that receives the Vue `App` instance:

```ts
import type { App } from 'vue';

export default function (app: App) {
  // Configure and register the plugin here.
}
```

## ➕ How to Add a Plugin?

If the plugin needs to be registered in a specific order, create a numbered folder:

```
src/plugins/3.something/index.ts
```

If the plugin does not need a numbered folder, put it directly inside
`others/`:

```
src/plugins/others/something.ts
```

For helpers shared by multiple plugins, use the `_shared/` folder.

## ⚠️ Important

Please do not touch `src/plugins/index.ts` or the existing plugin
configuration when adding an unrelated plugin. New plugins are picked up automatically as long as they follow the folder structure and export the required default function.

The existing Router, Pinia, Unhead, and Vue Query configurations are already working. You should only change them when you actually need to change how those plugins work.
