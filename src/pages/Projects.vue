<template>
  <main
    class="md:flex justify-start gap-x-3 bg-pictoblue2 h-full bg-[url('/images/ffflurry.svg')] bg-no-repeat bg-cover"
  >
    <div
      class="project-sidebar md:bg-opacity-0 bg-opacity-100 h-full flex-shrink-0 md:w-[200px] w-full overflow-y-scroll flex md:flex-col flex-row items-start gap-y-3 px-4 py-5 flex-wrap"
    >
      <button
        class="bg-violet-900"
        @click="handleActive('html')"
        :class="{ active: currentList === 'html' }"
        id="html"
        projectId="78"
      >
        HTML only
      </button>
      <button
        class="bg-violet-900"
        @click="handleActive('hc')"
        :class="{ active: currentList === 'hc' }"
        id="hc"
        projectId="78"
      >
        HTML & CSS
      </button>
      <button
        class="bg-violet-900"
        @click="handleActive('hcj')"
        :class="{ active: currentList === 'hcj' }"
        id="hcj"
        projectId="78"
      >
        HTML + CSS + JS
      </button>
    </div>
    <div class="project-main w-full">
      <div class="w-full px-4 py-9 gap-5 project-grid">
        <ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css']"
        />
        <ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css']"
        />
        <ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css', 'Js']"
        />
        <ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css', 'Js']"
        /><ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css', 'Js']"
        /><ProjectCard
          title="Hello Project"
          date="12 Oct 2020"
          :skills="['Html', 'Css', 'Js']"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const currentList = ref("html");

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
  grid-template-columns: repeat(auto-fit, 250px);
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
