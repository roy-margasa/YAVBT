import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import './assets/css/style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // how long data is considered "fresh" after a successful fetch (in this case 60s)
      retry: 1, // how many retry for failed API fetch
      refetchOnWindowFocus: false // disable fetching new dog on lost focus
    }
  }
});

app.use(head);
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin, { queryClient });

app.mount('#app');
