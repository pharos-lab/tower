<template>
  <div class="t-block border border-green-500 h-full">
    <component
      :is="componentsBuild[component.name]"
      v-for="component in block.components"
      v-model:data="component.data"
      @click="openSettingComponent(component)"
    ></component>

    <div class="t-add-block flex justify-center items-center h-24">
      {{ data }}
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
import { computed, ref } from 'vue';
import { useBuilder } from '@/stores/store.js';
import { componentsBuild } from '@/components/components.js';

const builder = useBuilder();

const props = defineProps({
  block: Object,
});

const data = ref();

function handleModalComponent() {
  builder.currentBlock = props.block;
  builder.showModalComponent = true;
}

function openSettingComponent(component) {
  builder.currentComponent = component;
  import(`@/components/${component.name}/${component.name}Specs.js`).then(
    (module) => {
      console.log(module.props);
      builder.currentComponent.data.props = props;
    }
  );
  builder.showSettingComponent = true;
}
</script>

<style scoped></style>
