<template>
  <h2>Page Builder</h2>
  <section class="t-page-builder h-full flex">
    <aside class="t-toolbar w-48 bg-slate-500 overflow-auto">
      <div class="t-search relative p-2">
        <input
          type="text"
          class="
            rounded
            block
            py-2
            pl-9
            bg-slate-200
            w-full
            placeholder:text-sm placeholder:italic
          "
          placeholder="search components"
        />
        <span
          class="
            absolute
            top-2
            w-8
            h-10
            flex
            justify-center
            items-center
            bg-slate-300
            rounded-l
            text-slate-700
          "
        >
          <MagnifyingGlassIcon class="w-5 h-5" />
        </span>
      </div>

      <div
        class="
          t-components
          grid grid-cols-2
          border border-slate-600
          overflow-auto
        "
      >
        <div
          class="
            aspect-square
            flex
            justify-center
            items-center
            bg-slate-700
            text-white
            border-2 border-slate-600
            hover:bg-slate-600
            cursor-pointer
          "
          v-for="n in 20"
        >
          <div class="">
            <Bars3BottomLeftIcon class="w-8 h-8" />
            <p class="text-sm font-semibold">Text</p>
          </div>
        </div>
      </div>
    </aside>
    <div class="canvas bg-red-200 grow"></div>
  </section>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/solid';
import { PhotoIcon } from '@heroicons/vue/24/outline';
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
