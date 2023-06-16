<template>
  <TAccordion class="font-semibold text-slate-600">
    <TAccordionItem>
      <template #label>
        <div class="label flex items-center text-xl gap-4 p-4">
          Layouts <ChevronDownIcon class="w-5 h-5 mt-1"></ChevronDownIcon>
        </div>
      </template>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
      temporibus!
    </TAccordionItem>
  </TAccordion>
</template>

<script setup>
import TAccordion from '@/components/TAccordion.vue';
import TAccordionItem from '@/components/TAccordionItem.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
</script>
