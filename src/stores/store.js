import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useBuilder = defineStore('builder', () => {
  const sectionOrder = ref(1);
  const sectionId = ref(1);
  const blockId = ref(1);
  const currentBlock = ref();
  const currentComponent = ref();
  const sections = ref([]);
  const options = ref({});
  const showModalSection = ref(false);
  const showModalComponent = ref(false);
  const showSettingComponent = ref(false);

  return {
    sectionOrder,
    sectionId,
    blockId,
    currentBlock,
    currentComponent,
    sections,
    options,
    showModalComponent,
    showModalSection,
    showSettingComponent,
  };
});
