<div>
  <h1>Yet Another Vue 3 Boilerplate Template</h1>
  <div>
    <img alt="repo-size" src="https://img.shields.io/github/package-json/v/roy-margasa/YAVBT.svg" />
    <img alt="repo-size" src="https://img.shields.io/github/repo-size/roy-margasa/YAVBT.svg" />
    <img alt="last-commit" src="https://img.shields.io/github/last-commit/roy-margasa/YAVBT.svg" />
  </div>
  <br />
</div>

It's kinda a hassle to set up every Vue SPA project from zero. The purpose of this boilerplate is that it can be a "cheatsheet" and a learning material for best practices in Vue structure.

So every time you forget how to use certain Vue features or libraries, you can go back to this template and re-learn how things work.

### 📑 Table of Contents

- [⛓️ What Is Included and What Is That?](#-what-is-included-and-what-is-that)
- [🔝 Top 8 VueUse composables](#-top-8-vueuse-composables)
- [📂 Project Structure](#-project-structure)
  - [Further Structure for Components Folder](#-further-structure-for-components-folder)
- [❓How to Use This Boilerplate Template?](#-how-to-use-this-boilerplate-template)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [📝 Todos](#-todos)
- [🤝 License](#-license)

## ⛓️ What Is Included and What Is That?

| Library                                                                         | Version                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Axios](https://axios-http.com/)                                                | ![Axios](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/axios?label=)                                   | A very helpful promise-based HTTP client for the browser and Node.js. Can't wait until I confuse myself with the interceptors                                                                                                                                                                                                |
| [Eslint](https://eslint.org/)                                                   | ![Eslint](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/dev/eslint?label=)                             | Getting scolded by linters never gets old and always gets on your nerves. Yeah, you shouldn't ignore them.                                                                                                                                                                                                                   |
| [Pinia](https://pinia.vuejs.org/)                                               | ![Pinia](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/pinia?label=)                                   | The Vue state management library for sharing a state across components or pages. Just remember not to put everything on a flat global state file, it's not fun.                                                                                                                                                              |
| [Prettier](https://prettier.io/)                                                | ![Prettier](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/dev/prettier?label=)                         | Code formatter for consistent code style and to stop bickering with fellow FE colleagues                                                                                                                                                                                                                                     |
| [Tailwind CSS](https://tailwindcss.com/)                                        | ![Tailwind%20CSS](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/tailwindcss?label=)                    | The most popular utility-first CSS framework that's very easy and intuitive to use. But unfortunately it will often create an ugly CSS class train and forget that you can make a reusable clean custom CSS class.                                                                                                           |
| [Unhead](https://unhead.unjs.io/)                                               | ![Unhead](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/@unhead/vue?label=)                            | Reactive head tag manager for Vue for handling search engine SEO. Is it proven? You tell me.                                                                                                                                                                                                                                 |
| [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)      | ![unplugin-auto-import](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/dev/unplugin-auto-import?label=) | Used for auto import Vue APIs (so you don't need to write `import { ref } from 'vue'`) and everything inside `\utils\` folder. The 'util' suffix on each exported variable / function helps you avoid wondering where the hell these code comes from.                                                                        |
| [Vee Validate](https://vee-validate.logaretm.com/v4/)                           | ![Vee%20Validate](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/vee-validate?label=)                   | The most popular Vue validation library with documentation that insists on giving you a tutorial using Option API first. Oh, and guess what? The documentation is confusing too!                                                                                                                                             |
| [Vue Router](https://router.vuejs.org/)                                         | ![Vue%20Router](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/vue-router?label=)                       | Expressive, configurable and convenient routing for Vue.js. Expressive?                                                                                                                                                                                                                                                      |
| [VueUse](https://vueuse.org/)                                                   | ![VueUse](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/@vueuse/core?label=)                           | The Swiss Army Knife of Vue composition utilities with confusing documentation.                                                                                                                                                                                                                                              |
| [yup](https://github.com/jquense/yup)                                           | ![yup](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/yup?label=)                                       | Yup, I kinda understand what this is for. Instead of writing regex manually for form validation, you can use yup's methods and chain them. Yup, it's kinda interesting.                                                                                                                                                      |
| [Tanstack Query](https://tanstack.com/query/latest/docs/framework/vue/overview) | ![@tanstack/vue-query](https://img.shields.io/github/package-json/dependency-version/roy-margasa/YAVBT/@tanstack/vue-query?label=)       | I'm pretty late for this Tanstack party. It's so incredibly useful, especially for trying to handle data tables. You can manage what to cache, when to fetch, and other neat features. The only downside is that it needs quite a lot of configs at first. The documentation is good and easy to understand, what a delight! |

## 🔝 Top 8 VueUse composables

- [`onClickOutside`](https://vueuse.org/core/onClickOutside/) - Very useful for dropdown or modal
- [`useClipboard`](https://vueuse.org/core/useClipboard/#useclipboard) - Reactive Clipboard API
- [`useDateFormat`](https://vueuse.org/shared/useDateFormat/#usedateformat) - simple date formatting
- [`useDebounceFn`](https://vueuse.org/shared/useDebounceFn/#usedebouncefn) - Debounce execution of a function for preventing repeat execution on repeat clicks
- [`useEventListener`](https://vueuse.org/core/useEventListener/) - Automatically remove event listener on unmounted
- [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/#uselocalstorage) - Reactive localStorage
- [`useBreakpoints`](https://vueuse.org/core/useBreakpoints/#usebreakpoints) - Reactive viewport breakpoints
- [`useTimeoutFn`](https://vueuse.org/shared/useTimeoutFn/#usetimeoutfn) - Auto clean up timeout

## 📂 Project Structure

```plaintext
YAVBT/
├── src/
│   ├── assets/                       # Static assets
│   │   ├── css/
│   │   │   └── style.css             # Add new css files and then import them into this file
│   │   └── images/
│   ├── components/                   # Reusable Vue components
│   │   └── example/                  # Example components (remove this folder)
│   ├── composables/                  # Reusable composition functions
│   │   └── example/                  # Example composable (remove this folder)
│   ├── constants/                    # Application constants
│   │   └── example/                  # Example for constant (remove this folder)
│   ├── plugins/                      # Vue plugin configuration
│   │   ├── _shared/                  # Shared helpers for plugins
│   │   ├── 1.router/                 # Vue Router configuration
│   │   ├── 2.pinia/                  # Pinia configuration
│   │   ├── others/                   # Other plugin configurations
│   │   ├── index.ts                  # Finds and registers plugins automatically
│   │   └── README.md                 # Plugin folder documentation
│   ├── navigation                    # Vue Router configuration
│   │   ├── example.ts                # Example route config (remove this)
│   │   └── routes.ts                 # Import the routing files here
│   ├── stores/                       # Pinia state management
│   │   └── example/                  # Example for how to write Pinia (remove this folder)
│   ├── types/                        # TypeScript type definitions
│   │   └── example/                  # Example for how to typing API response (remove this folder)
│   ├── utils/                        # Utility functions (auto-imported)
│   │   └── ExtensionCheck.ts         # Example for utility (remove this if not necessary)
│   ├── views/                        # Page components
│   │   ├── BoilerplateExamples.vue   # (remove this)
│   │   └── HelloWorld.vue            # (remove this)
│   ├── App.vue                       # Root component
│   ├── auto-imports.d.ts             # Auto-import type definitions (auto generated)
│   └── main.ts                       # Application entry point
├── public/
├── index.html                        # HTML entry point
├── package.json
├── CHANGELOG.md
└── README.md
```

### Further Structure for Components Folder

Use Feature-Based (Domain-Driven) for medium to large projects, example: `/src/features/auth/`, `/src/features/products/`, `/src/features/cart/`.

Example:

```plaintext
src/
├── features/
│   └── products/
│       ├── components/
│       │   ├── ProductCard.vue
│       │   └── ProductImage.vue
│       ├── pages/
│       │   ├── ProductDetail.vue
│       │   └── ProductList.vue
│       ├── stores/
│       │   └── productStore.ts
│       ├── composables/
│       │   └── useProductFilters.ts
│       ├── types/
│       │   └── product.ts
│       └── utils/
│           └── formatPrice.ts
├── shared/
│   ├── components/
│   ├── composables/
│   └── utils/
```

Or use Component Type Hierarchy, example: `/src/components/common/`, `/src/components/forms/`, `/src/components/layouts/`

## ❓ How to Use This Boilerplate Template?

### Prerequisites

For this boilerplate, you need [Node Js](https://nodejs.org/en/) version `v24.21.0` and [PNPM](https://pnpm.io/) version `v12.5.1`.

### Installation

Clone this repo and just do a `pnpm install`. Here's the order of what to do:

1. Remove the content of 'views' folder
2. Remove the 'components/example' folder
3. Remove the 'stores/example' folder
4. Remove the 'types/example' folder
5. Remove the 'composables/example' folder
6. Remove the 'router/example.ts' file and its import in 'routes.ts'
7. Remove the content of 'utils' folder
8. Remove the 'constants/example' folder

I will create a Node script in the future to remove these example files. Yeah, that's a good idea.

#### Scripts

Use `pnpm run` to distinguish scripts from the `pnpm` CLI commands.

| Script                | Action                              |
| --------------------- | ----------------------------------- |
| `pnpm install`        | Install the project dependencies    |
| `pnpm run dev`        | Runs the app in development mode    |
| `pnpm run build`      | Builds the application              |
| `pnpm run lint`       | Runs ESLint                         |
| `pnpm run prettier`   | Runs prettier for `src/` folder     |
| `pnpm run type-check` | Runs vue-tsc for checking TS typing |

## 📝 Todos

- [x] add Vue Router beforeEach example
- [x] add layout example
- [x] convert every function to arrow function
- [ ] create a script to 'reset' this template
- [x] sfc example with defineModel and provide / inject
- [ ] test unit
- [x] fix 404 when refreshed from boilerplate-example page
- [x] add link to the source on each example
- [x] add Tanstack Query and example how to use it
- [ ] add a mockup api instead of using availabe public api
- [x] fix the mobile view
- [x] create plugin folder for easier plugin management
- [x] able to change head title
- [x] add github.io page
- [x] add vee validate
- [x] add vueuse localStorage example
- [x] add vueuse onClickOutside example
- [x] add vueuse useDateFormat example
- [x] axios example
- [x] composable example
- [x] display image from assets and public folder
- [x] example for typing
- [x] have example for routing
- [x] how to use this template
- [x] JSDoc (where it needed)
- [x] make utils available globally
- [x] sfc example
- [x] state management example
- [x] use @ for absolute path
- [x] util example

## 🤝 License

This project is licensed under the [MIT](./LICENSE) License.
