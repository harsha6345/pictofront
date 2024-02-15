<template>
  <div class="px-5 py-3 grid place-items-center gap-y-4">
    <h1 class="text-3xl text-white underline">{{ currentHeading }}</h1>

    <div v-for="subheading in subheadings" :key="subheading._id">
      <div class="flex items-center gap-x-3">
        <router-link
          :to="`/admin/${course}/${heading}/${subheading._id}`"
          class="text-white"
          >{{ subheading.title }}</router-link
        >
        <fwb-button @click="showModal(subheading.title)">Edit</fwb-button>
        <fwb-modal v-if="isShowModal" @close="closeModal">
          <template #body>
            <fwb-input class="px-3 py-2 text-xl" v-model="updateTitle">
            </fwb-input>
          </template>
          <template #footer>
            <div class="flex justify-between">
              <fwb-button
                @click="updateAndClose(subheading._id)"
                color="alternative"
              >
                Update
              </fwb-button>
              <fwb-button @click="closeModal" color="green"> Close </fwb-button>
            </div>
          </template>
        </fwb-modal>
        <fwb-button @click="deleteSubheading(subheading._id)"
          >Delete</fwb-button
        >
      </div>
    </div>

    <input type="text" v-model="title" />
    <button
      @click="createSubheading"
      class="rounded-md bg-blue-400 text-white px-3 py-2"
    >
      Create
    </button>
  </div>
</template>

<script setup>
import axios from "axios";
import slugify from "slugify";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";

const route = useRoute();
const toast = useToast();

const course = route.params.course;
const heading = route.params.heading;

//Data refs

const currentHeading = ref("");
const subheadings = ref();

//Input refs

const title = ref("");
const updateTitle = ref();

//Modal functions

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}
function showModal(title) {
  isShowModal.value = true;
  updateTitle.value = title;
}

//Data functions

const getHeadings = async (req, res) => {
  const response = await axios.get(
    `http://localhost:8000/api/subheadings/${heading}`
  );

  subheadings.value = response.data;
};

const getHeading = async (req, res) => {
  const response = await axios.get(
    `http://localhost:8000/api/headings/get/${heading}`
  );

  currentHeading.value = response.data[0].title;
};

const createSubheading = async (req, res) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/subheadings/${course}/${heading}`,
      {
        title: title.value,
        heading: heading,
        slug: slugify(title.value),
      }
    );

    toast.success("Uploaded successfully");

    getHeadings();
  } catch (error) {
    toast.error(`Unable to create ${error.message}`);
  }
};

const updateAndClose = async (id) => {
  const response = await axios.put(
    `http://localhost:8000/api/subheadings/${id}`,
    {
      title: updateTitle.value,
      slug: slugify(updateTitle.value),
    }
  );

  isShowModal.value = false;
  toast.success("Successfully updated!!!");

  getHeadings();
};

const deleteSubheading = async (id) => {
  let confirmation = confirm("Are you sure ???");

  if (confirmation === true) {
    const response = await axios.delete(
      `http://localhost:8000/api/subheadings/${id}`
    );
    toast.error("Deleted successfully");

    getHeadings();
  }
};

onMounted(() => {
  getHeadings();
  getHeading();
});
</script>
