<script setup lang="ts">
import DeepChild from './DeepChild.vue';

const fooCounter = defineModel<number>('fooCounter', { default: 0 });
const barCounter = defineModel<number>('barCounter');

const incrementMain = () => {
  fooCounter.value++;
};

const emit = defineEmits<{
  (e: 'incrementBar'): void;
}>();
</script>

<template>
  <div>
    <div class="text-center mb-2">
      <p class="mb-1">Foo: {{ fooCounter }}</p>
      <button
        class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer hover:text-emerald-700"
        @click="incrementMain"
      >
        Increment from Child
      </button>
    </div>

    <div class="text-center mb-6">
      <p class="mb-1">Bar: {{ barCounter }}</p>
      <button
        class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer hover:text-emerald-700"
        @click="$emit('incrementBar')"
      >
        Increment from Parent (emit)
      </button>
    </div>

    <DeepChild />
  </div>
</template>
