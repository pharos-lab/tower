<template>
  <section class="t-page-builder h-full flex">
    <div class="canvas bg-red-200 grow relative" id="canvas">
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
          @click="state.showModal = true"
        >
          Add section
        </button>
      </div>

      <TModalSection
        :show="state.showModal"
        @closeModal="state.showModal = false"
        @sectionChosen="addSection"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TSidebar from './TSidebar.vue';
import TModalSection from './TModalSection.vue';

const props = defineProps({});

const state = reactive({
  id: 1,
  order: 1,
  sections: [],
  showModal: false,
});

function addSection(type) {
  state.sections.push({
    id: state.id,
    order: state.order,
    type: type,
    options: {},
  });

  state.id++;
  state.order++;
  console.log(state);
}
</script>

<style scoped>
.t-toolbar::-webkit-scrollbar {
  width: 100px;
}

.t-toolbar {
  scrollbar-width: thin;
}
</style>
