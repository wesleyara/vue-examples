<template>
  <template v-for="item in items" :key="item.key">
    <span class="w-full">
      <input
        v-if="item.type === 'text'"
        type="text"
        v-model="modelValue[item.key]"
        class="w-full"
        placeholder="Enter value"
      />

      <select
        v-else-if="item.type === 'select'"
        v-model="modelValue[item.key]"
        class="w-full"
      >
        <option
          v-for="option in item.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
    </span>

    <VueRecursiveForm
      v-if="getChildren(item).length > 0"
      :items="getChildren(item)"
      v-model="modelValue"
    />
  </template>
</template>

<script setup lang="ts">
import { VueRecursiveFormProps } from "../models/vue-recursive-form-models";

const getChildren = (item: VueRecursiveFormProps["items"][number]) => {
  if (item.children && item.children.length > 0) {
    const fatherValue = modelValue.value[item.key];

    const findCurrentChildren = item.children.filter(
      child => child.ref === fatherValue,
    );

    return findCurrentChildren || [];
  }

  return [];
};

defineProps<VueRecursiveFormProps>();
const modelValue = defineModel<Record<string, string>>({
  default: {},
});
</script>
