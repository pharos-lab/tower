<template>
  <div class="t-block border border-slate-500">it works!!</div>
</template>

<script setup>
import { computed } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();
</script>

<style scoped></style>
