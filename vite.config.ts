import { readFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';

const packageJson = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)), 'utf-8')
) as { version: string };

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // TODO: Need explanation for this loadEnv
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_URL || '/YAVBT/', // set base path for GitHub Pages deployment
    plugins: [
      vue(),
      tailwindcss(),
      AutoImport({
        imports: ['vue'], // auto-import ref, computed, etc.
        dirs: ['src/utils/**/*'], // auto-import anything exported from utils
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      })
    ],
    resolve: {
      alias: {
        // Map "@" to the project root's src directory for cleaner imports.
        // Ref for resolve.alias: https://vite.dev/config/shared-options.html#resolve-alias
        // Ref for fileURLToPath: https://nodejs.org/api/url.html#fileurltopathurl
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version)
    }
  };
});
