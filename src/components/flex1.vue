<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
import arrowRight from "../assets/arrow-right.vue";
</script>

<template>
  <div
    class="h-1/2 rounded-sm commoncard flex flex-col gap-y-2 md:w-1/2 xl:w-full w-full"
  >
    <div class="flex w-full justify-between items-center">
      <img :src="image" class="h-[90px]" alt="" />
      <h1 class="text-2xl text-slate-100">{{ title }}</h1>
    </div>
    <h1 class="text-white text-md my-2">
      {{ description }}
    </h1>
    <div class="w-full flex justify-end mt-2">
      <router-link
        :to="link"
        class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
        >Start Now <arrowRight />
      </router-link>
    </div>
  </div>
</template>
