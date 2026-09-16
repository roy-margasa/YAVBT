<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core';

const currentDate = useNow();
const formattedDate = useDateFormat(currentDate, 'YYYY-MM-DD HH:mm:ss');
const formattedLocaleDate = useDateFormat(currentDate, 'dddd, DD MMMM YYYY', {
  locales: 'de-DE'
});
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>useDateFormat + useNow</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleUseDateFormat.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>
    <div class="text-center">
      <p class="text-sm">Current Date:</p>
      {{ currentDate }}
    </div>

    <div class="text-center mt-3">
      <p class="text-sm">Formatted Date:</p>
      {{ formattedDate }}
    </div>

    <div class="text-center mt-3">
      <p class="text-sm">Formatted Date (Deutsch):</p>
      {{ formattedLocaleDate }}
    </div>
  </div>
</template>
