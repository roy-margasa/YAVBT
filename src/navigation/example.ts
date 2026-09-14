import HelloWorld from '@/views/HelloWorld.vue';
import Boilerplate from '@/views/BoilerplateExamples.vue';

export const example = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/boilerplate-examples',
    name: 'BoilerplateExamples',
    component: Boilerplate
  }
];