<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-pictoblue2">
    <Navbar :class="{ hidden: $route.path == '/edit' }" />
    <router-view></router-view>
    <img
      src="/images/nnnoise.svg"
      :class="{
        hidden: $route.path === '/edit',
      }"
      alt=""
      class="w-screen h-full z-30 pointer-events-none fixed top-0 left-0 object-cover opacity-50"
    />
    <Footer
      :class="{
        hidden: $route.path === '/edit',
      }"
    />
  </div>
</template>

<style scoped></style>
