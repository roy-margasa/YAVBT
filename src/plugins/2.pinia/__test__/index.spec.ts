import { describe, it, expect } from 'vitest';
import PiniaPlugin, { pinia } from '../index.ts';

describe('plugins 2.pinia - index', () => {
  it('installs the pinia on the app', () => {
    let received: unknown;

    const fakeApp = {
      use(param: unknown) {
        received = param;
      }
    };

    PiniaPlugin(fakeApp as any);

    expect(received).toBe(pinia);
  });
});
