import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import ExampleUseLocalStorage from '../ExampleUseLocalStorage.vue';

describe('ExampleUseLocalStorage', () => {
  const mountAndSave = async () => {
    const wrapper = mount(ExampleUseLocalStorage);
    await wrapper.find('input[type="text"]').setValue('foo bar');
    await wrapper.find('[data-test="saveToLocalStorageButton"]').trigger('click');
    return wrapper;
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('save the value to localStorage', async () => {
    await mountAndSave();

    expect(localStorage.getItem('exampleTextInput')).toBe('foo bar');
  });

  it('show the correct value after refreshing the browser', async () => {
    localStorage.setItem('exampleTextInput', 'some soap');

    const wrapper = mount(ExampleUseLocalStorage);

    await nextTick();

    const input = wrapper.find('input[type="text"]');

    expect((input.element as HTMLInputElement).value).toBe('some soap');
  });

  it('remove the value from the local storage and the input', async () => {
    const wrapper = await mountAndSave();

    const input = wrapper.find('input[type="text"]');
    const removeLocalStorageButton = wrapper.find('[data-test="removeLocalStorageButton"]');

    await removeLocalStorageButton.trigger('click');

    expect((input.element as HTMLInputElement).value).toBe('');
    expect(localStorage.getItem('exampleTextInput')).toBe(null);
  });
});
