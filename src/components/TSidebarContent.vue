<template>
  <div class="flex flex-col gap-3 p-4 text-slate-600 font-semibold">
    <div
      class="t-component-slot flex flex-col gap-2"
      v-for="(slot, slotName) in builder.currentSpecs?.slots"
    >
      <label :for="slot.label" class="">{{ slot.label }}: </label>
      <textarea
        v-model="builder.currentComponent.data.slots[slotName]"
        placeholder="Edit me!"
        class="
          grow
          p-2
          border
          rounded-md
          border-slate-400
          shadow-inner
          bg-slate-50
        "
        rows="1"
      ></textarea>
    </div>

    <div
      class="t-component-href flex flex-col gap-2"
      v-if="builder.currentSpecs?.props.href"
    >
      <label for="href" class="">URL: </label>
      <input
        type="url"
        v-model="builder.currentComponent.data.props.href"
        class="grow p-2 border
          rounded-md
          border-slate-400
          shadow-inner
          bg-slate-50"
        placeholder="www.exemple.com"
      />
    </div>
  </div>
</template>

<script setup>
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();
</script>
