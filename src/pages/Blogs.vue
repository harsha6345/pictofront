<!-- BlogsPage.vue -->
<template>
  <div>
    <div class="flex px-3 py-4 items-center">
      <div class="mx-auto w-9/12">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            v-model="search"
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="px-5 py-4">
      <div class="w-full px-2 py-3 gap-5 project-grid" v-if="blogs.length > 0">
        <div v-for="blog in blogs" :key="blog._id">
          <BlogCard
            :title="blog.title"
            :date="blog.createdAtFormatted"
            :thumbnail="blog.thumbnail"
            :slug="blog.slug"
          ></BlogCard>
        </div>
      </div>
      <div v-else class="py-24">
        <div class="flex justify-center items-center py-4 flex-col">
          <img src="/images/not-found.webp" alt="" class="w-[300px]" />
          <h1 class="text-white">NO BLOGS RIGHT NOW</h1>
        </div>
      </div>
    </div>
    <router-link to="/blogs/create" class="fixed bottom-5 right-9"
      >Create</router-link
    >
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import moment from "moment";
import BlogCard from "../components/BlogCard.vue";

const blogs = ref([]);
const tempblogs = ref();
const search = ref("");

watch(search, (newValue, oldValue) => {
  if (newValue.trim() !== "") {
    blogs.value = tempblogs.value.filter((blog) =>
      blog.title.toLowerCase().includes(newValue.toLowerCase())
    );
  } else {
    // If the search input is empty, display all blogs
    blogs.value = tempblogs.value;
  }
});

const getBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/blogs/get");
    blogs.value = response.data; // Assign fetched data to the reactive ref

    // Parse and format dates using Moment.js before assigning them
    blogs.value.forEach((blog) => {
      blog.createdAtFormatted = moment(blog.createdAt).format("MMMM Do, YYYY"); // Customize the format as needed
    });

    tempblogs.value = blogs.value;
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
