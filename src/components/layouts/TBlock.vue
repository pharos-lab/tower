<template>
  <div class="t-block border border-green-500 h-full">
    <div class="t-add-block flex justify-center items-center h-24">
      <button
        class="
          t-add-section-action
          w-36
          h-12
          pointer-cursor
          border-2 border-dashed border-emerald-500
          bg-emerald-50
        "
        @click="$emit('showModalComponent', sectionId)"
      >
        Add Component
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  sectionId: Number,
});
</script>

<style scoped></style>
