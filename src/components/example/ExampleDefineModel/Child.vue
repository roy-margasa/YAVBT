<script setup lang="ts">
import DeepChild from './DeepChild.vue';

const fooCounter = defineModel<number>('fooCounter', { default: 0 });

const incrementFoo = () => {
  fooCounter.value++;
};

const emit = defineEmits<{
  (e: 'incrementBar'): void;
}>();

const props = defineProps<{
  barCounter: number;
}>();
</script>

<template>
  <div>
    <div class="text-center mb-2">
      <p data-test="increment-foo-counter" class="mb-1">Foo: {{ fooCounter }}</p>
      <button
        data-test="increment-foo"
        class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer hover:text-emerald-700"
        @click="incrementFoo"
      >
        Increment from Child
      </button>
    </div>

    <div class="text-center mb-6">
      <p data-test="increment-bar-counter" class="mb-1">Bar: {{ props.barCounter }}</p>
      <button
        data-test="increment-bar"
        class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer hover:text-emerald-700"
        @click="emit('incrementBar')"
      >
        Increment from Parent (emit)
      </button>
    </div>

    <DeepChild />
  </div>
</template>
