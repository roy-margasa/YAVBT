vite https://vite.dev/guide/features#glob-import
const modules = import.meta.glob('./\*/index.ts');

src/plugins/
├── index.ts
├── 1.router/
│ └── index.ts
├── 2.pinia/
│ └── index.ts
└── others/
└── index.ts
