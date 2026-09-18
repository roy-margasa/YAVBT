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
  <div>
    <Child
      v-model:foo-counter="parentFooCounter"
      v-model:bar-counter="parentBarCounter"
      @increment-bar="incrementBar"
    />
  </div>
</template>
