<template>
  <TModal :show="props.show" @closeModal="$emit('closeModal')" to="#canvas">
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
          selected == 'oneBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('oneBlockSection')"
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
          selected == 'twoBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('twoBlockSection')"
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
          selected == 'threeBlockSection'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('threeBlockSection')"
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
import { ref } from 'vue';
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

const selected = ref();

function chooseSelected(section) {
  selected.value = section;
}

function submitSectionChoice() {
  emit('sectionChosen', selected.value);
  emit('closeModal');
}
</script>
