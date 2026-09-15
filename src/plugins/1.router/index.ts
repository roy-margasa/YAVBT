import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/navigation/routes.ts';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes
});

// This is useful on a non Vue file
export { router };

export default function (app: App) {
  app.use(router);
}
