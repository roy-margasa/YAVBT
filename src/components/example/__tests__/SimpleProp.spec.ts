import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SimpleProp from '../SimpleProp.vue';

describe('SimpleProp', () => {
  it('Should displays the message', () => {
    const wrapper = mount(SimpleProp, {
      props: {
        msg: 'Parappa The Rapper'
      }
    });

    expect(wrapper.find('h1').text()).toContain('Parappa The Rapper');
  });
});
