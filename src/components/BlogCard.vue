<template>
  <article
    class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
  >
    <div class="rounded-[10px] bg-white px-2 py-1 dark:bg-gray-900 sm:p-6">
      <img :src="thumbnail" alt="" class="rounded-md" />
      <time
        datetime="2022-10-10"
        class="block text-xs text-gray-500 dark:text-gray-400 mt-4"
      >
        {{ date }}
      </time>

      <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
        {{ title }}
      </h3>
      <div class="flex justify-end">
        <router-link
          :to="bloglink"
          class="text-white bg-pictored rounded-md py-1 px-2 mt-2"
          >Read more</router-link
        >
      </div>
    </div>
  </article>
</template>

<script setup>
const blogprops = defineProps({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const bloglink = `/blogs/${blogprops.slug}`;
</script>
