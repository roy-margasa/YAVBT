# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

- Link to example Vue file source
- Example for defineModel and Provide / Inject

### Changed

- Change top 8 Vueuse: useMediaQuery to useBreakpoints. It's more likely to be used

### Fixed

-

## [0.6.0] - 2026-09-16

### Added

- Added centralized site configuration in `src/config/site.ts`.
- Added the navigation and plugin structure for routing, Pinia, Unhead, and Vue Query.
- Added route guards and shared route metadata helpers.
- Added environment type declarations.

### Changed

- Moved router configuration into the plugin and navigation directories.

### Removed

- Removed the previous `src/router` structure and `src/composables/useDefaultHead.ts`.

[0.6.0]: https://github.com/roy-margasa/YAVBT/releases/tag/v0.6.0
