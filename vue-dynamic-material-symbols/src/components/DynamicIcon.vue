<script setup lang='ts'>
import { onBeforeMount } from 'vue';
import { useIconStore } from '../store/useIconStore';

const props = defineProps<{
  icon: string
}>()

const iconStore = useIconStore()

onBeforeMount(() =>{
  iconStore.icons.push(props.icon)
})
</script>

<template>
  <span class="material-symbols-outlined">{{ icon }}</span>
</template>

