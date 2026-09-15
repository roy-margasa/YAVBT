import { createHead } from '@unhead/vue/client';
import { DEFAULT_PAGE_DESCRIPTION } from '@/config/site';
import type { App } from 'vue';

const head = createHead();

head.push({
  meta: [
    {
      name: 'description',
      content: DEFAULT_PAGE_DESCRIPTION
    }
  ]
});

export default function (app: App) {
  app.use(head);
}
