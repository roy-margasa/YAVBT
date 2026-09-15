import type { Router, RouteLocationNormalized } from 'vue-router';

export const setupGuards = (router: Router) => {
  router.beforeEach((to: RouteLocationNormalized) => {
    const siteName = to.meta.siteName ?? 'Default site name here';

    document.title = `${siteName} | YAVBT`;
  });
};
