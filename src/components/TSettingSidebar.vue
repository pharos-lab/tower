<template>
  <div
    class="
      t-setting-component-sidebar
      w-80
      border border-orange-700
      right-0
      bg-white
    "
  >
    <div
      class="
        t-setting-component-nav
        flex
        divide-x-2 divide-slate-300
        text-slate-600
        shadow-md
      "
    >
      <div
        class="grow flex justify-center items-center p-1 hover:bg-slate-200"
        :class="currentTab == 'TSidebarContent' ? 'bg-slate-200' : ''"
        @click="handleTab('TSidebarContent')"
        title="Edit Content"
      >
        <PencilSquareIcon class="w-7 h-7" />
      </div>
      <div
        class="grow flex justify-center items-center p-1 hover:bg-slate-200"
        :class="currentTab == 'TSidebarStyles' ? 'bg-slate-200' : ''"
        @click="handleTab('TSidebarStyles')"
      >
        <RectangleGroupIcon class="w-7 h-7" />
      </div>
      <div
        class="grow flex justify-center items-center p-1 hover:bg-slate-200"
        :class="currentTab == 'TSidebarBoxing' ? 'bg-slate-200' : ''"
        @click="handleTab('TSidebarBoxing')"
      >
        <CubeIcon class="w-7 h-7" />
      </div>
      <div
        class="grow flex justify-center items-center p-1 hover:bg-slate-200"
        :class="currentTab == 'TSidebarPage' ? 'bg-slate-200' : ''"
        @click="handleTab('TSidebarPage')"
      >
        <DocumentTextIcon class="w-7 h-7" />
      </div>
    </div>

    <component :is="tabs[currentTab]"></component>

    <!--
    <TAccordion color="gray" mode="fill">
      <TAccordionItem label="content" class="bg-white">
        <div class="flex flex-col gap-3">
          <div
            class="t-component-slot flex flex-col gap-2"
            v-for="(slot, slotName) in builder.currentSpecs?.slots"
          >
            <label :for="slot.label" class="">{{ slot.label }}: </label>
            <textarea
              v-model="builder.currentComponent.data.slots[slotName]"
              placeholder="Edit me!"
              class="rounded-sm grow p-2"
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
              class="rounded-sm grow p-2"
              placeholder="www.exemple.com"
            />
          </div>
        </div>
      </TAccordionItem>

      <TAccordionItem label="props">
        <div
          class="t-component-prop"
          v-for="(prop, propName) in builder.currentSpecs?.props"
        >
          <label for="">{{ propName }}: </label>

          <div class="flex gap-2">
            <div class="grow" v-for="value in prop.valid">
              {{ value }}
            </div>
          </div>

          <select
            v-model="builder.currentComponent.data.props[propName]"
            v-if="prop.hasOwnProperty('valid')"
          >
            <option :value="placeholder" disabled>
              Select a {{ propName }}
            </option>
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
      </TAccordionItem>
      <TAccordionItem label="props"> ok </TAccordionItem>
      <TAccordionItem label="layouts"> ok </TAccordionItem>
    </TAccordion>-->

    <pre>{{ builder.currentComponent }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBuilder } from '@/stores/store.js';
import TAccordion from '@/components/TAccordion.vue';
import TAccordionItem from '@/components/TAccordionItem.vue';
import { PencilSquareIcon } from '@heroicons/vue/24/outline';
import { CubeIcon } from '@heroicons/vue/24/outline';
import { DocumentTextIcon } from '@heroicons/vue/24/outline';
import { RectangleGroupIcon } from '@heroicons/vue/24/outline';

import TSidebarContent from '@/components/TSidebarContent.vue';
import TSidebarStyles from '@/components/TSidebarStyles.vue';
import TSidebarBoxing from '@/components/TSidebarBoxing.vue';
import TSidebarPage from '@/components/TSidebarPage.vue';

const builder = useBuilder();
const currentTab = ref('TSidebarContent');

const tabs = { TSidebarContent, TSidebarStyles, TSidebarBoxing, TSidebarPage };

function handleTab(component) {
  currentTab.value = component;
}

function handlePropChange(name, event) {
  builder.currentComponent.data.props[name] = event.target.value;
}

function handleSlotChange(slot, event) {
  builder.currentComponent.data.slots[slot] = event.target.value;
}
</script>

<style scoped></style>
