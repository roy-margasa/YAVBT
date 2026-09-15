import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import { createHead } from '@unhead/vue';
import './assets/css/style.css';
import App from './App.vue';

const app = createApp(App);
registerPlugins(app);

const head = createHead();

app.use(head);

app.mount('#app');
