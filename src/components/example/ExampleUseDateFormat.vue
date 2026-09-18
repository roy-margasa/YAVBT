<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core';

const currentDate = useNow();
const formattedDate = useDateFormat(currentDate, 'YYYY-MM-DD HH:mm:ss');
const formattedLocaleDate = useDateFormat(currentDate, 'dddd, DD MMMM YYYY', {
  locales: 'de-DE'
});
</script>

<template>
  <div>
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
