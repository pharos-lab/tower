<template>
  <div class="t-block border border-green-500 h-full">it works!!</div>
</template>

<script setup>
import { computed } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

const props = defineProps({
  block: Object,
});

function handleModalComponent() {
  builder.currentBlock = props.block;
  builder.showModalComponent = true;
}
</script>

<style scoped></style>
