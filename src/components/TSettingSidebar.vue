<template>
  <div class="sidebar w-64 border border-orange-700 right-0">
    <pre>{{ builder.currentComponent }}</pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();
</script>

<style scoped></style>
