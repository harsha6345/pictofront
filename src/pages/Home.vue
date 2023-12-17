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
import { onMounted } from "vue";

let adsbygoogle; // Define adsbygoogle outside setup block

onMounted(() => {
  adsbygoogle = window.adsbygoogle || []; // Initialize adsbygoogle
  const script = document.createElement("script");
  script.async = true;
  script.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9956258341245538";
  script.setAttribute("crossorigin", "anonymous");

  const ins = document.createElement("ins");
  ins.classList.add("adsbygoogle");
  ins.style.display = "block";
  ins.setAttribute("data-ad-client", "ca-pub-9956258341245538");
  ins.setAttribute("data-ad-slot", "4043919690");
  ins.setAttribute("data-ad-format", "auto");
  ins.setAttribute("data-full-width-responsive", "true");

  const divAd = document.getElementById("home-ad");
  if (divAd) {
    divAd.appendChild(ins);
    adsbygoogle.push({}); // Push the ad to adsbygoogle array
  } else {
    console.error('Element with ID "home-ad" not found.');
  }

  document.head.appendChild(script);
});
</script>
