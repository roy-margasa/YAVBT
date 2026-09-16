<script setup lang="ts"></script>

<template>
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>Example Images</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleAssets.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>
    <div>
      <p class="text-sm">Image from assets folder</p>
      <img
        src="@/assets/images/red-panda-asset.webp"
        alt="Image from assets folder"
        class="mt-2 w-32 block mx-auto object-contain"
      />
    </div>
    <div class="mt-4">
      <p class="text-sm">Image from public folder</p>
      <img
        src="/red-panda-public.jpg"
        alt="Image from public folder"
        class="mt-2 w-32 block mx-auto object-contain"
      />
    </div>
  </div>
</template>
