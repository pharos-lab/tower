<template>
  <div class="t-section border border-red-500 h-96 grid" :class="gridClass">
    <div
      class="t-block border border-green-500 h-full"
      v-for="(n, index) in numberOfBlock"
      :key="index"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  numberOfBlock: Number,
});

const gridClass = computed(() => {
  switch (props.numberOfBlock) {
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
