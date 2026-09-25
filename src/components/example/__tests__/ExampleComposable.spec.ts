import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleComposable from '../ExampleComposable.vue';

describe('ExampleComposable', () => {
  it('updates the displayed colors when the sliders change', async () => {
    const wrapper = mount(ExampleComposable);

    const sliders = wrapper.findAll('input[type="range"]');

    await sliders[0].setValue(101);
    await sliders[1].setValue(102);
    await sliders[2].setValue(103);

    const textDisplay = wrapper.find('[data-test="text-display"]');

    expect((textDisplay.element as HTMLElement).style.backgroundColor).toBe('rgb(154, 153, 152)');
    expect((textDisplay.element as HTMLElement).querySelector('p')?.style.color).toBe(
      'rgb(101, 102, 103)'
    );
  });
});
