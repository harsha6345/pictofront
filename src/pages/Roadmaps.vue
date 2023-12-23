<template>
  <div>
    <div class="bg-pictoblue2">
      <div class="timeline">
        <ul>
          <RoadmapCard
            @openSideBar="openbar"
            title="Web Fundamentals"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <RoadmapCard
            title="HTML : Structure of the site"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <RoadmapCard
            title="CSS : Styling the site"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <RoadmapCard
            title="CSS tooling"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <RoadmapCard
            title="JavaScript : Interactive Websites"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <RoadmapCard
            title="FrontEnd Framework"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          />
          <div style="clear: both"></div>
        </ul>
      </div>
    </div>
    <div
      class="h-screen w-[300px] py-2 px-3 bg-black bg-opacity-90 fixed top-0 -right-full transition-all duration-500 flex flex-col items-start ease-in"
      id="roadSideBar"
      :style="{ right: sidebarOpen ? '0' : '-100%' }"
    >
      <div class="flex w-full justify-end">
        <button class="text-white text-4xl" @click="closeSideBar">
          &times;
        </button>
      </div>
      <p
        class="text-white font-poppins text-2xl underline underline-offset-[10px]"
      >
        Content :
      </p>
      <div class="flex flex-col gap-y-3 py-5 px-3">
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
        <a href="#" class="text-red-400 underline">HTML Text</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import RoadmapCard from "../components/RoadmapCard.vue";

const sidebarOpen = ref(false);
const openbar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSideBar = () => {
  sidebarOpen.value = false;
};

onMounted(() => {});
</script>

<style scoped>
h1 {
  font-size: 60px;
  text-align: center;
}
.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
}

.content {
  padding-bottom: 20px;
}

.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #c5c5c5;
}
.timeline ul {
  padding: 0;
  margin: 0;
}
.timeline ul li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}
.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}
.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  right: -6px;
  background: rgba(214, 6, 6, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  left: -4px;
  background: rgba(214, 6, 6, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}

.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  background: rgba(233, 33, 99, 1);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.3);
}
.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  background: rgba(233, 33, 99, 1);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.3);
}
@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .timeline {
    width: 100%;
    padding-bottom: 0;
  }
  h1 {
    font-size: 40px;
    text-align: center;
  }
  .timeline:before {
    left: 20px;
    height: 100%;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;
  }
  .timeline ul li:nth-child(odd):before,
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 16px;
  }
  .timeline ul li:nth-child(odd) .time,
  .timeline ul li:nth-child(even) .time {
    top: -30px;
    left: 50px;
    right: inherit;
  }
}
</style>
