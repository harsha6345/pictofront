<template>
  <button
    class="text-white py-2 w-full hover:bg-pictored hover:bg-opacity-60"
    @click="activeFn"
  >
    {{ props.title }}
  </button>
</template>

<script setup>
import { useRoute } from "vue-router";

const router = useRoute();
console.log(router.params.slug);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const activeFn = (e) => {
  e.target.classList.add("bg-pictored bg-opacity-60");
};
</script>
