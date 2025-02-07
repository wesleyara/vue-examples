<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <button class="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
    {{ msg }}
  </button>
</template>
