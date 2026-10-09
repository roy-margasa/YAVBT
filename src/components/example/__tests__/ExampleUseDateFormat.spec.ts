import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleUseDateFormat from '../ExampleUseDateFormat.vue';

describe('ExampleUseDateFormat', () => {
  const frozenDateTime = new Date('2012-12-31T23:59:00');
  // From Claude:
  // Vitest fakes the global clock here, so any code calling `new Date()` or
  // `Date.now()` (including useNow() internally) returns our fixed date instead
  // of the real current time — otherwise this test would be non-deterministic,
  // same problem as unseeded Math.random().
  //
  // Scope: by default, Vitest runs every test FILE in its own isolated worker,
  // so this fake time can't leak into other spec files. It CAN leak into every
  // other test in THIS same file though, since they all share one process and
  // run sequentially — hence the beforeEach/afterEach pair, to guarantee cleanup
  // even if a test fails partway through.
  //
  // Docs: https://vitest.dev/guide/mocking/dates
  //       https://vitest.dev/guide/improving-performance (Test Isolation section)
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(frozenDateTime);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('render the correct raw date, formatted date, and formatted locale date', () => {
    const wrapper = mount(ExampleUseDateFormat);

    const strings = wrapper.findAll('span');

    expect(strings[0].text()).toBe(frozenDateTime.toString());
    expect(strings[1].text()).toBe('2012-12-31 23:59:00');
    expect(strings[2].text()).toBe('Montag, 31 Dezember 2012');
  });
});
