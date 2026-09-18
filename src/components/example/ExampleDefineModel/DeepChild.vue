<script setup lang="ts">
import { fooCounterKey, barCounterKey } from './keys';

// notice that there are no props were passed down for this
const fooCounter = inject(fooCounterKey, ref(0));
const barCounter = inject(barCounterKey, ref(0));
</script>

<template>
  <div class="rounded-lg p-2 border border-stone-300">
    <p class="mb-1 text-sm text-center">Deep Child</p>
    <p class="mb-2 text-center">Foo: {{ fooCounter }} - Bar: {{ barCounter }}</p>
  </div>
</template>
