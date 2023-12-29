<!-- SlugParamView.vue -->
<template>
  <div v-if="blog">
    <!-- Display the specific information based on the fetched data -->
    <h1>{{ blog.title }}</h1>
    <img :src="blog.thumbnail" alt="Blog Thumbnail" />
    <!-- Display the thumbnail -->
    <div v-html="blog.content"></div>
    <!-- Display the content using v-html directive -->
    <!-- Other blog details can be displayed here -->
  </div>
  <div v-else>
    <p>Loading...</p>
    <!-- Display a loading message or handle error cases -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const blog = ref(null); // Initialize as null to handle loading state

// Fetch specific blog data based on the slug parameter
onMounted(async () => {
  const slug = route.params.slug;
  try {
    const response = await axios.get(`http://localhost:8000/api/blogs/${slug}`);
    blog.value = response.data[0]; // Assign the first blog object to the reactive variable
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
});
</script>

<style scoped>
* {
  color: white;
}
</style>
