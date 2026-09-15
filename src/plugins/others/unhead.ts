import { createHead } from '@unhead/vue/client';
import { TemplateParamsPlugin, AliasSortingPlugin } from '@unhead/vue/plugins';
import type { App } from 'vue';

const head = createHead({
  plugins: [TemplateParamsPlugin, AliasSortingPlugin]
});

head.push({
  titleTemplate: '%siteName %separator %s',
  title: 'YAVBT',
  templateParams: {
    separator: '|',
    siteName: 'Default site name here'
  },
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
