<script setup lang="ts">
// 📜 CODE BLOCK - state management example
import { useQuoteStore } from '@/stores/example/quote';
const quoteStore = useQuoteStore();
</script>

<template>
  <div class="text-center">
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
