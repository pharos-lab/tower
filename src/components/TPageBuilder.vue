<template>
  <section class="t-page-builder flex">
    <div class="canvas bg-slate-100 grow relative flex h-screen" id="canvas">
      <div class="main grow overflow-auto">
        <div class="t-sections">
          <TSection
            v-for="section in builder.sections"
            :key="section.id"
            :section="section"
          ></TSection>
        </div>

        <div class="t-add-section flex justify-center items-center h-40">
          <button
            class="
              t-add-section-action
              w-48
              h-20
              pointer-cursor
              border-2 border-dashed border-sky-500
              bg-sky-50
            "
            @click="builder.showModalSection = true"
          >
            Add section
          </button>
        </div>

        <pre>
      {{ builder }}
      </pre
        >
      </div>

      <TSettingSidebar :builder="builder"></TSettingSidebar>

      <TModalSection :show="builder.showModalSection" />

      <TModalComponent :show="builder.showModalComponent" />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import TSidebar from './TSidebar.vue';
import TModalSection from './TModalSection.vue';
import TModalComponent from './TModalComponent.vue';
import TSection from './layouts/TSection.vue';
import TSettingSidebar from './TSettingSidebar.vue';
import { useBuilder } from '@/stores/store.js';

const builder = useBuilder();

function handleModalComponent(block) {
  builder.currentBlock = block;
  builder.showModalComponent = true;
}
</script>

<style scoped>
.t-toolbar::-webkit-scrollbar {
  width: 100px;
}

.t-toolbar {
  scrollbar-width: thin;
}
</style>
