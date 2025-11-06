<template>
    <section 
        class="section relative grid p-8 " 
        :class="[{'ring-2 ring-slate-500': pageBuilder.currentSection == section }, gridClass(section.layout.cols)]"
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

        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { pageBuilder } from '@/stores/store';
import { Trash } from 'lucide-vue-next';
import type { Section } from '@/types';

defineProps<{
    section: Section
}>()


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