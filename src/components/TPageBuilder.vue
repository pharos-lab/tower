<template>
  <section class="t-page-builder flex">
    <div class="canvas bg-slate-100 grow relative" id="canvas">
      <div class="t-sections">
        <!-- <component :is="sections[section.type]"></component>-->
        <TSection
          v-for="section in state.page.sections"
          :key="section.id"
          :section="section"
          @showModalComponent="showModalComponent"
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
          @click="state.showModalSection = true"
        >
          Add section
        </button>
      </div>

      <TModalSection
        :show="state.showModalSection"
        @closeModal="state.showModalSection = false"
        @sectionChosen="addSection"
      />

      <TModalComponent
        :show="state.showModalComponent"
        @closeModal="state.showModalComponent = false"
        @componentChosen="addComponent"
      />

      <pre>
      {{ state }}
      </pre>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TSidebar from './TSidebar.vue';
import TModalSection from './TModalSection.vue';
import TModalComponent from './TModalComponent.vue';
import TSection from './layouts/TSection.vue';

const props = defineProps({});

const state = reactive({
  sectionOrder: 1,
  sectionId: 1,
  blockId: 1,
  currentBlock: null,
  page: {
    sections: [],
    options: {},
  },
  showModalSection: false,
  showModalComponent: false,
});

function addSection(section) {
  state.page.sections.push({
    id: state.sectionId,
    order: state.sectionOrder,
    type: section.type,
    numberOfBlock: section.numberOfBlock,
    options: {},
    blocks: createBlocks(section),
  });

  state.sectionOrder++;
  state.sectionId++;
}

function createBlocks(section) {
  let order = 1;
  let blocks = [];
  for (let i = 0; i < section.numberOfBlock; i++) {
    blocks.push({
      id: state.blockId,
      order: order,
      components: [],
      sectionId: state.sectionId,
      componentOrder: 1
    });
    order++;
    state.blockId++;
  }

  return blocks;
}

function addComponent(componentName) {
  state.currentBlock.components.push({
    name: componentName,
    order: state.currentBlock.componentOrder
  });

  state.currentBlock.componentOrder++
}

function showModalComponent(block) {
  state.currentBlock = block;
  state.showModalComponent = true;
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
