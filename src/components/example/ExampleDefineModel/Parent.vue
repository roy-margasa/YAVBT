<script setup lang="ts">
import Child from './Child.vue';
import { fooCounterKey, barCounterKey } from './keys';

const parentFooCounter = ref(0);
const parentBarCounter = ref(0);

const incrementBar = () => {
  parentBarCounter.value++;
};

provide(fooCounterKey, parentFooCounter);
provide(barCounterKey, parentBarCounter);
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>defineModel + Provide / Inject</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleDefineModel/Parent.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>

    <Child
      v-model:foo-counter="parentFooCounter"
      v-model:bar-counter="parentBarCounter"
      @increment-bar="incrementBar"
    />
  </div>
</template>
