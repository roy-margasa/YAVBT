<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const target = useTemplateRef('target');
const ignoreTarget = useTemplateRef('ignoreTarget');
const textDisplay = ref('Waiting for click...');

const onClick = () => {
  textDisplay.value = 'Button clicked!';
};

onClickOutside(
  target,
  () => {
    textDisplay.value = 'Clicked outside!';
  },
  { ignore: [ignoreTarget] }
);
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>onClickOutside</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleOnClickOutside.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>
    <div>
      <div class="flex gap-4 flex-wrap justify-center mt-2">
        <button
          ref="target"
          class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer hover:text-emerald-700"
          @click="onClick"
        >
          Click me
        </button>
        <button
          ref="ignoreTarget"
          class="rounded border px-2 py-3 border-slate-500 text-slate-500 text-sm leading-1 cursor-pointer hover:text-slate-700"
        >
          I'm ignored
        </button>
      </div>
      <p class="mt-4 text-center">{{ textDisplay }}</p>
    </div>
  </div>
</template>
