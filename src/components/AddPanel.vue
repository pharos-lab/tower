<template>
    <div class="w-56 max-h-full overflow-y-auto shrink-0 p-2 bg-slate-50">
        <Tabs v-model="pageBuilder.panelTabs">
            <TabsList class="w-full">
                <TabsTrigger value="sections">Sections</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
            </TabsList>

            <TabsContent value="sections">
                <div class="grid grid-cols-2 gap-2 flex-wrap">
                    <Card 
                        class="justify-center aspect-square items-center gap-2 hover:bg-slate-100" 
                        v-for="layout in layouts" 
                        :key="layout.name"
                        @click="pageBuilder.addSection(layout)"
                    >
                        <component :is="layout.icon"></component>
                        <p class="text-sm font-semibold text-slate-900/70">{{ layout.name }}</p>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="components">
                <div class="grid grid-cols-2 gap-2 flex-wrap">
                    <Card 
                        class="justify-center aspect-square items-center gap-2 hover:bg-slate-100" 
                        v-for="component in components" 
                        :key="component.name"
                        @click="pageBuilder.addComponent(component)"
                    >
                        <p class="text-sm font-semibold text-slate-900/70">{{ component.name }}</p>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
        
    </div>
</template>

<script setup lang="ts">
import { Card } from './ui/card';
import { layouts } from '@/utils/layouts';
import { components } from '@/utils/components.ts';
import { usePageBuilder } from '../stores/store.ts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const pageBuilder = usePageBuilder()
</script>
