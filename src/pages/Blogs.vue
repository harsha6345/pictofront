<!-- BlogsPage.vue -->
<template>
  <div>
    <div class="flex justify-end px-3 py-4">
      <router-link
        to="/blogs/create"
        class="bg-pictored py-2 px-3 text-white rounded-sm"
        >Create New
      </router-link>
    </div>
    <div class="w-full px-2 py-3 gap-5 project-grid">
      <div v-for="blog in blogs" :key="blog._id">
        <BlogCard
          :title="blog.title"
          :date="blog.createdAtFormatted"
          :thumbnail="blog.thumbnail"
          :slug="blog.slug"
        ></BlogCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import BlogCard from "../components/BlogCard.vue";

const blogs = ref([]);

const getBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/blogs/get");
    blogs.value = response.data; // Assign fetched data to the reactive ref

    // Parse and format dates using Moment.js before assigning them
    blogs.value.forEach((blog) => {
      blog.createdAtFormatted = moment(blog.createdAt).format("MMMM Do, YYYY"); // Customize the format as needed
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

onMounted(() => {
  getBlogs();
});
</script>

<style scoped>
/* Add your styles for the BlogsPage component here */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
