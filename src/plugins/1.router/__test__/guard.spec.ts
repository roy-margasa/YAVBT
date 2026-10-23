import { describe, it, expect } from 'vitest';
import { setupGuards } from '../guards';
import { currentRouteTitle } from '@/plugins/_shared/routeMeta';
import { DEFAULT_PAGE_TITLE } from '@/config/site';
import type { Router, RouteLocationNormalized } from 'vue-router';

describe('plugins 1.router - setupGuards', () => {
  it('use value from to.meta.title', () => {
    let capturedCallback!: (to: RouteLocationNormalized) => void;

    const fakeRouter = {
      beforeEach: (cb: (to: RouteLocationNormalized) => void) => {
        capturedCallback = cb;
      }
    } as unknown as Router;

    setupGuards(fakeRouter);

    capturedCallback({
      meta: {
        title: 'Foo Bar'
      }
    } as unknown as RouteLocationNormalized);

    expect(currentRouteTitle.value).toBe('Foo Bar');
  });

  it('use default value if to.meta.title does not exist', () => {
    let capturedCallback!: (to: RouteLocationNormalized) => void;

    const fakeRouter = {
      beforeEach: (cb: (to: RouteLocationNormalized) => void) => {
        capturedCallback = cb;
      }
    } as unknown as Router;

    setupGuards(fakeRouter);

    capturedCallback({ meta: {} } as unknown as RouteLocationNormalized);

    expect(currentRouteTitle.value).toBe(DEFAULT_PAGE_TITLE);
  });
});
