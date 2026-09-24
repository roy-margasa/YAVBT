import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleAssets from '../ExampleAssets.vue';

describe('ExampleAssets', () => {
  it('renders all the image', () => {
    const wrapper = mount(ExampleAssets);

    const images = wrapper.findAll('img');

    expect(images[0].attributes('alt')).toBe('Image from assets folder');
    expect(images[1].attributes('alt')).toBe('Image from public folder');
  });
});
