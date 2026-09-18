<script setup lang="ts">
// 📜 CODE BLOCK - init
import { useHead } from '@unhead/vue';
import ExampleLayout from '@/components/example/ExampleLayout.vue';
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
      <ExampleLayout
        title="Image Assets"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleAssets.vue"
      >
        <ExampleAssets />
      </ExampleLayout>

      <ExampleLayout
        title="Composable"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleComposable.vue"
      >
        <ExampleComposable />
      </ExampleLayout>

      <ExampleLayout
        title="defineModel + Provide / Inject"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleDefineModel/Parent.vue"
      >
        <ExampleDefineModel />
      </ExampleLayout>

      <ExampleLayout
        title="Pinia"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleStateManagement.vue"
      >
        <ExampleStateManagement />
      </ExampleLayout>

      <ExampleLayout
        title="Axios + Tanstack Vue Query"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleAxios.vue"
      >
        <ExampleAxios />
      </ExampleLayout>

      <ExampleLayout
        title="Vee Validate + Yup"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleVeeValidate.vue"
      >
        <ExampleVeeValidate />
      </ExampleLayout>

      <ExampleLayout
        title="Vueuse onClickOutside"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleOnClickOutside.vue"
      >
        <ExampleOnClickOutside />
      </ExampleLayout>

      <ExampleLayout
        title="Vueuse useLocalStorage"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleUseLocalStorage.vue"
      >
        <ExampleUseLocalStorage />
      </ExampleLayout>

      <ExampleLayout
        title="Vueuse useDateFormat + useNow"
        source-link="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleUseDateFormat.vue"
      >
        <ExampleUseDateFormat />
      </ExampleLayout>
    </div>

    <div class="mt-4">
      <RouterLink
        to="/"
        class="px-4 py-2 text-white rounded-lg w-full inline-block text-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >Go Back</RouterLink
      >
    </div>
  </div>
</template>
