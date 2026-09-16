import { ref } from 'vue';
import { DEFAULT_PAGE_TITLE } from '@/config/site';

export const currentRouteTitle = ref<string>(DEFAULT_PAGE_TITLE);
