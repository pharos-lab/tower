<template>
  <div
    class="t-setting-component-sidebar w-64 border border-orange-700 right-0"
  >
    <h3 class="text-center my-4">Change the component</h3>

    <div class="t-component-slots my-4">
      <h4 class="my-2">Edit content</h4>
      <div
        class="t-slot"
        v-for="(slot, slotName) in builder.currentSpecs?.slots"
      >
        <label :for="slot.label">{{ slot.label }}: </label>
        <input :type="slot.type" @input="handleSlotChange(slotName, $event)" />
      </div>
    </div>

    <div class="t-component-props">
      <h4 class="my-2">Edit the component style</h4>
      <div
        class="t-component-prop"
        v-for="(prop, propName) in builder.currentSpecs?.props"
      >
        <label for="">{{ propName }}: </label>

        <select
          v-model="builder.currentComponent.data.props[propName]"
          v-if="prop.hasOwnProperty('valid')"
        >
          <option :value="placeholder" disabled>Select a {{ propName }}</option>
          <option
            v-for="value in prop.valid"
            :value="value"
            :selected="
              builder.currrentComponent?.data.props[propName] == value ||
              prop.default
            "
          >
            {{ value }}
          </option>
        </select>

        <input
          type="text"
          :name="propName"
          v-else
          @input="handlePropChange(propName, $event)"
        />
      </div>
    </div>

    <pre>{{ builder.currentComponent }}</pre>
  </div>
</template>

<script setup>
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

function handlePropChange(name, event) {
  builder.currentComponent.data.props[name] = event.target.value;
}

function handleSlotChange(slot, event) {
  builder.currentComponent.data.slots[slot] = event.target.value;
}
</script>

<style scoped></style>
