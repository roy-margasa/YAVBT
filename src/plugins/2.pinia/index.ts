import { createPinia } from 'pinia';
import type { App } from 'vue';

const pinia = createPinia();

// This is useful on a non Vue file
export { pinia };

export default function (app: App) {
  app.use(pinia);
}
