<template>
    <div class="grow max-h-full overflow-y-auto p-1">
        <section 
            class="section relative grid p-8 " 
            :class="[{'ring-2 ring-slate-500': pageBuilder.currentSection == section }, gridClass(section.layout.cols)]"
            v-for="section in pageBuilder.sections" 
            :key="section.id"
            @click="pageBuilder.currentSection = section"
        >
            <div 
                class="actions absolute top-1 right-4 bg-slate-200 z-50 leading-none p-1 rounded"
                :class="[pageBuilder.currentSection == section ? 'block' : 'hidden']"
            >
                <button class="cursor-pointer" @click="pageBuilder.removeSection(section.id)" title="Delete section">
                    <Trash class="size-5"></Trash>
                </button>
            </div>

            <div 
                class="relative p-4"
                :class="[{'bg-slate-100 hover:bg-slate-200': block.components.length == 0}, {'bg-slate-200': block.components.length == 0 && pageBuilder.currentBlock == block}]"
                v-for="block in section.blocks"
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
                    <pre>{{  component }}</pre>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { pageBuilder } from '@/stores/store';
import { Trash } from 'lucide-vue-next';


const gridClass = ((cols: number) => {
    const map = [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4'
    ]

    return map[cols - 1]
})
</script>