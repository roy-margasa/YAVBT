import HelloWorld from '@/views/HelloWorld.vue';
import Boilerplate from '@/views/BoilerplateExamples.vue';

export const example = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      title: 'Hello World!'
    }
  },
  {
    path: '/boilerplate-examples',
    name: 'BoilerplateExamples',
    component: Boilerplate,
    meta: {
      title: 'Boilerplate Examples'
    }
  }
];
