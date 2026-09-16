import { createPinia } from 'pinia';
import type { App } from 'vue';

const pinia = createPinia();

export default function (app: App) {
  app.use(pinia);
}
