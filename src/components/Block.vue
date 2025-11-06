<template>
    <div 
        class="relative p-4"
        :class="[{'bg-slate-100 hover:bg-slate-200': block.components.length == 0}, {'bg-slate-200': block.components.length == 0 && pageBuilder.currentBlock == block}]"
        :key="block.id"
        @click="pageBuilder.currentBlock = block"
    >
        <div 
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
import { pageBuilder } from '@/stores/store';
import type { Block } from '@/types';
import { Trash } from 'lucide-vue-next';

defineProps<{
    block: Block
}>()

</script>