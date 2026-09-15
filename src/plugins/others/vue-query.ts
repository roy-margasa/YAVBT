import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import type { App } from 'vue';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // how long data is considered "fresh" after a successful fetch (in this case 60s)
      retry: 1, // how many retry for failed API fetch
      refetchOnWindowFocus: false // disable fetching new dog on lost focus
    }
  }
});

// This is useful on a non Vue file
export { queryClient };

export default function (app: App) {
  app.use(VueQueryPlugin, { queryClient });
}
