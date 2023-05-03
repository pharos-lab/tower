<template>
  <TModal :show="props.show" @closeModal="$emit('closeModal')" to="#canvas">
    <template #header>
      <h3>Choose The Component</h3>
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
          section.type == 'component1'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('component1')"
      >
        <div class="w-10 h-8 border-2 border-slate-600 rounded">
          component 1
        </div>
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
          section.type == 'component2'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('component2')"
      >
        <div class="w-10 h-8 border-2 border-slate-600 rounded">
          Component 2
        </div>
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
          section.type == 'component3'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('component3')"
      >
        <div class="w-10 h-8 border-2 border-slate-600 rounded"></div>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <button
          class="rounded bg-emerald-500 text-white px-4 py-2"
          @click="submitComponentChoice"
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

const emit = defineEmits(['closeModal', 'sectionChosen']);

const props = defineProps({
  dismissable: {
    type: Boolean,
    default: true,
  },
  show: Boolean,
  to: String,
});

const section = reactive({
  type: 'OneBlockSection',
  numberOfBlock: 1,
});

function chooseSelected(sectionType, blockNumber) {
  section.type = sectionType;
  section.numberOfBlock = blockNumber;
}

function submitcomponentChoice() {
  emit('componentChosen', section);
  emit('closeModal');
}
</script>
