import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/navigation/routes.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes
});

export default function (app: App) {
  app.use(router);
}
