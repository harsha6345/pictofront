<template>
  <div>
    <section
      class="flex flex-col items-center justify-center bg-[url('/images/oooscillate.svg')] bg-no-repeat bg-cover bg-pictoblue"
    >
      <div class="flex flex-col items-center px-4 py-16 gap-y-12">
        <h1
          class="lg:text-6xl md:text-5xl text-3xl text-center font-semibold text-white stroke"
        >
          Why
          <span
            class="bg-gradient-to-r from-red-500 to-90% to-blue-500 bg-clip-text text-transparent"
            >coding </span
          >can't be fun ?
        </h1>
        <p class="text-slate-200 text-center w-9/12 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora
          temporibus minus doloribus molestias voluptatum repellat, obcaecati
          illum facilis dignissimos. Tempora eaque dignissimos vitae sapiente
          unde a culpa explicabo repellendus.
        </p>
        <a
          href="#learn-section"
          class="hover-effect py-3 px-8 rounded-full text-xl border text-white flex items-center justify-center gap-x-2"
          >Start Learning <arrowRight
        /></a>
      </div>
      <div class="flex justify-center w-full h-[200px] mb-8">
        <div
          class="rounded-md bg-blue-300 w-11/12 flex justify-center items-center py-3"
          id="home-ad"
          v-html="adsensecontent"
        ></div>
      </div>
    </section>
    <section id="learn-section" class="w-full bg-[#2d0e44] px-5 py-12">
      <h1 class="text-white text-center pb-12 text-4xl">Learn what you want</h1>
      <div class="flex justify-center">
        <bentobox />
      </div>
    </section>
    <section id="features-section"></section>
  </div>
</template>

<script setup>
import bentobox from "../components/bentobox.vue";
import arrowRight from "../assets/arrow-right.vue";
import { onMounted, ref } from "vue";

const adsensecontent = ref();

onMounted(() => {
  adsensecontent.value = document.getelementbyid(
    "divadsensedisplaynone"
  ).innerhtml;
});
</script>
