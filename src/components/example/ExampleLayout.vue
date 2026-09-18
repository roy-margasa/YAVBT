<script setup lang="ts">
const props = defineProps<{
  title: string;
  sourceLink: string;
}>();
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>{{ props.title }}</h3>
      <div class="leading-0">
        <a
          :href="sourceLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>

    <slot />
  </div>
</template>
