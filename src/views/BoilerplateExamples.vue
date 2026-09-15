<script setup lang="ts">
// 📜 CODE BLOCK - init
import ExampleComposable from '@/components/example/ExampleComposable.vue';
import ExampleStateManagement from '@/components/example/ExampleStateManagement.vue';
import ExampleAxios from '@/components/example/ExampleAxios.vue';
import ExampleOnClickOutside from '@/components/example/ExampleOnClickOutside.vue';
import ExampleUseLocalStorage from '@/components/example/ExampleUseLocalStorage.vue';
import ExampleUseDateFormat from '@/components/example/ExampleUseDateFormat.vue';
import ExampleAssets from '@/components/example/ExampleAssets.vue';
import ExampleVeeValidate from '@/components/example/ExampleVeeValidate.vue';
</script>

<template>
  <div class="min-h-screen p-4">
    <div class="grid grid-flow-row grid-cols-[repeat(auto-fit,360px)] gap-4 justify-center">
      <ExampleAssets />

      <ExampleComposable />

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
