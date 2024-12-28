<script setup lang="ts">
import { ref } from "vue";
import TeleportDialog from "../components/TeleportDialog.vue";

const isOpen = ref(false);
const isOpenPortalDialog = ref(false);

const handleOpenDialog = () => {
  isOpen.value = true;
};

const handleOpenPortalDialog = () => {
  isOpenPortalDialog.value = true;
};
</script>

<template>
  <section
    class="flex h-screen flex-col items-center justify-center gap-5 px-2 text-center"
  >
    <button class="rounded-md bg-blue-400 px-4 py-2" @click="handleOpenDialog">
      Open Inline Dialog
    </button>
    <button
      class="rounded-md bg-blue-400 px-4 py-2"
      @click="handleOpenPortalDialog"
    >
      Open Transport Dialog
    </button>

    <TeleportDialog v-model="isOpen">
      <template #content>
        <div class="rounded-md p-5">
          <h2 class="text-lg font-semibold">Inline Dialog Content</h2>
          <p class="mt-2 text-sm">
            This is a dialog content. You can put any content here.
          </p>
        </div>
      </template>
    </TeleportDialog>

    <TeleportDialog v-model="isOpenPortalDialog" :portal="true">
      <template #content>
        <div class="rounded-md p-5">
          <h2 class="text-lg font-semibold">Transport Dialog Content</h2>
          <p class="mt-2 text-sm">
            This is a dialog content. You can put any content here.
          </p>
        </div>
      </template>
    </TeleportDialog>
  </section>
</template>
