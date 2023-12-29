<template>
  <div class="w-full px-4 py-3">
    <h1 class="text-slate-200 text-3xl">Write your blog now</h1>

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
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import slugify from "slugify";

Quill.register("modules/imageUploader", ImageUploader);

const title = ref("");
const blogContents = ref("");
const thumbnail = ref(null);

const selectedFileName = ref("");

const handleFileChange = (event) => {
  // Update the thumbnail ref with the selected file
  thumbnail.value = event.target.files[0];
  selectedFileName.value = event.target.files[0].name;
};

const submitBlog = async () => {
  // Create FormData object to send data including the thumbnail file
  const formData = new FormData();
  formData.append("file", thumbnail.value);

  try {
    // Make a POST request to your server endpoint with axios
    const response = await axios.post(
      "http://localhost:8000/api/quill/upload-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure proper content type for FormData
        },
      }
    );

    const thumbnailurl = response.data.imageName;

    const blogresponse = await axios.post(
      "http://localhost:8000/api/blogs/upload",
      {
        title: title.value,
        content: blogContents.value,
        user_id: 2,
        slug: slugify(title.value),
        thumbnail: thumbnailurl,
      }
    );

    console.log(blogresponse.data);
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
        ["image", "link", "video"],
        ["code-block"],
        [{ align: [] }],
      ],
      imageUploader: {
        upload: async (file) => {
          try {
            // Simulate uploading to the server (replace with actual logic)
            const formData = new FormData();
            formData.append("file", file);
            const response = await axios.post(
              "http://localhost:8000/api/quill/upload-file",
              formData
            );

            return response.data.imageName; // Replace with your response key
          } catch (error) {
            console.error("Image upload failed:", error);
            throw error;
          }
        },
      },
    },
    placeholder: "Write your blog here!!!",
    theme: "snow",
  });

  editor.on("text-change", () => {
    const code = editor.root.innerHTML;
    blogContents.value = code;
  });
});
</script>

<style scoped>
.ql-container {
  height: 400px !important;
}
</style>
