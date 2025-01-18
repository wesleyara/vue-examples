<script setup lang="ts" generic="T extends VueAccordionItems">
import { cn } from "../../../lib/utils";
import {
  VueAccordionProps,
  VueAccordionItems,
} from "../models/vue-accordion.models";

const props = defineProps<VueAccordionProps<T>>();

const modelValue = defineModel<string | string[] | undefined>();

const isOpen = (key: string) => {
  return (
    modelValue.value === key || (modelValue.value as string[])?.includes(key)
  );
};

const handleSelect = (key: string) => {
  const isSingle = props.type === "single";

  if (isSingle) {
    modelValue.value = modelValue.value === key ? undefined : key;
  } else {
    const index = modelValue.value?.indexOf(key);

    if (index === -1 || index === undefined) {
      modelValue.value = [...(modelValue.value || []), key];
    } else {
      modelValue.value = (modelValue.value as string[])?.filter(k => k !== key);
    }
  }
};

const getTriggerClasses = (key: string) => {
  const defaultClasses = `
    flex 
    w-full 
    items-center 
    justify-between
    gap-2 
    p-6
  `;

  const mergedClasses = cn(defaultClasses, {
    "border-b border-gray-400": isOpen(key),
  });

  return mergedClasses;
};
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center gap-5 px-2 text-center"
  >
    <span
      v-for="item of items"
      :key="item.key"
      class="flex w-full flex-col rounded-md border border-gray-400 bg-[#ebebeb]"
    >
      <span
        @click="() => handleSelect(item.key)"
        :class="getTriggerClasses(item.key)"
      >
        <slot v-if="$slots.header" name="header" :item="item"></slot>
        <span v-else>
          {{ item.title }}
        </span>

        <span>X</span>
      </span>

      <span
        v-if="isOpen(item.key)"
        class="flex w-full flex-col items-center gap-2 p-6"
      >
        <slot v-if="$slots.content" name="content" :item="item"></slot>
        <span v-else>
          {{ item.content }}
        </span>
      </span>
    </span>
  </section>
</template>
