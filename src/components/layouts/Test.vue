<template>
  <div
    class="t-block border border-slate-500"
    contenteditable
    @input="$emit('update:modelValue', $event.target.innerText)"
    :value="props.modelValue"
  >
    <slot>Change ME</slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped></style>
