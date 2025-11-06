<template>
    <div 
        class="relative transition-all duration-200 min-h-32"
        :class="blockClasses"
        :key="block.id"
        @click="handleClick"
    >
        <!-- When block is empty (no component) -->
        <div 
            v-if="isEmpty"
            class="absolute inset-0 flex items-center justify-center text-slate-400 text-sm pointer-events-none"
        >
            <div class="text-center">
                <div class="mb-2">
                    <Plus class="size-8 mx-auto opacity-50"></Plus>
                </div>
                <p>Add a component</p>
            </div>
        </div>


        <div 
            v-else
            class="relative hover:bg-slate-100 p-4"
            :class="{'ring-2 ring-slate-500': pageBuilder.currentComponent == component}"
            v-for="component in block.components"
            :key="component.id"
            @click="pageBuilder.currentComponent = component"
        >
            <div 
                class="actions absolute top-1 right-4 bg-slate-200 z-50 leading-none p-1 rounded"
                :class="[pageBuilder.currentComponent == component ? 'block' : 'hidden']"
            >
                <button class="cursor-pointer" @click="pageBuilder.removeComponent(component.id)" title="Delete section">
                    <Trash class="size-5"></Trash>
                </button>
            </div>

            <pre>{{  component }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import type { Block } from '@/types';
import { Plus, Trash } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps<{
    block: Block
}>()

const pageBuilder = usePageBuilder()

const isEmpty = computed(() => props.block.components.length === 0)
const isSelected = computed(() => pageBuilder.currentBlock?.id === props.block.id)

const blockClasses = computed(() => {

    let base = 'border-2 cursor-pointer rounded-lg'

    if (isEmpty.value) {
        if (isSelected.value) {
            return base + ' bg-slate-100 border-slate-300'
        }
        return base + ' bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
    }
})

function handleClick() {
  pageBuilder.currentBlock = props.block
  pageBuilder.tabs = 'components' // ✅ simple et réactif
  console.log(pageBuilder);
  
}
</script>