import { describe, it, expect } from 'vitest';
import VueRouterPlugin, { router } from '../index.ts';
import routes from '@/navigation/routes.ts';
import type { RouteLocationNormalized } from 'vue-router';

describe('plugins 1.router - index', () => {
  it('installs the router on the app', () => {
    let received: unknown;

    const fakeApp = {
      use(thing: unknown) {
        received = thing;
      }
    };

    VueRouterPlugin(fakeApp as any);

    expect(received).toBe(router);
  });

  it('register every route from routes.ts', () => {
    for (const route of routes) {
      expect(router.hasRoute(route.name)).toBe(true);
    }
  });

  it('scroll the browser viewport to the top of the page', () => {
    const scrollBehaviorReturnedValue = router.options.scrollBehavior!(
      {} as unknown as RouteLocationNormalized,
      {} as unknown as RouteLocationNormalized,
      null
    );

    expect(scrollBehaviorReturnedValue).toEqual({
      top: 0
    });
  });

  it('uses VITE_BASE_URL as the history base', () => {
    const envViteBaseUrl = import.meta.env.VITE_BASE_URL;
    const routerResolveHref = router.resolve('/').href;

    expect(routerResolveHref).toBe(envViteBaseUrl);
  });
});
