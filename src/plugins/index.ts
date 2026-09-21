import type { App } from 'vue';

export const registerPlugins = (app: App) => {
  // https://vite.dev/guide/features#glob-import
  const modules = import.meta.glob<{ default: (app: App) => void }>(
    ['./*/index.{ts,js}', './others/*.{ts,js}'],
    { eager: true }
  );

  const modulePaths = Object.entries(modules).sort(([a], [b]) => a.localeCompare(b));

  modulePaths.forEach(([, pluginImportModule]) => {
    pluginImportModule.default?.(app);
  });
};
