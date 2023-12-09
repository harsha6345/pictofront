<script setup>
import { ref } from "vue";
import footerlink from "./footerlink.vue";
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-pictoblue">
    <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <img src="/images/logo.webp" alt="" class="w-[150px]" />
      </div>

      <p class="mx-auto my-3 max-w-md text-center leading-relaxed text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>

      <ul class="my-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <footerlink footername="About" footref="/about" />
        <footerlink footername="Link" footref="/blogs" />
      </ul>
    </div>
    <h1 class="bg-pictoblue2 text-white text-center py-2">
      © Pictowiz {{ currentYear }} . All rights reserved
    </h1>
  </footer>
</template>
