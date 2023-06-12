<template>
  <TModal
    :show="builder.showModalComponent"
    @closeModal="builder.showModalComponent = false"
    to="#canvas"
  >
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
          componentName == 'Test'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('Test')"
      >
        <div class="w-10 h-8 border-2 border-slate-600 rounded">Test</div>
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
          componentName == 'TButton'
            ? 'bg-sky-200 border-sky-600'
            : 'bg-slate-200',
        ]"
        @click="chooseSelected('TButton')"
      >
        <div class="">Button</div>
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
          componentName == 'component3'
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
          Create component
        </button>
      </div>
    </template>
  </TModal>
</template>

<script setup>
import { ref, computed } from 'vue';
import TModal from './TModal.vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

const props = defineProps({
  dismissable: {
    type: Boolean,
    default: true,
  },
  show: Boolean,
  to: String,
});

const componentName = ref('Test');

function chooseSelected(chosen) {
  componentName.value = chosen;
}

function submitComponentChoice() {
  let componentProps;
  import(
    `@/components/${componentName.value}/${componentName.value}Specs.js`
  ).then((module) => {
    builder.currentBlock.components.push({
      name: componentName.value,
      order: builder.currentBlock.componentOrder,
      data: {
        props: {},
        slots: {},
        specs: {
          props: module.data.props,
          slots: module.data.slots,
        },
      },
    });

    builder.currentBlock.componentOrder++;
    builder.showModalComponent = false;
  });
}
</script>
