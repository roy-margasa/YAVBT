import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleLayout from '../ExampleLayout.vue';

describe('ExampleLayout', () => {
  it('renders the title, source link, and slot content', () => {
    const wrapper = mount(ExampleLayout, {
      props: {
        title: 'foo bar!',
        sourceLink: 'https://github.com/roy-margasa/YAVBT'
      },
      slots: {
        default: '<p>hee hee</p>'
      }
    });

    expect(wrapper.find('h3').text()).toBe('foo bar!');
    expect(wrapper.find('a').attributes('href')).toBe('https://github.com/roy-margasa/YAVBT');
    expect(wrapper.find('p').text()).toBe('hee hee');
  });
});
