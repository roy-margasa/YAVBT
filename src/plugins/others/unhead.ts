import { createHead } from '@unhead/vue/client';
import type { App } from 'vue';

const head = createHead();

head.push({
  meta: [
    {
      name: 'description',
      content: 'Default site description here'
    }
  ]
});

export default function (app: App) {
  app.use(head);
}
