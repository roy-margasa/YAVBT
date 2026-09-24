import { mergeConfig, defineConfig, coverageConfigDefaults } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  // TODO: Need explanation for this viteConfig
  viteConfig({ mode: 'test', command: 'serve' }),
  defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        include: ['src/**/*.{ts,vue}'],
        exclude: [
          ...coverageConfigDefaults.exclude,
          'src/config/**/*',
          'src/types/**/*',
          'src/assets/**/*',
          'src/navigation/**/*'
        ]
      }
    }
  })
);
