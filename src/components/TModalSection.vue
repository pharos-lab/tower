<template>
  <TModal :show="props.show" @closeModal="$emit('closeModal')" to="#canvas">
    <template #header>
      <h3>Choose The Layout</h3>
    </template>

    <div class="flex justify-between">
      <div
        class="layout w-20 h-20 bg-slate-200 flex items-center justify-center"
      >
        <div
          class="
            one-block
            w-10
            h-8
            border-2 border-slate-600
            rounded
            cursor-pointer
          "
        ></div>
      </div>

      <div
        class="layout w-20 h-20 bg-slate-200 flex items-center justify-center"
      >
        <div
          class="
            one-block
            w-5
            h-8
            border-slate-600 border-r border-2
            rounded-l
            cursor-pointer
          "
        ></div>
        <div
          class="
            one-block
            w-5
            h-8
            border-2 border-slate-600 border-l
            rounded-r
            cursor-pointer
          "
        ></div>
      </div>

      <div
        class="layout w-20 h-20 bg-slate-200 flex items-center justify-center"
      >
        <div
          class="
            one-block
            w-5
            h-8
            border-slate-600 border-r border-2
            rounded-l
            cursor-pointer
          "
        ></div>

        <div
          class="
            one-block
            w-5
            h-8
            border-2 border-slate-600 border-x
            cursor-pointer
          "
        ></div>

        <div
          class="
            one-block
            w-5
            h-8
            border-slate-600 border-l border-2
            rounded-r
            cursor-pointer
          "
        ></div>
      </div>
    </div>

    <template #footer>
      <button>Create section</button>
    </template>
  </TModal>
</template>

<script setup>
import TModal from './TModal.vue';

const emits = defineEmits(['closeModal']);

const props = defineProps({
  dismissable: {
    type: Boolean,
    default: true,
  },
  show: Boolean,
  to: String,
});
</script>
