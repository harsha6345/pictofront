<template>
  <nav>
    <nav
      class="w-full flex justify-between bg-pictoblue items-center px-5 py-3"
    >
      <div class="flex gap-x-5 items-center">
        <div
          class="bars md-lg:hidden p-3 pb-1 px-[0.6rem] border flex items-center flex-col rounded-md bg-gray-600 bg-opacity-25 border-white"
          x-data="{open : false}"
        >
          <button
            x-on:click="open = !open"
            x-bind:class="open ? 'z-50 fixed top-7 left-6' : 'z-50 relative'"
          >
            <div id="nav-icon1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            class="hamburger bg-transblack fixed top-0 left-0 z-10 flex flex-col gap-4 items-center justify-center w-screen h-screen mx-auto p-6 transition duration-200"
            x-show="open"
            x-cloak
          >
            <a
              href="#"
              class="text-white flex flex-col gap-y-1 w-full tracking-wide text-center hover:text-pictored p-2 transition duration-300 rounded-md"
              ><h3 class="text-bold text-3xl">PROJECTS</h3>
              <h3 class="text-sm">//Learn things practically</h3>
            </a>
            <a
              href="/blogs.html"
              class="text-white flex flex-col gap-y-1 w-full tracking-wide text-center hover:text-pictored p-2 transition duration-300 rounded-md"
              ><h3 class="text-bold text-3xl">BLOGS</h3>
              <h3 class="text-sm">//Maximize your potential with blogs</h3>
            </a>
            <a
              href="#"
              class="text-white flex flex-col gap-y-1 w-full tracking-wide text-center hover:text-pictored p-2 transition duration-300 rounded-md"
              ><h3 class="text-bold text-3xl">ROADMAP</h3>
              <h3 class="text-sm">//Never get lost in the wild</h3>
            </a>
            <a
              href="#"
              class="text-white flex flex-col gap-y-1 w-full tracking-wide text-center hover:text-pictored p-2 transition duration-300 rounded-md"
              ><h3 class="text-bold text-3xl">EDITOR</h3>
              <h3 class="text-sm">//In-built editor for practice</h3>
            </a>
          </div>
        </div>
        <router-link to="/"
          ><img src="/images/logo.webp" alt="" class="w-[150px] cursor-pointer"
        /></router-link>
      </div>

      <div class="hidden justify-between gap-x-5 md-lg:flex">
        <navlink
          navref="/blogs"
          navname="BLOGS"
          :class="{
            'underline decoration-pictored': $route.path === '/blogs',
          }"
        ></navlink>
        <navlink
          navref="/projects"
          navname="PROJECTS"
          :class="{
            'underline decoration-pictored': $route.path === '/projects',
          }"
        ></navlink>
        <navlink
          navref="/roadmaps"
          navname="ROADMAPS"
          :class="{
            'underline decoration-pictored': $route.path === '/roadmaps',
          }"
        ></navlink>
        <navlink
          navref="/editor"
          navname="EDITOR"
          :class="{
            'underline decoration-pictored': $route.path === '/editor',
          }"
        ></navlink>
      </div>
      <router-link
        v-if="!user"
        to="/login"
        class="text-white font-semibold rounded-sm border-pictored border-[1px] overflow-visible group md-lg:inline"
        ><h1
          class="text-lg px-3 py-2 bg-pictored transition group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          LOGIN <span class="sm:inline hidden">/ SIGNUP</span>
        </h1></router-link
      >

      <div class="profile" x-data="{ openProfile : false }" v-if="user">
        <div
          class="h-[44px] w-[44px] bg-[url('https://picsum.photos/44/44/?random')] rounded-full relative cursor-pointer"
          x-on:click="openProfile = !openProfile"
          x-on:click.away="openProfile = false"
        >
          <div
            class="flex flex-col gap-y-1 py-2 bg-white bg-opacity-85 absolute right-0 top-[50px] rounded-sm"
            x-show="openProfile"
            x-transition
          >
            <button
              class="flex gap-x-2 items-center text-lg group px-3 hover:bg-red-400 hover:text-white py-2 rounded-sm mx-2 transition"
            >
              <LogoutVue
                :class="{ 'h-7 text-red-500 group-hover:text-white': true }"
              />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script setup>
import navlink from "./navlink.vue";
import ProfileVue from "../assets/Profile.vue";
import LogoutVue from "../assets/Logout.vue";
import axios from "axios";
</script>

<style scoped>
#nav-icon1 {
  width: 25px;
  height: 25px;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 1.5px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 8px;
}

#nav-icon1 span:nth-child(3) {
  top: 16px;
}

#nav-icon1.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
