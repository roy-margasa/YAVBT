import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
import ExampleAxios from '../ExampleAxios.vue';
import axios from 'axios';

// From Claude:
// This swaps every method on the real axios module (.get, .post, etc.) for an empty mock function automatically,
// nothing hits the real network.
vi.mock('axios');

describe('ExampleAxios', () => {
  it('show the loading element while waiting the initial fetch', () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        fileSizeBytes: 137760,
        url: 'https://random.dog/0f476473-2d8b-415e-b944-483768418a95.jpg'
      }
    });

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    });

    const wrapper = mount(ExampleAxios, {
      global: { plugins: [[VueQueryPlugin, { queryClient }]] }
    });

    expect(wrapper.find('[data-test="loading-skeleton"]').exists()).toBe(true);
  });

  it('show the image and the file format', async () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        fileSizeBytes: 137760,
        url: 'https://random.dog/0f476473-2d8b-415e-b944-483768418a95.jpg'
      }
    });

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    });

    const wrapper = mount(ExampleAxios, {
      global: { plugins: [[VueQueryPlugin, { queryClient }]] }
    });

    await vi.waitFor(() => {
      expect(wrapper.find('img').exists()).toBe(true);
    });

    // jsdom doesn’t actually load real images over the network, so the load event
    // @load="renderingIsDone" depends on never fires naturally in tests.
    await wrapper.find('img').trigger('load');

    expect(wrapper.find('[data-test="loading-skeleton"]').exists()).toBe(false);

    expect(wrapper.find('[data-test="media-type-text"]').text()).toBe('type: image');
  });

  it('show the error message on fetch fail', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('Network Error'));

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    });

    const wrapper = mount(ExampleAxios, {
      global: { plugins: [[VueQueryPlugin, { queryClient }]] }
    });

    await vi.waitFor(() => {
      expect(wrapper.find('[data-test="error-message"]').exists()).toBe(true);
    });

    expect(wrapper.find('[data-test="error-message"]').text()).toBe('Network Error');
  });
});
