<template>
  <div>
    <div class="px-5 py-4">
      <div
        v-for="course in courses"
        :key="course._id"
        class="text-white flex items-center gap-x-4 py-3 justify-center"
      >
        <router-link :to="`/admin/${course._id}`"
          ><h1>{{ course.title }}</h1></router-link
        >
        <fwb-button @click="showModal(course.title, course.pic)">
          Edit
        </fwb-button>
        <fwb-button @click="deleteFn(course._id)"> Delete </fwb-button>

        <fwb-modal v-if="isShowModal" @close="closeModal">
          <template #header>
            <div class="flex items-center text-lg">{{ modalTitle }}</div>
          </template>
          <template #body>
            <fwb-input
              v-model="updateTitle"
              placeholder="Title"
              label="Title"
              class="py-2 text-md px-1"
            />
            <fwb-input
              v-model="updatePic"
              placeholder="Pic link"
              label="Pic link"
              class="py-2 text-md px-1"
            />
          </template>
          <template #footer>
            <div class="flex justify-between">
              <fwb-button @click="closeModalUpload(course._id)" variant="green">
                <h1 class="text-slate-300 rounded-md">Edit</h1>
              </fwb-button>
              <fwb-button @click="closeModal">Close</fwb-button>
            </div>
          </template>
        </fwb-modal>
      </div>

      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
            >
              Upload a course
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-400"
                    >Title</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="title"
                    v-model="title"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="text" class="leading-7 text-sm text-gray-400"
                    >Pic link</label
                  >
                  <input
                    type="text"
                    id="text"
                    v-model="piclink"
                    name="link"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full">
                <button
                  @click.prevent="submitCourse"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import slugify from "slugify";
import { ref } from "vue";

import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import cryptoRandomString from "crypto-random-string";
import { useToast } from "vue-toast-notification";

const courses = ref();
const title = ref();
const piclink = ref();
const updateTitle = ref();
const updatePic = ref();
const modalTitle = ref();

const isShowModal = ref(false);

async function closeModalUpload(id) {
  await axios.put(`http://localhost:8000/api/courses/${id}`, {
    title: updateTitle.value,
    slug: slugify(updateTitle.value),
    pic: updatePic.value,
  });

  const toast = useToast();
  toast.success("Updated successfully");
  isShowModal.value = false;
  getCourses();
}

function closeModal() {
  isShowModal.value = false;
}

function showModal(titleval, piclinkval) {
  isShowModal.value = true;
  (updateTitle.value = titleval), (updatePic.value = piclinkval);
  modalTitle.value = titleval;
}

const getCourses = async () => {
  const coursesData = await axios.get(
    "http://localhost:8000/api/courses/index"
  );

  courses.value = coursesData.data;
};

const deleteFn = async (id) => {
  const confirmation = confirm("Are you sure ?? ");

  if (confirmation === true) {
    await axios.delete(`http://localhost:8000/api/courses/${id}`);

    const toast = useToast();
    toast.success("Deleted successfully");

    getCourses();
  }
};

const submitCourse = async () => {
  const randomstring = cryptoRandomString({ length: 5 });

  const course = await axios.post("http://localhost:8000/api/courses/create", {
    title: title.value,
    pic: piclink.value,
    slug: `${slugify(title.value) + randomstring}`,
  });

  const toast = useToast();
  toast.success("Uploaded successfully");
  getCourses();
};

getCourses();
</script>
