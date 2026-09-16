import { currentRouteTitle } from '../_shared/routeMeta';
import { DEFAULT_PAGE_TITLE } from '@/config/site';
import type { Router, RouteLocationNormalized } from 'vue-router';

export const setupGuards = (router: Router) => {
  router.beforeEach((to: RouteLocationNormalized) => {
    currentRouteTitle.value = (to.meta.title as string | undefined) ?? DEFAULT_PAGE_TITLE;
  });
};
