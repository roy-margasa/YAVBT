import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import ExampleStateManagement from '../ExampleStateManagement.vue';
import HelloWorld from '@/views/HelloWorld.vue';
import { useQuoteStore } from '@/stores/example/quote.ts';

describe('ExampleStateManagement', () => {
  it("displays the store's default quote and author values", () => {
    const pinia = createPinia();
    const store = useQuoteStore(pinia);
    const wrapper = mount(ExampleStateManagement, { global: { plugins: [pinia] } });

    expect((wrapper.find("[data-test='quote-input']").element as HTMLInputElement).value).toBe(
      store.quote
    );
    expect((wrapper.find("[data-test='author-input']").element as HTMLInputElement).value).toBe(
      store.author
    );
  });

  it("updates the quote store's quote and author values when the inputs change", async () => {
    const pinia = createPinia();
    const store = useQuoteStore(pinia);
    const wrapper = mount(ExampleStateManagement, { global: { plugins: [pinia] } });

    const quoteInput = wrapper.find("[data-test='quote-input']");
    const authorInput = wrapper.find("[data-test='author-input']");

    await quoteInput.setValue('foo');
    await authorInput.setValue('bar');

    expect(store.quote).toBe('foo');
    expect(store.author).toBe('bar');
  });

  it('reflects the updated quote and author in HelloWorld', async () => {
    const pinia = createPinia();
    const exampleWrapper = mount(ExampleStateManagement, { global: { plugins: [pinia] } });
    const helloWorldWrapper = mount(HelloWorld, {
      global: { plugins: [pinia], stubs: ['router-link'] }
    });

    const quoteInput = exampleWrapper.find("[data-test='quote-input']");
    const authorInput = exampleWrapper.find("[data-test='author-input']");

    // the await is needed because the DOM render is not immediate (or is an async)
    await quoteInput.setValue('foo');
    await authorInput.setValue('bar');

    const quoteText = helloWorldWrapper.find('h2').text();
    const authorText = helloWorldWrapper.find('h3').text();

    expect(quoteText).toBe('foo');
    expect(authorText).toBe('bar');
  });
});
