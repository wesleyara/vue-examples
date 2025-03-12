import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useIconStore = defineStore("icon", () => {
  const icons = ref<string[]>([]);

  const iconsNoRepeat = computed(() => {
    return Array.from(new Set(icons.value));
  })

  watch(
    iconsNoRepeat,
    (newIcons) => {
      if (newIcons.length > 0) {
        console.log("newIcons", newIcons);
        const link = document.createElement("link");
        const iconStr = newIcons.sort((a, b) => a.localeCompare(b)).join(",");

        if (document.getElementById("material-symbols")) {
          document.getElementById("material-symbols")?.remove();
        }

        document.head.appendChild(
          Object.assign(link, {
            rel: "stylesheet",
            href: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${iconStr}`,
            id: "material-symbols"
          })
        );
      }
    },
    { deep: true, immediate: true }
  )

  return {
    icons,
  }
})