<template>
  <div class="flex flex-col px-3 py-2 gap-y-3 justify-center">
    <h1 class="text-white text-3xl py-4">Upload content</h1>
    <input
      type="text"
      v-model="title"
      placeholder="Title"
      class="content-input"
    />

    <div
      class="w-full bg-slate-800 rounded-md py-4 px-5 flex gap-x-3 items-center"
    >
      <div class="relative" v-for="(image, index) in imageArray" :key="index">
        <div class="absolute top-0 right-0">
          <WrongVue @click="deleteImage(image)" />
        </div>
        <img
          :src="image"
          alt=""
          class="rounded-md w-[80px] aspect-square object-cover"
        />
      </div>
    </div>

    <input
      type="file"
      multiple
      class="content-input"
      @change="imageFn"
      accept="image/*"
    />

    <textarea
      cols="40"
      rows="10"
      v-model="playground"
      class="content-input w-full"
      placeholder="Playground code"
    ></textarea>
    <div class="my-4 bg-white w-full">
      <div id="content-editor"></div>
    </div>

    <div class="flex justify-end items-center">
      <button
        @click="submitContent"
        class="px-3 py-2 rounded-md bg-pictored text-white"
      >
        Submit Content
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import { useToast } from "vue-toast-notification";
//Components
import axios from "axios";
import WrongVue from "../../assets/Wrong.vue";
import slugify from "slugify";

const route = useRoute();
const toast = useToast();

//Input refs
const title = ref();
const playground = ref();
const description = ref();
const imageArray = ref([]);

//Params

const heading = route.params.heading;
const course = route.params.course;
const subheading = route.params.subheading;

//Uploading and deleting images

const imageFn = async (e) => {
  const files = e.target.files;

  for (const file of files) {
    const response = await axios.post(
      "http://localhost:8000/api/content/image",
      { image: file },
      {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure proper content type for FormData
        },
      }
    );

    imageArray.value.push(response.data.imageName);
  }
};

//Onmounted and quill stuff here

onMounted(() => {
  const editor = new Quill("#content-editor", {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "italic", "underline"],
        ["image", "link", "video"],
        ["code-block"],
        [{ align: [] }],
      ],
    },
    placeholder: "Write a description for the project",
    theme: "snow",
  });

  editor.on("text-change", () => {
    const descval = editor.root.innerHTML;

    description.value = descval;
  });
});

//Crud functions here

const submitContent = async (req, res) => {
  const response = await axios.post(
    `http://localhost:8000/api/content/create/${course}/${heading}/${subheading}`,
    {
      title: title.value,
      images: imageArray.value,
      playground: playground.value,
      description: description.value,
      slug: slugify(title.value),
    }
  );

  toast.success("Uploaded successfully");
};

const deleteImage = async (name) => {
  const key = name.split("/");
  const actualName = key[key.length - 1];

  const response = await axios.post(
    "http://localhost:8000/api/content/deleteImage",
    {
      imageName: actualName,
    }
  );

  const index = imageArray.value.indexOf(name);

  imageArray.value.splice(index, 1);

  toast.success("Deleted successfully");
};
</script>

<style scoped>
.ql-container {
  height: 400px !important;
}
</style>
