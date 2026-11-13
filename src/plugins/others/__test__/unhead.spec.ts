import { describe, it, expect, vi } from 'vitest';
import UnheadPlugin, { head } from '../unhead.ts';
import { currentRouteTitle } from '@/plugins/_shared/routeMeta.ts';
import { SITE_NAME, DEFAULT_PAGE_DESCRIPTION } from '@/config/site.ts';

describe('plugins Unhead', () => {
  it('installs Unhead on the app', () => {
    let received: unknown;

    const fakeApp = {
      use(param: unknown) {
        received = param;
      }
    };

    UnheadPlugin(fakeApp as any);

    expect(received).toBe(head);
  });

  it('uses the current route meta title as the page title followed by the default site name', async () => {
    currentRouteTitle.value = 'Foo Bar';

    await vi.waitFor(() => expect(document.title).toBe(`Foo Bar | ${SITE_NAME}`));
  });

  it.only('sets the default page description', () => {
    const metaDescriptionContent = (
      document.querySelector('meta[name="description"]') as HTMLElement
    )?.getAttribute('content');

    expect(metaDescriptionContent).toBe(DEFAULT_PAGE_DESCRIPTION);
  });
});
