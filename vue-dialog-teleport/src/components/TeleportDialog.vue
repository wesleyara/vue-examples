<script setup lang="ts">
defineProps<{ portal?: boolean }>();
const isOpen = defineModel<boolean>();

const handleCloseDialog = () => {
  isOpen.value = false;
};
</script>

<template>
  <div
    v-if="isOpen && !portal"
    class="dialog flex items-center justify-center bg-[#ebebeb]"
  >
    <button
      class="absolute right-3 top-3 rounded-md bg-blue-400 px-4 py-2 text-white"
      @click="handleCloseDialog"
    >
      Close Dialog
    </button>

    <slot name="content" />
  </div>
  <teleport to="body" v-if="isOpen && portal">
    <div class="dialog flex items-center justify-center bg-[#ebebeb]">
      <button
        class="absolute right-3 top-3 rounded-md bg-blue-400 px-4 py-2 text-white"
        @click="handleCloseDialog"
      >
        Close Dialog
      </button>

      <slot name="content" />
    </div>
  </teleport>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 90%;
  max-width: 768px;
  height: 500px;
}
</style>
