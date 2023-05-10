<template>
  <div class="t-block border border-green-500 h-full">
    <component
      :is="components[component.name]"
      v-for="component in block.components"
      :data="{
        
      }"
    ></component>

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
        @click="handleModalComponent"
      >
        Add Component
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBuilder } from '@/stores/store.js';
import { components } from './components.js';

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
