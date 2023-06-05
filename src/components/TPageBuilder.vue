<template>
  <section class="t-page-builder flex">
    <div class="canvas bg-slate-100 grow relative flex h-screen" id="canvas">
      <div class="main grow overflow-auto">
        <div class="t-sections">
          <!--<TSection
            v-for="section in builder.sections"
            :key="section.id"
            :section="section"
          ></TSection>-->

          <div
            class="t-section border border-red-500 h-96 grid"
            :class="gridClass(section.numberOfBlocks)"
            v-for="section in builder.sections"
            :key="section.id"
          >
            <div
              class="t-block border border-green-500 h-full"
              v-for="(block, index) in section.blocks"
              :key="block.id"
            >
              <component
                :is="components[component.name]"
                v-for="component in block.components"
                v-model:data="component.data"
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
                  @click="handleModalComponent(block)"
                >
                  Add Component
                </button>
              </div>
            </div>
          </div>
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
      <div class="sidebar w-64 border border-orange-700 right-0"></div>
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
import { components } from '@/components/components.js';
import { useBuilder } from '@/stores/store.js';

const props = defineProps({});
const builder = useBuilder();
const data = ref();

function handleModalComponent(block) {
  builder.currentBlock = block;
  builder.showModalComponent = true;
}

const gridClass = (nb) => {
  switch (nb) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
  }
};
</script>

<style scoped>
.t-toolbar::-webkit-scrollbar {
  width: 100px;
}

.t-toolbar {
  scrollbar-width: thin;
}
</style>
