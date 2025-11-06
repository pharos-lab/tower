<template>
    <div 
        class="relative hover:bg-slate-50 p-4 rounded-lg z-20"
        :class="{'ring-2 ring-slate-500': pageBuilder.currentComponent == component}"
        @click="pageBuilder.currentComponent = component"
    >

        <div 
            class="absolute top-0 right-0 flex items-center gap-2 px-3 py-1 bg-white border shadow-sm transition-opacity z-50 -translate-y-full rounded-t-lg border-b-2 border-b-slate-500"
            :class="[
                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
            ]"
        >

            <span class="text-xs font-medium text-slate-700">{{ component.name }}</span>

            <button 
                @click.stop="pageBuilder.removeComponent(component.id)" 
                class="ml-2 p-1 hover:bg-red-50 rounded transition-colors group"
                title="Delete section"
            >
                <Trash class="size-3.5 text-slate-400 group-hover:text-red-500"></Trash>
            </button>
        </div>

        <pre>{{  component }}</pre>
    </div>
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import type { Component } from '@/types';
import { Trash } from 'lucide-vue-next';
import { computed } from 'vue';


const props = defineProps<{
    component: Component
}>()

const pageBuilder = usePageBuilder()

const isSelected = computed(() => pageBuilder.currentComponent == props.component)
</script>