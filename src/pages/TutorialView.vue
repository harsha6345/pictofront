<template>
  <div>
    <div class="flex">
      <div
        class="w-[250px] flex flex-col bg-black bg-opacity-60 h-[calc(100vh-100px)] items-center"
      >
        <Heading />
        <Heading />
      </div>
      <div class="w-full py-5 flex flex-col items-center">
        <div class="flex flex-col gap-y-5 justify-center items-center">
          <div class="flex justify-center items-center gap-x-2">
            <button id="btnPrev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-8-5l-5 5l5 5z"
                />
              </svg>
            </button>
            <section class="splide" aria-label="Splide Basic HTML Example">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                  <li class="splide__slide">
                    <img src="https://picsum.photos/300/300/?random" alt="" />
                  </li>
                </ul>
              </div>
            </section>
            <button id="btnNext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m8 5l5-5l-5-5z"
                />
              </svg>
            </button>
          </div>
          <div class="my-carousel-progress w-[200px]">
            <div class="my-carousel-progress-bar"></div>
          </div>
        </div>
        <div class="w-[700px]">
          <pre class="lang-js">
console.log('Hello');
splide.on("mounted move", function () {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });
        </pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/js/splide";
import "@splidejs/splide/css/skyblue";
import {
  RyuseiLight,
  javascript,
  html,
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
} from "@ryusei/light";
import "@ryusei/light/dist/css/themes/ryuseilight-ginga.min.css";
//Components
import Heading from "../components/tutorial/Headings.vue";

RyuseiLight.register([javascript(), html()]);
RyuseiLight.compose({
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
});

onMounted(() => {
  let splide = new Splide(".splide", {
    width: "300px",
    arrows: false,
    pagination: false,
    lazyLoad: true,
    gap: 5,
    type: "fade",
  });

  const bar = document.querySelector(".my-carousel-progress-bar");

  // Updates the bar width whenever the carousel moves:
  splide.on("mounted move", function () {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  splide.mount();

  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  btnNext.addEventListener("click", (e) => {
    splide.go("+1");
  });

  btnPrev.addEventListener("click", (e) => {
    splide.go("-1");
  });

  const ryuseilight = new RyuseiLight({ languageName: true });
  ryuseilight.apply("pre", {
    language: "js",
    copy: {
      html: "Copy",
      activeHtml: "Copied!",
    },
    caption: {
      position: "bottom",
      html: "HTML BOILERPLATE",
    },
    lineNumbers: true,
  });
});
</script>
<style scoped>
.my-carousel-progress {
  background: #ccc;
}

.my-carousel-progress-bar {
  @apply bg-pictored;
  height: 5px;
  transition: width 400ms ease;
  width: 0;
}
</style>
