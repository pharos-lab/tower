<template>
    <div 
        class="block-builder relative transition-all duration-200"
        :class="[blockClasses, {'min-h-32': isEmpty}]"
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
            class="flex flex-col h-full"
            :style="styles"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import type { Block, UnitValue } from '@/types';
import { Plus } from 'lucide-vue-next';
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
  pageBuilder.panelTabs = 'components'
  pageBuilder.customTabs = 'block'
}

const styles = computed(() => {
    const s = props.block.styles ?? {}
    const result: Record<string, string> = {}

    for (const [prop, data] of Object.entries(s) as [string, UnitValue][]) {
        if (typeof data === 'string') {
            result[prop] = data
        } else {
            result[prop] = `${data.value}${data.unit}`
        }
    }

    return result
})

</script>