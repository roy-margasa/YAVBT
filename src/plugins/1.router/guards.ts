import { SITE_NAME, DEFAULT_PAGE_TITLE } from '@/config/site';
import type { Router, RouteLocationNormalized } from 'vue-router';

export const setupGuards = (router: Router) => {
  router.beforeEach((to: RouteLocationNormalized) => {
    const title = to.meta.title ?? DEFAULT_PAGE_TITLE;

    document.title = `${title} | ${SITE_NAME}`;
  });
};
