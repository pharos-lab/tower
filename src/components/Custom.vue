<template>
    <div class="w-84 bg-slate-200 max-h-full overflow-y-auto shrink-0">
        <Tabs v-model="pageBuilder.customTabs">
            <TabsList class="w-full rounded-none">
                <TabsTrigger value="section">section</TabsTrigger>
                <TabsTrigger value="block">block</TabsTrigger>
                <TabsTrigger value="component">component</TabsTrigger>
            </TabsList>

            <TabsContent value="section">section</TabsContent>
            <TabsContent value="block">block</TabsContent>
            <TabsContent value="component">component</TabsContent>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsContent, TabsTrigger } from './ui/tabs';
import { usePageBuilder } from '@/stores/store';

const pageBuilder = usePageBuilder()
</script>