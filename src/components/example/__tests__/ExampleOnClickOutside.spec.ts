import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import ExampleOnClickOutside from '../ExampleOnClickOutside.vue';

describe('ExampleOnClickOutside', () => {
  it('shows the initial message', () => {
    const wrapper = mount(ExampleOnClickOutside);

    expect(wrapper.find('p').text()).toBe('Waiting for click...');
  });

  it('change the message by clicking the target button', async () => {
    const wrapper = mount(ExampleOnClickOutside);

    const buttons = wrapper.findAll('button');

    await buttons[0].trigger('click');

    expect(wrapper.find('p').text()).toBe('Button clicked!');
  });

  it('change the message by clicking outside the target button', async () => {
    const wrapper = mount(ExampleOnClickOutside, { attachTo: document.body });

    // From Claude:
    // onClickOutside listens for 'click' on `window` to detect outside clicks (it also
    // listens for 'pointerdown', but that one only tracks internal state — it never
    // calls the handler on its own). bubbles:true lets the event travel up to where
    // the listener actually lives, since we're dispatching from document.body.
    // Source: https://github.com/vueuse/vueuse/blob/main/packages/core/onClickOutside/index.ts
    document.body.dispatchEvent(new Event('click', { bubbles: true }));

    // From Claude:
    // Vue defers actual DOM re-rendering to the next "tick" rather than updating
    // synchronously. Since we're about to read rendered text from the DOM, we wait
    // for that render to flush first, or the assertion could read stale output.
    await nextTick();

    expect(wrapper.find('p').text()).toBe('Clicked outside!');
  });

  it("doesn't change the message by clicking the ignored target button", async () => {
    // From Claude:
    // `onClickOutside` listens for clicks on the real `window`, not on this component.
    // By default, mount() renders the component in a detached DOM tree that's never
    // actually connected to the page — so a click inside it can bubble up through its
    // own parents, but has nowhere further to go, and never reaches `window` at all.
    // `attachTo: document.body` connects the component to the real document so clicks
    // can bubble all the way up to where the listener actually lives.
    // Without it, this test would pass even if onClickOutside were completely broken,
    // since the click never reaches anything, "nothing happened" looks identical
    // whether the ignore logic worked or the event just never arrived.
    const wrapper = mount(ExampleOnClickOutside, { attachTo: document.body });

    const buttons = wrapper.findAll('button');

    await buttons[1].trigger('click');

    expect(wrapper.find('p').text()).toBe('Waiting for click...');
  });
});
