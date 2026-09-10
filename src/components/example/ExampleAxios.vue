<script setup lang="ts">
// 📜 CODE BLOCK - init
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import type { DogApiResponse } from '@/types/example/api';

// 📜 CODE BLOCK - API fetch
// By default, useAsyncState executes on component mount
const {
  state: dogPicture,
  isLoading: isLoadingDog,
  error
} = useAsyncState(async () => {
  const res = await axios.get<DogApiResponse>('https://random.dog/woof.json');
  return res.data.url;
}, '');

const {
  isPending: isPendingWoof,
  isFetching: isFetchingWoof,
  isError: isErrorFetchWoof,
  data: dataWoof,
  error: errorWoof
} = useQuery({
  queryKey: ['woof'],
  queryFn: () => axios.get<DogApiResponse>('https://random.dog/woof.json')
});

// 📜 CODE BLOCK - rendering
const isRendering = ref<boolean>(true);

const isLoadingMedia = computed(() => isLoadingDog.value || isRendering.value);

const mediaType = computed(() => utilMediaCheck(dogPicture.value));

function renderingIsDone() {
  isRendering.value = false;
}
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <h3 class="border-b pb-1 mb-4">Axios + useAsyncState</h3>
    <div class="w-full flex flex-col items-center">
      <div v-if="isLoadingMedia" class="w-full animate-pulse">
        <div class="w-full block h-30 bg-gray-300"></div>
      </div>
      <img
        v-if="mediaType === 'image'"
        v-show="!isLoadingMedia"
        @load="renderingIsDone"
        :src="dogPicture"
        alt="Random dog"
        class="h-40"
      />
      <video
        v-else-if="mediaType === 'video'"
        v-show="!isLoadingMedia"
        @loadeddata="renderingIsDone"
        :src="dogPicture"
        controls
        class="h-40"
        autoplay
      />
      <p v-if="error" class="text-red-500">
        {{ (error as Error).message }}
      </p>
    </div>
  </div>
</template>
