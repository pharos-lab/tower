<template>
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
          @click="showModal = true"
        >
          Add section
        </button>
        <TModal :show="showModal" @closeModal="showModal = false"> </TModal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TSidebar from './TSidebar.vue';
import TModal from './TModal.vue';

const props = defineProps({});

const showModal = ref();
</script>

<style scoped>
.t-toolbar::-webkit-scrollbar {
  width: 100px;
}

.t-toolbar {
  scrollbar-width: thin;
}
</style>
