<template>
  <h2>Page Builder</h2>
  <section class="t-page-builder h-full flex">
    <TSidebar />
    <div class="canvas bg-red-200 grow">
      <div class="t-add-section flex justify-center items-center h-40">
        <button
          class="
            t-add-section-action
            w-48
            h-20
            pointer-cursor
            border-2 border-dashed border-sky-500
            bg-sky-50
          "
        >
          Add section
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/solid';
import { PhotoIcon } from '@heroicons/vue/24/outline';

import TSidebar from './TSidebar.vue';

const props = defineProps({});
</script>

<style scoped>
.t-toolbar::-webkit-scrollbar {
  width: 100px;
}

.t-toolbar {
  scrollbar-width: thin;
}
</style>
