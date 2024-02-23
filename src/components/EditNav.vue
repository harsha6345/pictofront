<template>
  <nav
    class="flex px-3 py-2 justify-between items-center gap-x-3 w-full"
    id="editor-nav"
  >
    <div class="text-white flex items-center gap-x-2">
      <button class="flex items-center" @click="goBack">
        <arrowRight :class="{ 'text-xl rotate-180': true }" />
        <span>Back</span>
      </button>
    </div>
    <div class="w-9/12 h-[70px] bg-blue-400"></div>
    <div class="flex items-center gap-x-2">
      <button
        class="py-2 px-3 bg-pictored text-white rounded-md flex items-center gap-x-1 flex-shrink-0"
      >
        Save & Run
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2"
            />
            <path
              d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
            />
          </g>
        </svg>
      </button>
      <button class="rounded-full bg-[rgb(180,6,100)] py-2 px-2">
        <arrowRight :class="{ 'rotate-90 text-white text-lg': true }" />
      </button>
      <button
        class="rounded-full bg-[rgb(180,6,100)] py-2 px-2 text-lg"
        @click="emitfullScreen"
      >
        <svg
          class="text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M18.5 5.5H16a1.5 1.5 0 0 1 0-3h3A2.5 2.5 0 0 1 21.5 5v3a1.5 1.5 0 0 1-3 0zM8 5.5H5.5V8a1.5 1.5 0 1 1-3 0V5A2.5 2.5 0 0 1 5 2.5h3a1.5 1.5 0 1 1 0 3m0 13H5.5V16a1.5 1.5 0 0 0-3 0v3A2.5 2.5 0 0 0 5 21.5h3a1.5 1.5 0 0 0 0-3m8 0h2.5V16a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 0 1-2.5 2.5h-3a1.5 1.5 0 0 1 0-3"
            />
          </g>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import arrowRight from "../assets/arrow-right.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push("/");
};

const emit = defineEmits(["fullScreen"]);

const emitfullScreen = () => {
  emit("fullScreen");
};
</script>
