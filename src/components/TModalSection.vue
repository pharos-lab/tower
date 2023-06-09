<template>
  <TModal
    :show="builder.showModalSection"
    @closeModal="builder.showModalSection = false"
    to="#canvas"
  >
    <template #header>
      <h3>Choose The Layout</h3>
    </template>

    <div class="flex justify-between">
      <div
        class="
          layout
          w-20
          h-20
          flex
          items-center
          justify-center
          cursor-pointer
          rounded
        "
        :class="[
          section.type == 'OneBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('OneBlockSection', 1)"
      >
        <div class="w-10 h-8 border-2 border-slate-600 rounded"></div>
      </div>

      <div
        class="
          layout
          w-20
          h-20
          flex
          items-center
          justify-center
          cursor-pointer
          rounded
        "
        :class="[
          section.type == 'TwoBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('TwoBlockSection', 2)"
      >
        <div class="w-5 h-8 border-slate-600 border-r border-2 rounded-l"></div>
        <div class="w-5 h-8 border-2 border-slate-600 border-l rounded-r"></div>
      </div>

      <div
        class="
          layout
          w-20
          h-20
          flex
          items-center
          justify-center
          cursor-pointer
          rounded
        "
        :class="[
          section.type == 'ThreeBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('ThreeBlockSection', 3)"
      >
        <div
          class="
            one-block
            w-3
            h-8
            border-slate-600 border-r border-2
            rounded-l
            cursor-pointer
          "
        ></div>

        <div
          class="
            one-block
            w-3
            h-8
            border-2 border-slate-600 border-x
            cursor-pointer
          "
        ></div>

        <div
          class="
            one-block
            w-3
            h-8
            border-slate-600 border-l border-2
            rounded-r
            cursor-pointer
          "
        ></div>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <button
          class="rounded bg-emerald-500 text-white px-4 py-2"
          @click="submitSectionChoice"
        >
          Create section
        </button>
      </div>
    </template>
  </TModal>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TModal from './TModal.vue';
import { useBuilder } from '@/stores/store.js';

const emit = defineEmits(['closeModal', 'sectionChosen']);

const props = defineProps({
  dismissable: {
    type: Boolean,
    default: true,
  },
  show: Boolean,
  to: String,
});

const builder = useBuilder();

const section = reactive({
  type: 'OneBlockSection',
  numberOfBlock: 1,
});

function chooseSelected(sectionType, blockNumber) {
  section.type = sectionType;
  section.numberOfBlock = blockNumber;
}

function submitSectionChoice() {
  builder.sections.push({
    id: builder.sectionId,
    order: builder.sectionOrder,
    type: section.type,
    numberOfBlock: section.numberOfBlock,
    options: {},
    blocks: createBlocks(section),
  });

  builder.sectionOrder++;
  builder.sectionId++;

  builder.showModalSection = false;
}

function createBlocks(section) {
  let order = 1;
  let blocks = [];
  for (let i = 0; i < section.numberOfBlock; i++) {
    blocks.push({
      id: builder.blockId,
      order: order,
      components: [],
      sectionId: builder.sectionId,
      componentOrder: 1,
    });
    order++;
    builder.blockId++;
  }

  return blocks;
}
</script>
