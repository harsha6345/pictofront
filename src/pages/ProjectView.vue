<template>
  <div>
    <div v-if="project">
      <h1 class="text-white py-3 text-center">{{ project.title }}</h1>
      <div class="flex justify-center gap-x-6 px-4 py-3 items-center flex-wrap">
        <img :src="project.thumbnail" alt="" class="max-w-[350px]" />
        <div v-if="youtubeid != undefined">
          <iframe
            width="700"
            height="400"
            :src="youtubeid"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="flex justify-center w-full items-center">
        <div
          class="max-w-[1000px] ql-editor"
          v-html="project.description"
        ></div>
      </div>
    </div>
    <div v-else>
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import {
  RyuseiLight,
  none,
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
} from "@ryusei/light";
import "@ryusei/light/dist/css/themes/ryuseilight-ginga.min.css";
import { ref, onMounted } from "vue";
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";

RyuseiLight.register([none()]);
RyuseiLight.compose({
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
});

const route = useRoute();

const slug = route.params.slug;

const project = ref(null);
const youtubeid = ref("");
onMounted(async () => {
  const slug = route.params.slug;
  try {
    const response = await axios.get(
      `http://localhost:8000/api/projects/${slug}`
    );
    project.value = await response.data[0];
    project.value.content += `
        <style>
          h1 {
            font-size: 37px;
            color: white;
          }
          h2 {
            font-size: 30px;
            color: white;
          }
          h3 {
            font-size: 24px;
            color: white;
          }
          h4 {
            font-size: 20px;
            color: white;
          }
          p {
            font-size: 18px;
            color: white;
          }
        </style>
      `;
    setTimeout(() => {
      const ryuseilight = new RyuseiLight({ languageName: true });
      ryuseilight.apply("pre", {
        language: "none",
        copy: {
          html: "Copy",
          activeHtml: "Copied!",
        },

        lineNumbers: true,
      });
    }, 0);

    youtubeid.value = `https://www.youtube.com/embed/${response.data[0].youTubevideo}`;
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
});
</script>

<style scoped>
/* Add specific styles for the Quill content wrapper */
.blog-container {
  max-width: 800px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the container horizontally */
}

* {
  color: white;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.3);
  border-top: 8px solid #d60606;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

h1 {
  font-size: 37px;
  color: white;
}
h2 {
  font-size: 30px;
  color: white;
}
h3 {
  font-size: 24px;
  color: white;
}

h4 {
  font-size: 20px;
  color: white;
}

p {
  font-size: 18px;
  color: white;
}
</style>
