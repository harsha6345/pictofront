<template>
  <div class="px-3 py-4">
    <div class="commoncard w-fit flex gap-x-2">
      <div
        class="rounded-full p-2 bg-pictoblue2 flex-grow-0 flex-shrink-0 aspect-square"
      >
        <img
          src="https://picsum.photos/100/100/?random"
          class="rounded-full"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <h1 class="text-lg text-white">Hello world</h1>
        <h1 class="text-lg text-white">Hello world</h1>

        <h1 class="text-lg text-white">Hello world</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const RoadmapData = ref({});
</script>
