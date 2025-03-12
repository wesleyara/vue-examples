<script setup lang="ts">
import DynamicIcon from './components/DynamicIcon.vue';
</script>

<template>
  <h2>Vue material symbol dynamic import</h2>
  <DynamicIcon icon="face" />
  <DynamicIcon icon="check" />
  <DynamicIcon icon="face" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
