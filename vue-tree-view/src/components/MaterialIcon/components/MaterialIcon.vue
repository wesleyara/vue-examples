<script setup lang="ts">
import type { MaterialIconProps } from "../models/material-icon.models";

defineProps<MaterialIconProps>();
</script>

<template>
  <span class="material-symbols-outlined">{{ icon }}</span>
</template>
