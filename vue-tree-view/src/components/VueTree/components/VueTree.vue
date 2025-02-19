<script setup lang="ts">
import { computed, ref } from "vue";

import type { VueTreeItem, VueTreeProps } from "../models/vue-tree.models";

import { cn } from "../../../lib/utils";
import MaterialIcon from "../../MaterialIcon/components/MaterialIcon.vue";

const props = withDefaults(defineProps<VueTreeProps>(), {
  expandIcon: "keyboard_arrow_right",
  collapseIcon: "keyboard_arrow_down",
  multiple: false,
  parentSelect: false,
  propagateSelect: false,
  layer: 0,
});

const itemRef = ref(props.items);
const selected = defineModel<VueTreeItem[]>({
  default: [],
});

const currentIcon = computed(() => (item: VueTreeItem) => {
  if (item.icon) {
    return item.icon;
  }

  if (!hasChildren(item)) {
    return "";
  }

  return item.isExpanded ? props.collapseIcon : props.expandIcon;
});

const getItemStyle = computed(() => {
  return {
    marginLeft: `${props.layer * 5}px`,
  };
});

const getItemsClasses = computed(() => (item: VueTreeItem) => {
  const defaultClasses =
    "flex cursor-pointer items-center border-2 border-transparent focus:border-gray-300";

  const isSelected = selected.value.find(val => val.id === item.id);
  const mergedClasses = cn(defaultClasses, {
    "bg-gray-200": isSelected,
  });

  return mergedClasses;
});

const hasChildren = (item: VueTreeItem) => {
  return item.children && item.children.length > 0;
};

const reduceSelectedItems = (items: VueTreeItem[]) => {
  return items.reduce((acc, item) => {
    if (hasChildren(item)) {
      acc.push(...reduceSelectedItems(item.children as VueTreeItem[]));
    }

    acc.push(item);

    return acc;
  }, [] as VueTreeItem[]);
};

const toggleExpand = (item: VueTreeItem) => {
  if (hasChildren(item)) {
    itemRef.value = itemRef.value.map(i => {
      if (i.id === item.id) {
        i.isExpanded = !i.isExpanded;
      }

      return i;
    });
  }
};

const handleSelect = (item: VueTreeItem) => {
  if (!props.parentSelect && hasChildren(item)) {
    return;
  }

  const exists = selected.value.find(val => val.id === item.id);

  if (props.multiple) {
    if (props.propagateSelect) {
      const selectedItems = reduceSelectedItems([item]);

      if (!exists) {
        return selected.value.push(...selectedItems);
      }

      return (selected.value = selected.value.filter(
        val => !selectedItems.find(item => item.id === val.id),
      ));
    } else {
      if (!exists) {
        return selected.value.push(item);
      }

      return (selected.value = selected.value.filter(val => val.id !== item.id));
    }
  }

  if (!exists) {
    return (selected.value = [item]);
  }

  return (selected.value = selected.value.filter(val => val.id !== item.id));
};
</script>

<template>
  <section class="flex flex-col items-start">
    <ul class="m-0 list-none p-0">
      <li v-for="item in itemRef" :key="item.id">
        <button :style="getItemStyle" :class="getItemsClasses(item)">
          <slot
            name="item"
            :item="item"
            :handleSelect="handleSelect"
            :toggleExpand="toggleExpand"
            :currentIcon="currentIcon"
          >
            <MaterialIcon
              v-if="currentIcon(item)"
              :icon="currentIcon(item)"
              @click="() => toggleExpand(item)"
            />
            <span @click="() => handleSelect(item)">{{ item.label }}</span>
          </slot>
        </button>
        <VueTree
          v-if="hasChildren(item) && item.isExpanded"
          v-model="selected"
          v-bind="props"
          :layer="props.layer + 1"
          :items="item.children as VueTreeItem[]"
        />
      </li>
    </ul>
  </section>
</template>
