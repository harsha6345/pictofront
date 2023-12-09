<script setup>
defineProps({
  footername: {
    type: String,
    required: true,
  },
  footref: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <router-link
      class="text-white hover:underline hover:text-red-500 transition"
      :to="footref"
    >
      {{ footername }}
    </router-link>
  </li>
</template>
