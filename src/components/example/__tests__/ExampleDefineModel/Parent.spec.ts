import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Parent from '../../ExampleDefineModel/Parent.vue';

describe('ExampleDefineModel', () => {
  it('increment the value from child component', async () => {
    const wrapper = mount(Parent);

    const buttonIncrementFoo = wrapper.find('[data-test="increment-foo"]');

    expect(wrapper.find('[data-test="increment-foo-counter"]').text()).toBe('Foo: 0');

    await buttonIncrementFoo.trigger('click');

    expect(wrapper.find('[data-test="increment-foo-counter"]').text()).toBe('Foo: 1');
  });

  it('increments the bar counter via an emitted event', async () => {
    const wrapper = mount(Parent);

    const buttonIncrementBar = wrapper.find('[data-test="increment-bar"]');

    expect(wrapper.find('[data-test="increment-bar-counter"]').text()).toBe('Bar: 0');

    await buttonIncrementBar.trigger('click');

    expect(wrapper.find('[data-test="increment-bar-counter"]').text()).toBe('Bar: 1');
  });

  it('shows the correct value on the deep child', async () => {
    const wrapper = mount(Parent);

    const buttonIncrementFoo = wrapper.find('[data-test="increment-foo"]');
    const buttonIncrementBar = wrapper.find('[data-test="increment-bar"]');

    expect(wrapper.find('[data-test="deep-child-value"]').text()).toBe('Foo: 0 - Bar: 0');

    await buttonIncrementFoo.trigger('click');
    await buttonIncrementBar.trigger('click');

    expect(wrapper.find('[data-test="deep-child-value"]').text()).toBe('Foo: 1 - Bar: 1');
  });
});
