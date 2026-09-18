<script setup lang="ts"></script>

<template>
  <div>
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
