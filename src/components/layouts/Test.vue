<template>
  <div
    class="t-block border border-slate-500"
    contenteditable
    @input="handleChange('base', $event)"
    :value="data.base"
    ref="base"
  >
    {{ data.base }}
  </div>

  <div
    class="t-block border border-slate-500"
    contenteditable
    @input="handleChange('second', $event)"
    :value="data.second"
    ref="second"
  >
    {{ data.second }}
  </div>
</template>

<script setup>
import { computed, ref, onUpdated } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

const data = ref({
  base: 'default text1',
  second: 'second text1',
});

const base = ref();
const second = ref();
const current = ref();

const emit = defineEmits(['update:data']);

onUpdated(() => {
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(current.value == 'base' ? base.value : second.value);
  range.collapse(false);
  selection.addRange(range);
  current.value == 'base' ? base.value.focus() : second.value.focus();
});

function handleChange(slot, event) {
  data.value[slot] = event.target.innerText;
  current.value = slot;

  emit('update:data', data.value);
}
</script>

<style scoped></style>
