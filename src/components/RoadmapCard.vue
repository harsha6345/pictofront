<template>
  <li>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
    <div
      class="time bg-pictored bg-opacity-80 cursor-pointer"
      @click="openRoadMap"
    >
      <button class="flex items-center gap-x-2">Learn Now <Open /></button>
    </div>
  </li>
</template>

<script setup>
import { onMounted } from "vue";
import Open from "../assets/Open.vue";

const emits = defineEmits(["openSideBar"]);

const roadmapProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  current: {
    type: String,
    required: true,
  },
});

const openRoadMap = () => {
  emits("openSideBar", roadmapProps.current);
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
  margin: 0px auto;
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

  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
.timeline ul li h3 {
  padding: 0;
  margin: 0;
  @apply bg-gradient-to-r from-red-500 to-50% to-blue-500 bg-clip-text text-transparent text-3xl;
  font-weight: 600;
}
.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
  color: white;
}
.timeline ul li .time button {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 2px rgba(233, 33, 99, 0.3);
}
.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 2px rgba(233, 33, 99, 0.3);
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
