# Changelog

All notable changes to this project are documented in this file.

## [0.6.3] - 2026-09-22

### ⬆️ Updated

- Update all packages except `@type/nodes` because it match on my current Node version, and `typescript` because of the typescript-eslint incompatibility

[0.6.3]: https://github.com/roy-margasa/YAVBT/releases/tag/v0.6.3

## [0.6.2] - 2026-09-18

### ✨ Added

- Example layout, for cleaner code on each example component file

### 🔁 Changed

- Change button styling

[0.6.2]: https://github.com/roy-margasa/YAVBT/releases/tag/v0.6.2

## [0.6.1] - 2026-09-18

### ✨ Added

- Link to example Vue file source
- Example for defineModel and Provide / Inject

### 🔁 Changed

- Change top 8 Vueuse: useMediaQuery to useBreakpoints. It's more likely to be used

[0.6.1]: https://github.com/roy-margasa/YAVBT/releases/tag/v0.6.1

## [0.6.0] - 2026-09-16

### ✨ Added

- Added centralized site configuration in `src/config/site.ts`.
- Added the navigation and plugin structure for routing, Pinia, Unhead, and Vue Query.
- Added route guards and shared route metadata helpers.
- Added environment type declarations.

### 🔁 Changed

- Moved router configuration into the plugin and navigation directories.

### 🗑️ Removed

- Removed the previous `src/router` structure and `src/composables/useDefaultHead.ts`.

[0.6.0]: https://github.com/roy-margasa/YAVBT/releases/tag/v0.6.0
