<template>
  <div class="w-full px-4 py-3">
    <h1 class="text-slate-200 text-3xl">Upload your project now</h1>

    <div class="flex flex-col gap-y-5">
      <!-- Title input -->
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        placeholder="Title"
        class="mt-9 w-full bg-transparent border border-white focus:outline-none px-3 py-2 text-xl text-white"
      />

      <input
        type="text"
        name="youTubevideo"
        id="videourl"
        v-model="youTubevideo"
        placeholder="Video Url"
        class="w-full bg-transparent border border-white focus:outline-none px-3 py-2 text-xl text-white"
      />

      <input
        type="text"
        name="youTubevideo"
        id="videourl"
        v-model="excerpt"
        placeholder="Excerpt"
        class="w-full bg-transparent border border-white focus:outline-none px-3 py-2 text-xl text-white"
      />
      <div class="w-full flex justify-center flex-col items-center">
        <label for="HeadlineAct" class="block text-lg font-medium text-white">
          Type of project
        </label>

        <select
          name="HeadlineAct"
          id="HeadlineAct"
          v-model="type"
          class="mt-1.5 border-gray-300 text-gray-700 sm:text-sm py-1 px-5 rounded-sm"
        >
          <option hidden disabled selected>Please select</option>
          <option value="0">HTML Only</option>
          <option value="1">HTML + CSS</option>
          <option value="2">HTML + CSS + JS</option>
        </select>
      </div>

      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            ></svg>
            <p class="mb-2 text-lg text-gray-500 dark:text-gray-400">
              Upload your thumbnail
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG
            </p>
          </div>

          <p
            v-if="selectedFileName"
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            Selected File: {{ selectedFileName }}
          </p>

          <!-- File input -->
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleFileChange"
          />
        </label>
      </div>
    </div>

    <div class="my-4 bg-white">
      <div id="editor"></div>
    </div>
    <div class="flex justify-end py-4 px-3">
      <button
        class="text-white py-2 px-4 rounded-md bg-pictored flex-grow-0"
        @click="submitBlog"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import slugify from "slugify";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

Quill.register("modules/imageUploader", ImageUploader);
const router = useRouter();

const title = ref("");
const projectContents = ref("");
const excerpt = ref("");
const youTubevideo = ref("");
const thumbnail = ref(null);
const type = ref(0);

const selectedFileName = ref("");

const handleFileChange = (event) => {
  console.log("File input change event:", event);
  thumbnail.value = event.target.files[0];
  selectedFileName.value = event.target.files[0].name;
  console.log("Thumbnail value:", thumbnail.value);
};

const submitBlog = async () => {
  // Create FormData object to send data including the thumbnail file
  const formData = new FormData();
  formData.append("file", thumbnail.value);

  try {
    // Make a POST request to your server endpoint with axios
    const response = await axios.post(
      "http://localhost:8000/api/projects/thumbnail",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure proper content type for FormData
        },
      }
    );

    const thumbnailurl = response.data.imageName;

    const blogresponse = await axios.post(
      "http://localhost:8000/api/projects/create",
      {
        title: title.value,
        description: projectContents.value,
        slug: slugify(title.value),
        thumbnail: thumbnailurl,
        type: type.value,
        excerpt: excerpt.value,
        youTubevideo: youTubevideo.value,
      }
    );

    console.log({
      title: title.value,
      description: projectContents.value,
      slug: slugify(title.value),
      thumbnail: thumbnailurl,
      type: type.value,
      excerpt: excerpt.value,
      youTubevideo: youTubevideo.value,
    });

    const $toast = useToast();
    let instance = $toast.success("Uploaded successfully");

    router.push("/projects");
  } catch (error) {
    // Handle errors (e.g., show error message)
    console.error("Error submitting blog:", error);
  }
};

onMounted(() => {
  const editor = new Quill("#editor", {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline"],
        ["code-block"],
        [{ align: [] }],
      ],
    },
    placeholder: "Write a description for the project",
    theme: "snow",
  });

  editor.on("text-change", () => {
    const code = editor.root.innerHTML;
    projectContents.value = code;
  });
});
</script>

<style scoped>
.ql-container {
  height: 400px !important;
}
</style>
