<template>
    <div 
        class="relative hover:bg-slate-100 p-4"
        :class="{'ring-2 ring-slate-500': pageBuilder.currentComponent == component}"
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
</template>

<script setup lang="ts">
import { usePageBuilder } from '@/stores/store';
import type { Component } from '@/types';
import { Trash } from 'lucide-vue-next';


defineProps<{
    component: Component
}>()

const pageBuilder = usePageBuilder()
</script>