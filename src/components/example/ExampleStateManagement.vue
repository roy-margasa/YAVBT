<script setup lang="ts">
// 📜 CODE BLOCK - state management example
import { useQuoteStore } from '@/stores/example/quote';
const quoteStore = useQuoteStore();
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>Pinia</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleStateManagement.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>
    <input
      v-model="quoteStore.quote"
      type="text"
      class="border border-gray-300 rounded px-2 py-1 w-80"
    />
    <input
      v-model="quoteStore.author"
      type="text"
      class="border border-gray-300 rounded px-2 py-1 w-80 mt-2"
    />
    <p class="mt-4 text-xs">After the input value changed, checkback the hello world page</p>
  </div>
</template>
