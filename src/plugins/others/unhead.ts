import { createHead } from '@unhead/vue/client';
import { currentRouteTitle } from '../_shared/routeMeta';
import { SITE_NAME, DEFAULT_PAGE_DESCRIPTION } from '@/config/site';
import type { App } from 'vue';

const head = createHead();

export const routeTitleEntry = head.push({
  title: () => currentRouteTitle.value,
  titleTemplate: (title) => `${title} | ${SITE_NAME}`,
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
