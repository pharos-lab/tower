<template>
  <component
    :is="tag"
    :href="props.href ?? null"
    class="l-button py-2 px-4 font-semibold focus:ring-1"
    :class="[colorClass, roundedClass, hoverClass, focusClass]"
    ><slot>{{ props.data.slots?.base ?? 'change me' }}</slot></component
  >
</template>

<script setup>
import { computed, ref, onUpdated } from 'vue';
import { useRoundedSwitch } from '@/components/composables/roundedSwitch.js';
import { useColorSwitch } from '@/components/composables/colorSwitch.js';
import { useHoverSwitch } from '@/components/composables/hoverSwitch.js';
import { useFocusSwitch } from '@/components/composables/focusSwitch.js';

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
    type: String,
    default: 'true',
    validator(value) {
      // The value must match one of these strings
      return ['true', 'false'].includes(value);
    },
  },
  focus: String,
  href: String,
});

const tag = computed(() => {
  return props.href ? 'a' : 'button';
});

const colorClass = computed(() => {
  return useColorSwitch(props.color, props.mode);
});

const hoverClass = computed(() => {
  return props.hover == 'true' ? useHoverSwitch(props.color, props.mode) : '';
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
