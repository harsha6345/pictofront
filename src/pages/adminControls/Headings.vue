<template>
  <div>
    <h1 class="text-white text-2xl px-3 py-3">{{ courseHead }}</h1>

    <div
      v-for="heading in headings"
      :key="heading._id"
      class="text-white flex items-center gap-x-4 py-3 justify-center"
    >
      <div class="flex justify-center gap-x-3 items-center">
        <router-link :to="`/admin/${heading.course}/${heading._id}`">{{
          heading.title
        }}</router-link>

        <fwb-button @click="showModal(heading.title)">Edit</fwb-button>
        <fwb-button @click="deleteHeading(heading._id)"> Delete </fwb-button>

        <fwb-modal v-if="isShowModal" @close="closeModal">
          <template #header>
            <div class="flex items-center text-lg">{{ updateTitle }}</div>
          </template>
          <template #body>
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              {{ heading.title }}
            </p>

            <fwb-input
              type="text"
              v-model="updateTitle"
              class="py-2 text-md px-1"
            />
          </template>
          <template #footer>
            <div class="flex justify-between">
              <fwb-button
                @click="updateHeading(heading._id)"
                color="alternative"
              >
                Update
              </fwb-button>
              <fwb-button @click="closeModal" color="green"> Close </fwb-button>
            </div>
          </template>
        </fwb-modal>
      </div>
    </div>

    <section class="text-gray-400 bg-gray-900 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
          >
            Upload a Heading
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

            <div class="p-2 w-full">
              <button
                @click.prevent="submitHeading"
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
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import slugify from "slugify";
import { useToast } from "vue-toast-notification";

//Modal functions

const updateTitle = ref();

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}
function showModal(heading) {
  isShowModal.value = true;

  updateHeading.value = heading;
  updateTitle.value = heading;
}

const heading = ref("");
const route = useRoute();
const toast = useToast();

const slug = route.params.slug;

const courseSlug = ref("");
const courseHead = ref("");

//Data refs

const headings = ref();

//Input refs

const title = ref("");

//Getting content

const getCourse = async () => {
  const response = await axios.get(
    `http://localhost:8000/api/courses/get/${slug}`
  );

  courseHead.value = response.data.title;
  courseSlug.value = response.data.slug;
};

const getHeading = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/headings/${slug}`
    );
    const responseData = response.data;

    const title = responseData.title;

    heading.value = title;
    headings.value = responseData;
  } catch (error) {
    console.error("Error fetching heading:", error.message);
  }
};

//Posting content

const submitHeading = async () => {
  const response = await axios.post(
    `http://localhost:8000/api/headings/create/${courseSlug.value}`,
    {
      title: title.value,
      slug: `${slugify(title.value)}`,
      course: courseSlug.value,
    }
  );

  toast.success("Heading posted successfully");

  getHeading();
};

//Crud functions

const deleteHeading = async (id) => {
  let confirmation = confirm("Are you sure ???");

  if (confirmation === true) {
    const response = await axios.delete(
      `http://localhost:8000/api/headings/${id}`
    );

    toast.success("Deleted successfully");
  }

  getHeading();
};

const updateHeading = async (id) => {
  const response = await axios.put(`http://localhost:8000/api/headings/${id}`, {
    title: updateTitle.value,
    slug: slugify(updateTitle.value),
  });

  getHeading();
  isShowModal.value = false;

  toast.info("Updated successfully");
};

onMounted(() => {
  getHeading();
  getCourse();
});
</script>
