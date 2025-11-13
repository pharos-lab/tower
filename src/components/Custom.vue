<!-- Custom.vue -->
<template>
    <div class="w-84 bg-slate-50 max-h-full overflow-y-auto shrink-0">
        <Tabs v-model="pageBuilder.customTabs">
            <TabsList class="w-full rounded-none">
                <TabsTrigger value="section">Section</TabsTrigger>
                <TabsTrigger value="block">Block</TabsTrigger>
                <TabsTrigger value="component">Component</TabsTrigger>
            </TabsList>

            <!-- SECTION TAB -->
            <TabsContent value="section" class="p-4">
                <SectionTab></SectionTab>
            </TabsContent>

            <!-- BLOCK TAB -->
            <TabsContent value="block" class="p-4">
                <BlockTab></BlockTab>
                
            </TabsContent>

            <!-- COMPONENT TAB -->
            <TabsContent value="component" class="p-4">
                <div class="text-slate-400 text-sm">Component customization coming soon...</div>
            </TabsContent>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsContent, TabsTrigger } from './ui/tabs';
import { usePageBuilder } from '@/stores/store';
import SectionTab from './SectionTab.vue';
import BlockTab from './BlockTab.vue';

const pageBuilder = usePageBuilder()
</script>