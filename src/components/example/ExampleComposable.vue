<script setup lang="ts">
// 📜 CODE BLOCK - composable example
import { useColorRange } from '@/composables/example/useColorRange';
const { rangeMin, rangeMax, colorRed, colorGreen, colorBlue, colorValue } = useColorRange();
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>Composable</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleComposable.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>
    <div class="w-2xs rounded p-4 relative" :style="{ 'background-color': colorValue.bg }">
      <p class="text-lg text-center font-bold" :style="{ color: colorValue.text }">rosebud</p>
    </div>
    <div class="flex flex-col gap-2 mt-4">
      <input v-model="colorRed" type="range" :min="rangeMin" :max="rangeMax" />
      <input v-model="colorGreen" type="range" :min="rangeMin" :max="rangeMax" />
      <input v-model="colorBlue" type="range" :min="rangeMin" :max="rangeMax" />
    </div>
  </div>
</template>
