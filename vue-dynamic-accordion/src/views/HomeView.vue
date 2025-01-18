<script setup lang="ts">
import { ref } from "vue";
import { items, accordionItems } from "../lib/constants";
import VueRecursiveForm from "../components/VueRecursiveForm/components/VueRecursiveForm.vue";
import { VueAccordion } from "../components/VueAccordion";

const defaultModel = ref<Record<string, string>>({});
</script>

<template>
  <section
    class="mt-10 flex flex-col items-center justify-center gap-5 px-2 text-center"
  >
    <span>Multiple SREI Accordion</span>
    <VueAccordion type="multiple" :items="accordionItems">
      <template #header="{ item }">
        <span>
          {{ item.title }}
        </span>
      </template>

      <template #content="{ item }">
        <VueRecursiveForm :items="item.content" v-model="defaultModel" />
      </template>
    </VueAccordion>

    <span>Single Accordion</span>
    <VueAccordion type="single" :items="items">
      <template #header="{ item }">
        <span>
          {{ item.title }}
        </span>
      </template>

      <template #content="{ item }">
        <span>
          {{ item.content }}
        </span>
      </template>
    </VueAccordion>

    <span>Multiple Accordion</span>
    <VueAccordion type="multiple" :items="items">
      <template #header="{ item }">
        <span>
          {{ item.title }}
        </span>
      </template>

      <template #content="{ item }">
        <span>
          {{ item.content }}
        </span>
      </template>
    </VueAccordion>

    <span>Multiple Accordion without slots</span>
    <VueAccordion type="multiple" :items="items" />
  </section>
</template>
