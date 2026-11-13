import { createHead } from '@unhead/vue/client';
import { currentRouteTitle } from '../_shared/routeMeta';
import { SITE_NAME, DEFAULT_PAGE_DESCRIPTION } from '@/config/site';
import type { App } from 'vue';

const head = createHead();

const headContent = {
  title: () => currentRouteTitle.value,
  titleTemplate: (title?: string) => `${title} | ${SITE_NAME}`,
  meta: [
    {
      name: 'description',
      content: DEFAULT_PAGE_DESCRIPTION
    }
  ]
};

export const routeTitleEntry = head.push(headContent);

watch(currentRouteTitle, () => {
  routeTitleEntry.patch(headContent);
});

// This is useful on a non Vue file
export { head };

export default function (app: App) {
  app.use(head);
}
