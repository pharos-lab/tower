<template>
    <div class="w-54 max-h-full overflow-y-auto shrink-0 p-2">
        <div class="flex gap-2">
            <Card 
                class="justify-center aspect-square items-center w-1/2 gap-2" 
                v-for="layout in layouts" 
                :key="layout.name"
                @click="pageBuilder.addSection(layout)"
            >
                <component :is="layout.icon"></component>
                <p class="text-sm font-semibold text-slate-900/70">{{ layout.name }}</p>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Card } from './ui/card';
import { layouts } from '@/utils/layouts';
import { pageBuilder } from '../stores/store.ts'

</script>
