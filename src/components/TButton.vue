<template>
  <component
    :is="tag"
    :href="props.href ?? null"
    class="l-button py-2 px-4 font-semibold focus:ring-1"
    :class="[colorClass, roundedClass, hoverClass, focusClass]"
    contenteditable
    @input="handleChange('base', $event)"
    :value="data.base"
    ref="base"
    ><slot>Click me</slot></component
  >
</template>

<script setup>
import { computed, ref, onUpdated } from 'vue';
import { useRoundedSwitch } from './composables/roundedSwitch.js';
import { useColorSwitch } from './composables/colorSwitch.js';
import { useHoverSwitch } from './composables/hoverSwitch.js';
import { useFocusSwitch } from './composables/focusSwitch.js';

const props = defineProps({
  data: Object,
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['gray', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'fill',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'fill', 'light', 'outlined', 'text'].includes(value);
    },
  },
  rounded: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['none', 'sm', 'normal', 'md', 'lg', 'xl', 'pill'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: true,
  },
  focus: String,
  href: String,
});

const emit = defineEmits(['update:data']);

const data = ref({
  slots: {
    base: 'Change Me',
  },
  props: {},
});

const base = ref();

onUpdated(() => {
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(base.value);
  range.collapse(false);
  selection.addRange(range);
  //base.value.focus();
});

function handleChange(slot, event) {
  data.value[slot] = event.target.innerText;

  emit('update:data', data.value);
}

const tag = computed(() => {
  return props.href ? 'a' : 'button';
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const hoverClass = computed(() => {
  return props.hover ? useHoverSwitch(props.color, props.mode) : '';
});

const roundedClass = computed(() => {
  return useRoundedSwitch(props.rounded);
});

const focusClass = computed(() => {
  return props.focus
    ? useFocusSwitch(props.focus, props.mode)
    : props.focus == ''
    ? useFocusSwitch(props.color, props.mode)
    : 'focus:outline-none';
});
</script>

<style scoped></style>
