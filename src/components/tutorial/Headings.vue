<template>
  <div class="w-full flex flex-col items-center">
    <button
      @click="showSubheadings"
      class="w-full text-white py-2 text-start pl-2 flex items-center gap-x-2 uppercase text-sm font-semibold tracking-wide"
    >
      <arrowRight
        :class="{
          'text-red-500 rotate-90 transition-[0.1s]': isShown,
          'text-red-500 rotate-0 transition-[0.1s]': !isShown,
        }"
      />
      Something here
    </button>
    <div class="w-full">
      <transition-group name="fade">
        <div
          v-for="(item, index) in subheadings"
          :key="index"
          v-show="isShown"
          class="w-full"
        >
          <Subheading :title="item" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import arrowRight from "../../assets/arrow-right.vue";
import Subheading from "./Subheadings.vue";

const subheadings = ref(["Something", "hello"]);
const isShown = ref(false);

const showSubheadings = () => {
  isShown.value = !isShown.value;
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-active {
  transition-delay: 0.1s;
}
</style>
