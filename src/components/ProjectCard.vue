<template>
  <article
    class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
  >
    <div class="rounded-[10px] bg-white p-4 dark:bg-gray-900 sm:p-6">
      <time
        datetime="2022-10-10"
        class="block text-xs text-gray-500 dark:text-gray-400 mt-1"
      >
        {{ date }}
      </time>

      <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
        {{ title }}
      </h3>

      <p class="text-white mt-1">
        {{ excerpt }}
      </p>
      <div class="mt-4 flex flex-wrap gap-1">
        <span
          class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
        >
          {{ type }}
        </span>
      </div>

      <div class="flex justify-end">
        <router-link
          :to="projectlink"
          class="text-white bg-pictored rounded-md py-1 px-2 mt-2"
          >Read more</router-link
        >
      </div>
    </div>
  </article>
</template>

<script setup>
const projectProps = defineProps({
  title: {
    type: String,
    required: true,
  },

  type: {
    type: Number,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
  },

  excerpt: {
    type: String,
    required: true,
  },
});

const projectlink = `/projects/${projectProps.slug}`;
</script>
