import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SimpleNamedSlot from '../SimpleNamedSlot.vue';

describe('SimpleNamedSlot', () => {
  it('renders fallback text when no slot content is passed', () => {
    const wrapper = mount(SimpleNamedSlot);

    expect(wrapper.find('h2').text()).toContain('default slot');
    expect(wrapper.find('h3').text()).toContain('subtitle slot');
  });

  it('renders custom content when slots are provided', () => {
    const wrapper = mount(SimpleNamedSlot, {
      slots: {
        default: '<div>Testing default</div>',
        subtitle: '<p>Testing subtitle</p>'
      }
    });

    expect(wrapper.find('h2').text()).toContain('Testing default');
    expect(wrapper.find('h3').text()).toContain('Testing subtitle');
  });
});
