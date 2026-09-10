<script setup lang="ts">
// 📜 CODE BLOCK - init
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import type { DogApiResponse } from '@/types/example/api';

// 📜 CODE BLOCK - API fetch
// By default, useQuery executes on component mount
const {
  isPending: isPendingWoof,
  isFetching: isFetchingWoof,
  isError: isErrorFetchWoof,
  data: dataWoof,
  error: errorWoof
} = useQuery({
  queryKey: ['woof'],
  queryFn: () => axios.get<DogApiResponse>('https://random.dog/woof.json'),
  select: (res) => res.data.url,
  refetchOnWindowFocus: true
});

// 📜 CODE BLOCK - rendering
const isRendering = ref<boolean>(true);

const isLoadingMedia = computed(
  () => isPendingWoof.value || isFetchingWoof.value || isRendering.value
);

const mediaType = computed(() => utilMediaCheck(dataWoof.value));

function renderingIsDone() {
  isRendering.value = false;
}
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="border-b pb-1 mb-4">Axios + Tanstack Query</h3>
    <div class="w-full flex flex-col items-center">
      <div v-if="isLoadingMedia" class="w-full animate-pulse">
        <div class="w-full block h-30 bg-gray-300"></div>
      </div>
      <img
        v-if="mediaType === 'image'"
        v-show="!isLoadingMedia"
        @load="renderingIsDone"
        :src="dataWoof"
        alt="Random dog"
        class="h-40"
      />
      <video
        v-else-if="mediaType === 'video'"
        v-show="!isLoadingMedia"
        @loadeddata="renderingIsDone"
        :src="dataWoof"
        controls
        class="h-40"
        autoplay
      />
      <p v-if="isErrorFetchWoof" class="text-xs mt-1 text-red-500">
        {{ errorWoof?.message }}
      </p>
      <p v-if="mediaType" class="text-xs mt-1">type: {{ mediaType }}</p>
    </div>
  </div>
</template>
