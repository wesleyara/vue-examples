<script setup lang="ts">
import { ref } from "vue";

import type { VueTreeItem } from "./components/VueTree/models/vue-tree.models";

import { MaterialIcon } from "./components/MaterialIcon";
import { VueTree } from "./components/VueTree";
import { treeNodes } from "./components/VueTree/mocks/vue-tree.mocks";

const modelValue = ref<VueTreeItem[]>([]);

const clearSelection = () => {
  modelValue.value = [];
};
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center gap-10">
    <VueTree :items="treeNodes" :parent-select="true" :multiple="true" v-model="modelValue">
      <template #item="{ item, toggleExpand, currentIcon, handleSelect }">
        <MaterialIcon :icon="currentIcon(item)" class="mr-2" @click="() => toggleExpand(item)" />
        <span @click="() => handleSelect(item)">{{ item.label }}</span>
      </template>
    </VueTree>

    <button class="bg-gray-200 px-4 py-2" @click="clearSelection">Clear Selection</button>
  </div>
</template>
