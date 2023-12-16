<script setup>
import { Position } from "@vue-flow/core";

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps(["label"]);
</script>

<template>
  <div>
    <Handle type="target" :position="Position.Top" />
    <div>{{ label }}</div>
  </div>
</template>
