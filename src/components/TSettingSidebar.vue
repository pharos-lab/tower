<template>
  <div
    class="t-setting-component-sidebar w-64 border border-orange-700 right-0"
  >
    <h3 class="text-center my-4">Change the component</h3>
    <div class="t-component-props">
      <div
        class="t-component-prop"
        v-for="(prop, propName) in builder.currentComponent?.data.specs"
      >
        <label :for="propName">{{ propName }}: </label>
        <select
          @input="handleChange(propName, $event)"
          :name="propName"
          :id="propName"
          v-if="prop.hasOwnProperty('valid')"
        >
          <option value="">Select a {{ propName }}</option>
          <option
            :value="value"
            v-for="value in prop.valid"
            :selected="builder.currrentComponent?.data.props[propName] == value"
          >
            {{ value }}
          </option>
        </select>

        <input
          type="text"
          :name="propName"
          v-else
          @input="handleChange(propName, $event)"
        />
      </div>
    </div>

    <pre>{{ builder.currentComponent }}</pre>
  </div>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

function handleChange(name, event) {
  builder.currentComponent.data.props[name] = event.target.value;
}

onMounted(() => {
  console.log('mounted');
});
onUpdated(() => {
  console.log('updated');
});
</script>

<style scoped></style>
