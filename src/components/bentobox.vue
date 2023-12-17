<script setup>
import arrowRight from "../assets/arrow-right.vue";
import flex1 from "../components/flex1.vue";
</script>

<template>
  <section
    class="flex h-full w-11/12 max-w-7xl items-center xl:flex-row flex-col"
  >
    <div
      class="xl:w-4/12 md:w-11/12 w-full h-full px-3 py-2 flex xl:flex-col md:flex-row flex-col items-center justify-center gap-x-4 gap-y-4"
    >
      <flex1
        title="Learn FrontEnd"
        link="/tutorials/frontend"
        image="/images/front.webp"
        description="Front-end development is like making a colorful, interactive playground on the internet where you can click on things and they do fun stuff!"
      />
      <flex1
        title="Learn Python"
        link="#"
        image="/images/python.svg"
        description="Learning Python is like playing with magical building blocks that help you tell your computer what to do, like making it draw pictures"
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
              <img src="/images/aws.svg" class="h-[90px]" alt="" />
              <h1 class="text-2xl text-slate-100">Learn DevOps</h1>
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
              <h1 class="text-2xl text-slate-100">Learn C Language</h1>
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
        <div class="md:w-7/12 w-full h-full pl-4">
          <div class="w-full h-full commoncard">
            <div class="flex justify-between items-center">
              <img src="/images/terminal.svg" alt="" class="h-[90px]" />
              <h1 class="text-2xl text-slate-100">Learn BackEnd</h1>
            </div>
            <h1 class="text-white text-md my-5">
              Learning backend development involves mastering server-side
              technologies, databases, and APIs. It's about building the
              invisible infrastructure that powers web applications and ensures
              data storage and retrieval.
              <span class="md:inline hidden"
                >Proficiency in languages like Python, Node.js, or Ruby and
                frameworks like Django or Express is essential for backend
                development.</span
              >
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
              <h1 class="text-2xl text-slate-100">
                Learn Data Structures & Algorithms(DSA)
              </h1>
              <p class="text-white">
                Learning Python is like playing with magical building blocks
                that help you tell your computer what to do, like making it draw
                pictures
              </p>
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
