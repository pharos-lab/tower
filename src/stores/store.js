import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useBuilder = defineStore('builer', () => {
  const store = reactive({
    sectionOrder: 1,
    sectionId: 1,
    blockId: 1,
    currentBlock: null,
    page: {
      sections: [],
      options: {},
    },
    showModalSection: false,
    showModalComponent: false,
  });

  const sectionOrder = ref(1);
  const sectionId = ref(1);
  const blockId = ref(1);
  const currentBlock = ref();
  const sections = ref([]);
  const options = ref({});
  const showModalSection = ref(false);
  const showModalComponent = ref(false);

  return {
    sectionOrder,
    sectionId,
    blockId,
    currentBlock,
    sections,
    options,
    showModalComponent,
    showModalSection,
  };
});
