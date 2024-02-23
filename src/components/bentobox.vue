<script setup>
import arrowRight from "../assets/arrow-right.vue";
import flex1 from "../components/flex1.vue";
</script>

<template>
  <section
    class="flex h-full md:w-11/12 w-full max-w-7xl items-center xl:flex-row flex-col"
  >
    <div
      class="xl:w-4/12 md:w-11/12 w-full h-full md:px-3 px-0 py-2 flex xl:flex-col md:flex-row flex-col items-center justify-center gap-x-4 gap-y-4"
    >
      <flex1
        title="Learn FrontEnd"
        link="/learn/frontend"
        image="/images/front.webp"
        description="<ul class=' list-disc translate-x-3'>
           <li>HTML,CSS,Javascript</li>
          <li>React JS</li>
          </ul>"
      />
      <flex1
        title="Learn Backend"
        link="#"
        image="/images/terminal.svg"
        description="<ul class=' list-disc translate-x-3'>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>SQL/NoSQL Databases</li>
            <li>Building API's</li>
          </ul>"
      />
    </div>
    <div
      class="xl:w-8/12 md:w-11/12 w-full h-full py-2 flex xl:flex-col flex-col-reverse gap-y-3"
    >
      <div
        class="h-[66.66%] w-full flex md:flex-row items-center justify-center md:flex-nowrap flex-wrap content-center md:gap-0 gap-3 md:min-w-[393.717px]"
      >
        <div
          class="flex md:flex-col flex-col-reverse gap-y-4 md:w-5/12 w-full h-full"
        >
          <div class="w-full h-1/2 commoncard">
            <div class="flex w-full justify-between items-center">
              <img src="/images/python.svg" class="h-[90px]" alt="" />
              <h1 class="text-xl text-slate-100">Learn Python</h1>
            </div>

            <div class="w-full flex justify-end mt-2">
              <a
                href="#"
                class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
                >Start Now <arrowRight />
              </a>
            </div>
          </div>
          <div class="w-full h-1/2 commoncard">
            <div class="flex w-full justify-between items-center">
              <img src="/images/clang.svg" class="h-[90px]" alt="" />
              <h1 class="text-xl text-slate-100 text-end">Learn C Language</h1>
            </div>

            <div class="w-full flex justify-end mt-2">
              <a
                href="#"
                class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
                >Start Now <arrowRight />
              </a>
            </div>
          </div>
        </div>
        <div class="md:w-7/12 w-full h-full md:pl-4 pl-0">
          <div class="w-full h-full commoncard">
            <div class="flex justify-between items-center">
              <img src="/images/ml.svg" alt="" class="h-[90px]" />
              <h1 class="text-xl text-slate-100">Learn AI/ML</h1>
            </div>
            <h1 class="text-white text-md my-5">
              <ul class="list-disc translate-x-3">
                <li>Python</li>
                <li>Numpy, pandas</li>
                <li>Scikit</li>
                <li>Tensorflow</li>
              </ul>
              <span class="md:inline hidden"> 3+ projects </span>
            </h1>
            <div class="w-full flex justify-end mt-2">
              <a
                href="#"
                class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
                >Start Now <arrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[33.33%] flex gap-x-4">
        <div class="w-full h-full commoncard">
          <div class="flex gap-x-3 items-center w-full justify-center h-full">
            <img src="/images/DataStructures.svg" alt="" class="h-[90px]" />
            <div class="flex flex-col gap-y-1">
              <h1 class="text-xl text-slate-100 mb-1">Learn DSA</h1>
              <ul class="text-white mb-2 list-disc translate-x-3">
                <li>Linked lists to graphs</li>
                <li>Code in multiple languages</li>
              </ul>
              <div class="w-full flex justify-end mt-2">
                <a
                  href="#"
                  class="bg-pictored flex items-center gap-x-2 text-white rounded-lg px-4 py-3"
                  >Start Now <arrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.commoncard {
  flex-shrink: 0;
}
</style>
