<template>
  <div class="t-section border border-red-500 h-96 grid" :class="gridClass">
    <TBlock
      v-for="(block, index) in section.blocks"
      :key="block.id"
      :block="block"
      @showModalComponent="$emit('showModalComponent', block)"
    >
    </TBlock>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import TBlock from './TBlock.vue';

const props = defineProps({
  section: Object,
});

const gridClass = computed(() => {
  switch (props.section.numberOfBlock) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
  }
});
</script>

<style scoped></style>
