<script setup lang="ts">
// 📜 CODE BLOCK - init
import { useHead } from '@unhead/vue';
import ExampleComposable from '@/components/example/ExampleComposable.vue';
import ExampleStateManagement from '@/components/example/ExampleStateManagement.vue';
import ExampleDefineModel from '@/components/example/ExampleDefineModel/Parent.vue';
import ExampleAxios from '@/components/example/ExampleAxios.vue';
import ExampleOnClickOutside from '@/components/example/ExampleOnClickOutside.vue';
import ExampleUseLocalStorage from '@/components/example/ExampleUseLocalStorage.vue';
import ExampleUseDateFormat from '@/components/example/ExampleUseDateFormat.vue';
import ExampleAssets from '@/components/example/ExampleAssets.vue';
import ExampleVeeValidate from '@/components/example/ExampleVeeValidate.vue';

// Example for overriding page title
useHead({
  title: 'Boilerplate Examples',
  meta: [
    {
      name: 'description',
      content: 'Some example that can be used as references'
    }
  ]
});
</script>

<template>
  <div class="min-h-screen p-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Boilerplate Examples</h1>

    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-center">
      <ExampleAssets />

      <ExampleComposable />

      <ExampleDefineModel />

      <ExampleStateManagement />

      <ExampleAxios />

      <ExampleVeeValidate />

      <ExampleOnClickOutside />

      <ExampleUseLocalStorage />

      <ExampleUseDateFormat />
    </div>
    <div class="mt-4">
      <RouterLink
        to="/"
        class="px-4 py-2 text-blue-500 rounded w-full inline-block text-center border border-blue-300"
        >Go Back</RouterLink
      >
    </div>
  </div>
</template>
