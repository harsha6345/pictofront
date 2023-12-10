<script setup>
defineProps({
  navname: {
    type: String,
    required: true,
  },
  navref: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link
    :to="navref"
    class="text-white tracking-wider text-lg font-semibold hover:underline hover:decoration-pictored transition-all duration-300 decoration-pictored decoration-[3px] underline-offset-8"
    >{{ navname }}</router-link
  >
</template>
