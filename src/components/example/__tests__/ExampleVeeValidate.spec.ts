import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleVeeValidate from '../ExampleVeeValidate.vue';

describe('ExampleVeeValidate', () => {
  it('show invalid email error message on composable one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const composableEmailInput = wrapper.find('[data-test="composable-input"]');

    await composableEmailInput.setValue('foo bar');

    // Validation is asynchronous, so wait for Vue to render the error message.
    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="composable-error-message"]').exists()).toBe(true);
    });

    expect(wrapper.get('[data-test="composable-error-message"]').text()).toBe(
      'Email must be valid'
    );
  });

  it('show invalid email error message on component one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const componentEmailInput = wrapper.find('[data-test="component-input"]');

    await componentEmailInput.setValue('foo bar');

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="component-error-message"]').exists()).toBe(true);
    });

    expect(wrapper.get('[data-test="component-error-message"]').text()).toBe('Email must be valid');
  });

  it('show required error message on composable one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const composableSubmitButton = wrapper.find('[data-test="composable-submit-button"]');

    await composableSubmitButton.trigger('submit');

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="composable-error-message"]').exists()).toBe(true);
    });

    const composableErrorMessage = wrapper.get('[data-test="composable-error-message"]');

    expect(composableErrorMessage.text()).toBe('Email is required');
  });

  it('show required error message on component one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const componentSubmitButton = wrapper.find('[data-test="component-submit-button"]');

    await componentSubmitButton.trigger('submit');

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="component-error-message"]').exists()).toBe(true);
    });

    const componentErrorMessage = wrapper.get('[data-test="component-error-message"]');

    expect(componentErrorMessage.text()).toBe('Email is required');
  });

  it('shows the success submitted email message on composable one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const composableEmailInput = wrapper.find('[data-test="composable-input"]');

    await composableEmailInput.setValue('foo@bar.com');

    await wrapper.find('[data-test="composable-form"]').trigger('submit');

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="composable-success-message"]').exists()).toBe(true);
    });

    expect(wrapper.get('[data-test="composable-success-message"]').text()).toBe(
      'Submitted email: foo@bar.com'
    );
  });

  it('shows the success submitted email message on component one', async () => {
    const wrapper = mount(ExampleVeeValidate);

    const componentEmailInput = wrapper.find('[data-test="component-input"]');

    await componentEmailInput.setValue('bar@foo.com');

    await wrapper.find('[data-test="component-form"]').trigger('submit');

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="component-success-message"]').exists()).toBe(true);
    });

    expect(wrapper.get('[data-test="component-success-message"]').text()).toBe(
      'Submitted email: bar@foo.com'
    );
  });
});
