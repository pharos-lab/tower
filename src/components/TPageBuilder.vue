<template>
  <section class="t-page-builder flex">
    <div class="canvas bg-slate-100 grow relative" id="canvas">
      <div class="t-sections">
        <!-- <component :is="sections[section.type]"></component>-->
        <TSection
          :numberOfBlock="section.numberOfBlock"
          v-for="section in state.page.sections"
          :key="section.id"
          :sectionId="section.id"
        ></TSection>
      </div>

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

      <pre>
      {{ state.page }}
      </pre>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TSidebar from './TSidebar.vue';
import TModalSection from './TModalSection.vue';
import TSection from './layouts/TSection.vue';

const props = defineProps({});

const state = reactive({
  order: 1,
  id: 1,
  page: {
    sections: [],
    options: {},
  },
  showModal: false,
});

function addSection(section) {
  state.page.sections.push({
    id: state.id,
    order: state.order,
    type: section.type,
    numberOfBlock: section.numberOfBlock,
    options: {},
    blocks: [],
  });

  state.order++;
  state.id++;
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
