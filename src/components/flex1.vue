<script setup>
const props = defineProps({
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
      <img
        :src="image"
        alt=""
        :class="{
          'h-[70px]': props.title === 'Learn FrontEnd',
          'h-[80px]': props.title === 'Learn Python',
        }"
      />
      <h1 class="text-xl text-slate-100 text-end">{{ props.title }}</h1>
    </div>
    <div class="text-white text-md my-2" v-html="props.description"></div>
    <div class="w-full flex justify-end mt-2">
      <router-link
        :to="link"
        class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
        >Start Now <arrowRight />
      </router-link>
    </div>
  </div>
</template>
