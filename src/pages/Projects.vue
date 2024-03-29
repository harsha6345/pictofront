<template>
  <main
    class="md:flex justify-start gap-x-3 bg-pictoblue2 h-full bg-[url('/images/ffflurry.svg')] bg-no-repeat bg-cover"
  >
    <router-link to="/projects/create">Add new</router-link>
    <div
      class="project-sidebar md:bg-opacity-0 bg-opacity-100 h-full flex-shrink-0 md:w-[200px] w-full overflow-y-scroll flex md:flex-col flex-row items-start gap-y-3 px-4 py-5 flex-wrap"
    >
      <button
        class="bg-violet-900"
        @click="handleActive('all')"
        :class="{ active: currentList === 'all' }"
      >
        All
      </button>
      <button
        class="bg-violet-900"
        @click="handleActive(0)"
        :class="{ active: currentList === 0 }"
      >
        HTML only
      </button>
      <button
        class="bg-violet-900"
        @click="handleActive(1)"
        :class="{ active: currentList === 1 }"
      >
        HTML & CSS
      </button>
      <button
        class="bg-violet-900"
        @click="handleActive(2)"
        :class="{ active: currentList === 2 }"
      >
        HTML + CSS + JS
      </button>
    </div>
    <div class="project-main w-full">
      <div class="w-full px-4 py-9 gap-5 project-grid">
        <div v-for="project in tempProjects" :key="project._id">
          <ProjectCard
            :title="project.title"
            :slug="project.slug"
            :type="project.type"
            :date="project.createdAtFormatted"
            :excerpt="project.excerpt"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
import moment from "moment";

const currentList = ref("all");

const projects = ref();
const tempProjects = ref();

watch(currentList, (newList, oldList) => {
  const tempArray = [];

  projects.value.forEach((project) => {
    if (project.type === newList && project.type != "all") {
      tempArray.push(project);
    }
  });

  tempProjects.value = tempArray;

  if (currentList.value == "all") {
    tempProjects.value = projects.value;
  }
});

const getProjects = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/projects/get");
    projects.value = response.data; // Assign fetched data to the reactive ref

    // Parse and format dates using Moment.js before assigning them
    projects.value.forEach((project) => {
      project.createdAtFormatted = moment(project.createdAt).format(
        "MMMM Do, YYYY"
      ); // Customize the format as needed
    });

    tempProjects.value = projects.value;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

getProjects();

const handleActive = (list) => {
  currentList.value = list;
};
</script>

<style>
.active {
  @apply bg-pictored;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: center;
  align-items: center;
}

.project-sidebar {
  @apply justify-center gap-x-3;
}

.project-sidebar button {
  @apply md:w-full w-fit;
}
</style>
